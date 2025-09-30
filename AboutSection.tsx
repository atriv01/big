import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Calendar, Users, BookOpen, Award } from 'lucide-react';

interface AboutContent {
  title: string;
  description: string;
  mission: string;
}

interface AboutSectionProps {
  content: AboutContent;
}

export default function AboutSection({ content }: AboutSectionProps) {
  // Provide fallback values in case content is not available
  const safeContent = {
    title: content?.title || "About Build India Group",
    description: content?.description || "A Delhi-based civil society organization pioneering the movement of fundamental duties as a precondition to assert rights.",
    mission: content?.mission || "Build India Group (BIG) is perhaps the first organization in the country which talks about discharging fundamental duties as a necessary precondition to assert rights."
  };
  
  const milestones = [
    {
      icon: Calendar,
      year: "2006",
      title: "Foundation",
      description: "Founded by journalist-turned-lawyer Biraja Mahapatra"
    },
    {
      icon: BookOpen,
      year: "1977",
      title: "Constitutional Foundation",
      description: "Based on Article 51A introduced via 42nd Amendment"
    },
    {
      icon: Users,
      year: "15+",
      title: "Languages",
      description: "Pledge drafted in 15 languages across India"
    },
    {
      icon: Award,
      year: "1949",
      title: "November 26",
      description: "Constitution adoption transformed 35 crore subjects to sovereign citizens"
    }
  ];

  return (
    <section id="about" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {safeContent.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {safeContent.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1622119029245-5bf43951115a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50cyUyMHJlYWRpbmclMjBib29rc3xlbnwxfHx8fDE3NTc0OTI2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Students studying"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Our Unique Approach</h3>
            <p className="text-gray-700">
              {safeContent.mission}
            </p>
            <p className="text-gray-700">
              We focus on building citizenry consciousness across the country with Article 51A of the 
              Constitution dealing with fundamental duties as our foundation.
            </p>
            <p className="text-gray-700">
              Our simple yet powerful exercise involves students writing pledges in their mother tongue, 
              obtaining signatures from their parents, and reciting them in unison in schools. The effect 
              is truly magical.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <milestone.icon className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{milestone.year}</div>
                  <h4 className="font-semibold text-gray-900 mt-2">{milestone.title}</h4>
                  <p className="text-sm text-gray-600 mt-2">{milestone.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}