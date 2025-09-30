import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Download, Heart, Users, BookOpen, Globe } from 'lucide-react';

export default function PledgesSection() {
  const languages = [
    { name: 'Hindi', code: 'hi', speakers: '600M+' },
    { name: 'English', code: 'en', speakers: '125M+' },
    { name: 'Bengali', code: 'bn', speakers: '100M+' },
    { name: 'Telugu', code: 'te', speakers: '95M+' },
    { name: 'Marathi', code: 'mr', speakers: '90M+' },
    { name: 'Tamil', code: 'ta', speakers: '80M+' },
    { name: 'Gujarati', code: 'gu', speakers: '65M+' },
    { name: 'Urdu', code: 'ur', speakers: '60M+' },
    { name: 'Kannada', code: 'kn', speakers: '50M+' },
    { name: 'Odia', code: 'or', speakers: '45M+' },
    { name: 'Malayalam', code: 'ml', speakers: '40M+' },
    { name: 'Punjabi', code: 'pa', speakers: '35M+' },
    { name: 'Assamese', code: 'as', speakers: '15M+' },
    { name: 'Sanskrit', code: 'sa', speakers: 'Classical' },
    { name: 'Others', code: 'misc', speakers: 'Various' }
  ];

  const pledgeTypes = [
    {
      icon: Heart,
      title: "Constitutional Pledge",
      description: "Core pledge based on Article 51A fundamental duties",
      languages: 15,
      color: "bg-red-500"
    },
    {
      icon: Users,
      title: "Unity Pledge",
      description: "Promoting national integration and harmony",
      languages: 15,
      color: "bg-blue-500"
    },
    {
      icon: BookOpen,
      title: "Education Pledge",
      description: "Commitment to learning and knowledge sharing",
      languages: 12,
      color: "bg-green-500"
    },
    {
      icon: Globe,
      title: "Environment Pledge",
      description: "Protecting our natural heritage and resources",
      languages: 10,
      color: "bg-emerald-500"
    }
  ];

  return (
    <section id="pledges" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pledge Repository
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Constitutional pledges available in 15 Indian languages, connecting students 
            with their roots while building national consciousness.
          </p>
        </div>

        {/* Pledge Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Available Pledges</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pledgeTypes.map((pledge, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 ${pledge.color} rounded-lg flex items-center justify-center`}>
                      <pledge.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {pledge.languages} Languages
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{pledge.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{pledge.description}</p>
                  <Button size="sm" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Language Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Available Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {languages.map((language, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-md transition-shadow bg-white">
                <CardContent className="space-y-2">
                  <h4 className="font-semibold text-gray-900">{language.name}</h4>
                  <p className="text-sm text-gray-600">{language.speakers}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Pledges
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pledge Impact</h3>
            <p className="text-gray-600">The transformative power of mother tongue pledges</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">500K+</div>
              <p className="text-gray-600">Students Pledged</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15</div>
              <p className="text-gray-600">Languages Supported</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-gray-600">Schools Participated</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">25</div>
              <p className="text-gray-600">States Covered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}