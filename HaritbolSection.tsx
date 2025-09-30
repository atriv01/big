import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Trees, Leaf, Heart, Camera, Users, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function HaritbolSection() {
  const initiatives = [
    {
      icon: Trees,
      title: "Tree Plantation Drives",
      description: "Organized plantation campaigns across various cities and schools",
      count: "50,000+",
      metric: "Trees Planted",
      color: "bg-green-600"
    },
    {
      icon: Leaf,
      title: "Awareness Campaigns",
      description: "Educational programs on environmental conservation and tree preservation",
      count: "200+",
      metric: "Campaigns",
      color: "bg-emerald-600"
    },
    {
      icon: Users,
      title: "Community Participation",
      description: "Engaging citizens in environmental protection activities",
      count: "25,000+",
      metric: "Volunteers",
      color: "bg-teal-600"
    },
    {
      icon: MapPin,
      title: "City Coverage",
      description: "Spreading green consciousness across multiple Indian cities",
      count: "15+",
      metric: "Cities",
      color: "bg-lime-600"
    }
  ];

  const activities = [
    {
      title: "School Tree Plantation",
      description: "Students planting saplings in school premises as part of environmental education",
      image: "school tree plantation students"
    },
    {
      title: "Community Green Drives",
      description: "Local communities coming together for neighborhood plantation drives",
      image: "community tree plantation volunteers"
    },
    {
      title: "Urban Forestry",
      description: "Creating green spaces in urban areas to combat pollution and climate change",
      image: "urban forest city trees"
    }
  ];

  return (
    <section id="haritbol" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Trees className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Haritbol Initiative
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Preserving India's green heritage through community-driven tree plantation 
            and environmental conservation programs. Building ecological consciousness 
            as a fundamental duty.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 ${initiative.color} rounded-lg flex items-center justify-center mx-auto`}>
                    <initiative.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{initiative.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{initiative.count}</div>
                  <p className="text-sm text-gray-600 mb-3">{initiative.metric}</p>
                  <p className="text-gray-600">{initiative.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Activity Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Green Activities</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative bg-gray-100">
                  <ImageWithFallback
                    src={`https://source.unsplash.com/400x240/${activity.image}`}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{activity.title}</h4>
                  <p className="text-gray-600">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Environmental Pledge */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <Heart className="h-10 w-10 text-green-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Environmental Pledge</h3>
            <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto italic">
              "I pledge to protect and preserve our environment, to plant and nurture trees, 
              and to fulfill my fundamental duty towards protecting India's natural heritage 
              for future generations."
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-green-600 hover:bg-green-700">
                <Camera className="h-4 w-4 mr-2" />
                Share Your Green Story
              </Button>
              <Button variant="outline">
                <Trees className="h-4 w-4 mr-2" />
                Join Next Drive
              </Button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Be Part of the Green Revolution</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every tree planted is a step towards a greener, healthier India. 
            Join our Haritbol initiative and make environmental conservation your fundamental duty.
          </p>
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Next Plantation Drive: Coming Soon
          </Badge>
        </div>
      </div>
    </section>
  );
}