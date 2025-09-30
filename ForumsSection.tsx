import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MessageSquare, Users, Clock, TrendingUp, Pin, ThumbsUp, Eye } from 'lucide-react';

export default function ForumsSection() {
  const forumCategories = [
    {
      icon: MessageSquare,
      title: "Constitutional Discussions",
      description: "Debates and discussions on fundamental rights and duties",
      topics: 45,
      posts: 234,
      color: "bg-blue-600",
      active: true
    },
    {
      icon: Users,
      title: "Civic Engagement",
      description: "How citizens can actively participate in nation building",
      topics: 32,
      posts: 187,
      color: "bg-green-600",
      active: true
    },
    {
      icon: TrendingUp,
      title: "Social Issues",
      description: "Addressing contemporary challenges facing our society",
      topics: 28,
      posts: 156,
      color: "bg-orange-600",
      active: false
    },
    {
      icon: Pin,
      title: "Policy & Governance",
      description: "Discussion on policies and their impact on citizens",
      topics: 21,
      posts: 98,
      color: "bg-purple-600",
      active: true
    }
  ];

  const recentDiscussions = [
    {
      title: "Role of Youth in Constitutional Awareness",
      author: "Dr. Priya Sharma",
      replies: 23,
      views: 456,
      lastActivity: "2 hours ago",
      category: "Constitutional Discussions",
      pinned: true
    },
    {
      title: "Environmental Protection as Fundamental Duty",
      author: "Rajesh Kumar",
      replies: 18,
      views: 332,
      lastActivity: "4 hours ago",
      category: "Civic Engagement",
      pinned: false
    },
    {
      title: "Digital India and Citizen Participation",
      author: "Anita Verma",
      replies: 15,
      views: 289,
      lastActivity: "6 hours ago",
      category: "Policy & Governance",
      pinned: false
    },
    {
      title: "Mother Tongue Education and Cultural Preservation",
      author: "Prof. Ramesh Gupta",
      replies: 31,
      views: 567,
      lastActivity: "8 hours ago",
      category: "Social Issues",
      pinned: true
    },
    {
      title: "Community Service and National Development",
      author: "Meera Joshi",
      replies: 12,
      views: 234,
      lastActivity: "1 day ago",
      category: "Civic Engagement",
      pinned: false
    }
  ];

  const stats = [
    { label: "Total Members", value: "2,450", icon: Users },
    { label: "Active Discussions", value: "126", icon: MessageSquare },
    { label: "Topics Created", value: "340", icon: Pin },
    { label: "Total Posts", value: "1,200", icon: TrendingUp }
  ];

  return (
    <section id="forums" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Community Forums
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Engage in meaningful discussions about constitutional values, civic duties, 
            and nation-building with like-minded citizens from across India.
          </p>
        </div>

        {/* Forum Stats */}
        <div className="mb-16">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-white">
                <CardContent className="space-y-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Forum Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Discussion Categories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {forumCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    {category.active && (
                      <Badge variant="default" className="bg-green-100 text-green-800 text-xs">
                        Active
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{category.topics} topics</span>
                    <span>{category.posts} posts</span>
                  </div>
                  <Button size="sm" className="w-full">
                    Join Discussion
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Discussions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recent Discussions</h3>
          <Card className="bg-white">
            <CardContent className="p-0">
              <div className="divide-y divide-gray-200">
                {recentDiscussions.map((discussion, index) => (
                  <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {discussion.pinned && (
                            <Pin className="h-4 w-4 text-orange-500" />
                          )}
                          <h4 className="font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                            {discussion.title}
                          </h4>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                          <span>By {discussion.author}</span>
                          <Badge variant="outline" className="text-xs">
                            {discussion.category}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <MessageSquare className="h-4 w-4" />
                            <span>{discussion.replies} replies</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{discussion.views} views</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{discussion.lastActivity}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ThumbsUp className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join the Conversation</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Share your thoughts, learn from others, and contribute to building a stronger, 
            more conscious India through meaningful discussions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <MessageSquare className="h-4 w-4 mr-2" />
              Start New Discussion
            </Button>
            <Button variant="outline">
              <Users className="h-4 w-4 mr-2" />
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}