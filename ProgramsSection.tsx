import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Brain, Users, Heart, BookOpen, Camera, FileText, MessageSquare } from 'lucide-react';

interface ProgramContent {
  title: string;
  description: string;
  programs: Array<{
    title: string;
    description: string;
    status: string;
    icon?: string;
    color?: string;
  }>;
}

interface ProgramsSectionProps {
  content: ProgramContent;
}

export default function ProgramsSection({ content }: ProgramsSectionProps) {
  // Provide fallback values in case content is not available
  const safeContent = {
    title: content?.title || "Our Programs & Initiatives",
    description: content?.description || "Building consciousness through diverse programs focused on fundamental duties and constitutional values.",
    programs: content?.programs || []
  };
  
  // Icon mapping function
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      Brain,
      Users,
      Heart,
      BookOpen,
      Camera,
      FileText,
      MessageSquare
    };
    return iconMap[iconName] || Heart; // Default fallback
  };
  
  const defaultPrograms = [
    {
      icon: Brain,
      title: "#BrainRegain",
      description: "Initiative to bring back intellectual talent to contribute to India's development",
      status: "Active",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "#Campaigner",
      description: "Platform for citizens to become active campaigners for fundamental duties",
      status: "Ongoing",
      color: "bg-green-500"
    },
    {
      icon: Heart,
      title: "Pledge Festival",
      description: "Students write pledges in mother tongue and commit to good citizenship",
      status: "Annual",
      color: "bg-red-500"
    },
    {
      icon: Users,
      title: "Aikyataan",
      description: "Unity programs promoting harmony and constitutional values",
      status: "Active",
      color: "bg-purple-500"
    },
    {
      icon: BookOpen,
      title: "Audacity of Dreams",
      description: "Educational content and book promoting constitutional awareness",
      status: "Published",
      color: "bg-orange-500"
    },
    {
      icon: FileText,
      title: "Press Releases",
      description: "Regular communications on civic issues and constitutional matters",
      status: "Regular",
      color: "bg-gray-500"
    }
  ];

  // Merge dynamic content with default programs and ensure proper structure
  const mergedPrograms = safeContent.programs.length > 0 
    ? safeContent.programs.map((program: any, index: number) => ({
        ...program,
        icon: getIconComponent(program.icon || 'Heart'),
        color: program.color || defaultPrograms[index % defaultPrograms.length]?.color || 'bg-gray-500'
      }))
    : defaultPrograms;

  const programs = mergedPrograms;

  const initiatives = [
    {
      icon: Camera,
      title: "Aikyataan Photos",
      description: "Visual documentation of unity and harmony events"
    },
    {
      icon: FileText,
      title: "Pledges (Translated)",
      description: "Constitutional pledges available in 15 Indian languages"
    },
    {
      icon: Users,
      title: "Cause Partners",
      description: "Collaboration with like-minded organizations"
    },
    {
      icon: MessageSquare,
      title: "Forum",
      description: "Platform for discussing civic issues and solutions"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {safeContent.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {safeContent.description}
          </p>
        </div>

        {/* Main Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Programs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 ${program.color} rounded-lg flex items-center justify-center`}>
                      <program.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {program.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Initiatives */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Additional Initiatives</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                    <initiative.icon className="h-8 w-8 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{initiative.title}</h4>
                    <p className="text-sm text-gray-600 mt-2">{initiative.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Highlight */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-green-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Power of Mother Tongue</h3>
            <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
              Students across the country write the pledge in their mother tongue, obtain signatures 
              of their parents, and recite the same in unison in a charged ambiance in the school. 
              <span className="font-semibold text-orange-600"> The effect is magical.</span>
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Hindi', 'Tamil', 'Bengali', 'Telugu', 'Marathi', 'Gujarati', 'Kannada', 'Malayalam', 'Punjabi', 'Assamese', 'Odia', 'Urdu', 'Sanskrit', 'English', 'Others'].map((language) => (
                <Badge key={language} variant="secondary" className="text-sm">
                  {language}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}