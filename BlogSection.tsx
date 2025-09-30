import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Calendar, User, ArrowRight, BookOpen, Eye, MessageSquare } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogContent {
  title: string;
  description: string;
  posts: Array<{
    title: string;
    excerpt: string;
    author: string;
    category: string;
    date: string;
  }>;
}

interface BlogSectionProps {
  content: BlogContent;
}

export default function BlogSection({ content }: BlogSectionProps) {
  // Provide fallback values in case content is not available
  const safeContent = {
    title: content?.title || "Insights & Perspectives",
    description: content?.description || "Thought-provoking articles on constitutional values, civic engagement, and building a stronger India through conscious citizenship.",
    posts: content?.posts || []
  };
  
  const featuredPost = {
    title: "The Transformative Power of Constitutional Consciousness",
    excerpt: "How understanding our fundamental duties can reshape India's future and create a generation of responsible citizens committed to nation-building.",
    author: "Biraja Mahapatra",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Constitutional Awareness",
    image: "constitutional awareness education india",
    views: 1247,
    comments: 23
  };

  const defaultBlogPosts = [
    {
      title: "Mother Tongue Education: Preserving Cultural Identity",
      excerpt: "The importance of teaching constitutional values in regional languages to create deeper connections with our heritage.",
      author: "Dr. Priya Nair",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Education",
      image: "indian students mother tongue education",
      views: 892,
      comments: 15
    },
    {
      title: "Youth Engagement in Democratic Processes",
      excerpt: "How the younger generation can actively participate in strengthening India's democratic institutions.",
      author: "Rahul Mehta",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Democracy",
      image: "young indian voters democracy participation",
      views: 756,
      comments: 18
    },
    {
      title: "Environmental Conservation as Fundamental Duty",
      excerpt: "Article 51A(g) and its relevance in addressing climate change and environmental degradation in modern India.",
      author: "Dr. Kavita Singh",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Environment",
      image: "environmental conservation india nature",
      views: 934,
      comments: 21
    },
    {
      title: "Building Unity in Diversity: The Indian Way",
      excerpt: "How constitutional values can help maintain harmony while celebrating India's rich cultural diversity.",
      author: "Prof. Ashok Kumar",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Unity",
      image: "indian cultural diversity unity harmony",
      views: 1123,
      comments: 27
    },
    {
      title: "Digital Citizenship and Constitutional Values",
      excerpt: "Navigating the digital age while upholding our fundamental duties and responsibilities as Indian citizens.",
      author: "Neha Gupta",
      date: "March 3, 2024",
      readTime: "5 min read",
      category: "Technology",
      image: "digital india technology citizenship",
      views: 678,
      comments: 12
    },
    {
      title: "Community Service: From Duty to Joy",
      excerpt: "Personal stories of transformation through community service and how it strengthens the social fabric.",
      author: "Ravi Sharma",
      date: "March 1, 2024",
      readTime: "4 min read",
      category: "Community",
      image: "community service volunteers india",
      views: 543,
      comments: 9
    }
  ];

  const blogPosts = safeContent.posts.length > 0 ? safeContent.posts : defaultBlogPosts;

  const categories = [
    { name: "Constitutional Awareness", count: 12, color: "bg-blue-100 text-blue-800" },
    { name: "Education", count: 8, color: "bg-green-100 text-green-800" },
    { name: "Democracy", count: 6, color: "bg-purple-100 text-purple-800" },
    { name: "Environment", count: 5, color: "bg-emerald-100 text-emerald-800" },
    { name: "Unity", count: 4, color: "bg-orange-100 text-orange-800" },
    { name: "Technology", count: 3, color: "bg-red-100 text-red-800" }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {safeContent.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {safeContent.description}
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto relative bg-gray-100">
                <ImageWithFallback
                  src={`https://source.unsplash.com/600x400/${featuredPost.image}`}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-orange-600">
                  Featured
                </Badge>
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <Badge variant="secondary" className="mb-3">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {featuredPost.excerpt}
                  </p>
                </div>
                <div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{featuredPost.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{featuredPost.comments}</span>
                      </div>
                    </div>
                    <Button>
                      Read More <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative bg-gray-100">
                    <ImageWithFallback
                      src={`https://source.unsplash.com/400x240/${post.image}`}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {post.category}
                    </Badge>
                    <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center space-x-3 text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageSquare className="h-3 w-3" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <Badge variant="secondary" className={`${category.color} text-xs`}>
                      {category.name}
                    </Badge>
                    <span className="text-sm text-gray-500">({category.count})</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-to-r from-orange-50 to-green-50">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">Stay Updated</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Get the latest insights on constitutional awareness and civic engagement.
                </p>
                <Button className="w-full" size="sm">
                  Subscribe to Newsletter
                </Button>
              </CardContent>
            </Card>

            {/* Recent Comments */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Comments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="text-gray-600 mb-1">"Great insights on constitutional awareness..."</p>
                  <p className="text-xs text-gray-500">- Rajesh on Youth Engagement</p>
                </div>
                <div className="text-sm">
                  <p className="text-gray-600 mb-1">"This article changed my perspective..."</p>
                  <p className="text-xs text-gray-500">- Priya on Digital Citizenship</p>
                </div>
                <div className="text-sm">
                  <p className="text-gray-600 mb-1">"Excellent explanation of Article 51A..."</p>
                  <p className="text-xs text-gray-500">- Amit on Environmental Conservation</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}