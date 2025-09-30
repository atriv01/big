import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Quote, Scale, Heart, Users, BookOpen, Flag } from 'lucide-react';

export default function VisionSection() {
  const values = [
    {
      icon: Scale,
      title: "Constitutional Values",
      description: "Upholding the fundamental duties enshrined in Article 51A of the Constitution"
    },
    {
      icon: Users,
      title: "Civic Consciousness",
      description: "Building awareness about rights and responsibilities of citizenship"
    },
    {
      icon: Heart,
      title: "National Unity",
      description: "Promoting harmony and unity among diverse communities across India"
    },
    {
      icon: BookOpen,
      title: "Education for All",
      description: "Making constitutional knowledge accessible to every citizen"
    },
    {
      icon: Flag,
      title: "Patriotic Values",
      description: "Instilling love for the nation and respect for its institutions"
    }
  ];

  return (
    <section id="vision" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Vision & Values
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Building a nation where every citizen understands their duties and contributes 
            to the country's progress and unity.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="mb-16 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1755545730104-3cb4545282b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb25zdGl0dXRpb24lMjBib29rfGVufDF8fHx8MTc1NzQ5MjY3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Indian Constitution"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-500">
                <Quote className="h-8 w-8 text-green-500 mb-4" />
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "Fill our hearts with divine virtues."
                </blockquote>
                <p className="text-gray-600">
                  Our mission extends beyond mere awareness - we seek to instill the highest moral 
                  and civic values in every citizen, transforming not just knowledge but character.
                </p>
              </div>
              
              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Historical Significance</h3>
                <p className="text-gray-700">
                  November 26, 1949 marked the transformation of 35 crore people from being subjects 
                  in their respective kingdoms to sovereign owners of this country with the adoption 
                  of the Constitution's preamble.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.slice(0, 3).map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {values.slice(3).map((value, index) => (
              <Card key={index + 3} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Message */}
        <div className="bg-gradient-to-r from-orange-600 to-green-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Fundamental Duties Before Rights</h3>
          <p className="text-lg mb-6 max-w-4xl mx-auto">
            We believe that understanding and fulfilling our fundamental duties is the foundation 
            upon which we can build a just society and assert our rights as responsible citizens.
          </p>
          <div className="text-sm opacity-90">
            <p>Based on Article 51A of the Indian Constitution</p>
            <p>Introduced via the 42nd Amendment Act, 1976</p>
          </div>
        </div>
      </div>
    </section>
  );
}