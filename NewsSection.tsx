import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Calendar, ExternalLink, Bell, TrendingUp, Clock, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface NewsContent {
  title: string;
  description: string;
  news: Array<{
    title: string;
    summary: string;
    category: string;
    location: string;
    date: string;
    time: string;
  }>;
}

interface NewsSectionProps {
  content: NewsContent;
}

export default function NewsSection({ content }: NewsSectionProps) {
  // Provide fallback values in case content is not available
  const safeContent = {
    title: content?.title || "News & Updates",
    description: content?.description || "Stay informed about our latest initiatives, achievements, and impact in building constitutional consciousness across India.",
    news: content?.news || []
  };
  
  const breakingNews = {
    title: "BIG Launches Constitutional Awareness Drive in 100 Schools Across Delhi",
    summary: "Build India Group partners with Delhi Education Department to introduce fundamental duties curriculum in government schools.",
    time: "2 hours ago",
    category: "Education",
    urgent: true
  };

  const defaultLatestNews = [
    {
      title: "National Pledge Day Celebrations Draw 50,000 Students",
      summary: "Students from 15 states participated in synchronized pledge recitation in their mother tongues, creating unprecedented unity.",
      date: "March 18, 2024",
      time: "6 hours ago",
      category: "Events",
      location: "Pan India",
      image: "indian students national pledge celebration",
      views: 2340
    },
    {
      title: "Supreme Court Mentions BIG's Work in Fundamental Duties Judgment",
      summary: "Honorable Supreme Court acknowledges Build India Group's contribution to constitutional awareness in landmark judgment.",
      date: "March 17, 2024",
      time: "1 day ago",
      category: "Legal",
      location: "New Delhi",
      image: "supreme court india constitutional law",
      views: 3450
    },
    {
      title: "Haritbol Initiative Plants 10,000 Trees in Mumbai Schools",
      summary: "Major environmental milestone achieved as students and volunteers complete massive tree plantation drive across 50 schools.",
      date: "March 16, 2024",
      time: "2 days ago",
      category: "Environment",
      location: "Mumbai",
      image: "tree plantation mumbai schools students",
      views: 1890
    },
    {
      title: "International Conference on Civic Education Features BIG",
      summary: "Biraja Mahapatra addresses global educators on the power of mother tongue in constitutional education.",
      date: "March 15, 2024",
      time: "3 days ago",
      category: "International",
      location: "Singapore",
      image: "international conference civic education",
      views: 1567
    }
  ];

  const latestNews = safeContent.news.length > 0 ? safeContent.news : defaultLatestNews;

  const pressReleases = [
    {
      title: "BIG Announces Partnership with UNESCO for Multilingual Education",
      date: "March 14, 2024",
      type: "Partnership Announcement"
    },
    {
      title: "Annual Report 2023-24: Reaching 500,000 Students Nationwide",
      date: "March 12, 2024",
      type: "Annual Report"
    },
    {
      title: "New Mobile App Launched for Constitutional Pledge Repository",
      date: "March 10, 2024",
      type: "Product Launch"
    },
    {
      title: "BIG Founder Receives National Award for Civic Education",
      date: "March 8, 2024",
      type: "Recognition"
    }
  ];

  const upcomingEvents = [
    {
      title: "National Youth Parliament",
      date: "March 25, 2024",
      location: "Vigyan Bhawan, New Delhi",
      type: "Conference"
    },
    {
      title: "Constitutional Awareness Workshop",
      date: "March 28, 2024",
      location: "Bangalore",
      type: "Workshop"
    },
    {
      title: "Mother Tongue Education Summit",
      date: "April 2, 2024",
      location: "Mumbai",
      type: "Summit"
    }
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {safeContent.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {safeContent.description}
          </p>
        </div>

        {/* Breaking News */}
        <div className="mb-12">
          <Card className="border-l-4 border-l-red-500 bg-red-50">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Badge className="bg-red-600 text-white">
                    <Bell className="h-3 w-3 mr-1" />
                    Breaking
                  </Badge>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">{breakingNews.title}</h3>
                  <p className="text-gray-700 mb-3">{breakingNews.summary}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{breakingNews.time}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {breakingNews.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Latest News */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Latest News</h3>
            <div className="space-y-6">
              {latestNews.map((news, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="aspect-video md:aspect-auto relative bg-gray-100">
                      <ImageWithFallback
                        src={`https://source.unsplash.com/300x200/${news.image}`}
                        alt={news.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-2 p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {news.category}
                        </Badge>
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <MapPin className="h-3 w-3" />
                          <span>{news.location}</span>
                        </div>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{news.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{news.summary}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{news.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{news.time}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="h-3 w-3" />
                            <span>{news.views} views</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Press Releases */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  Press Releases
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {pressReleases.map((release, index) => (
                  <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                    <h5 className="font-medium text-gray-900 text-sm mb-1">{release.title}</h5>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{release.date}</span>
                      <Badge variant="outline" className="text-xs">
                        {release.type}
                      </Badge>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  View All Releases
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-4 border-l-blue-500 pl-3">
                    <h5 className="font-medium text-gray-900 text-sm mb-1">{event.title}</h5>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{event.location}</span>
                      </div>
                      <Badge variant="outline" className="text-xs mt-1">
                        {event.type}
                      </Badge>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  View All Events
                </Button>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-to-r from-orange-50 to-green-50">
              <CardContent className="p-6 text-center">
                <Bell className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Stay Informed</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Get breaking news and updates about our constitutional awareness initiatives.
                </p>
                <Button className="w-full" size="sm">
                  Subscribe to Updates
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}