import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroContent {
  headline: string;
  subtitle: string;
  ctaText: string;
}

interface HeroSectionProps {
  content: HeroContent;
}

export default function HeroSection({ content }: HeroSectionProps) {
  // Provide fallback values in case content is not available
  const safeContent = {
    headline: content?.headline || "Build India Group",
    subtitle: content?.subtitle || "Building citizenry consciousness across the country with Article 51A of the Constitution dealing with fundamental duties as our foundation.",
    ctaText: content?.ctaText || "Learn About Our Mission"
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1696002480746-2b9c4778b0a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmbGFnJTIwcGF0cmlvdGljfGVufDF8fHx8MTc1NzQ5MjY3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Indian Flag"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-green-900 bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {safeContent.headline}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Let us cultivate good citizenry for a healthy nation
        </p>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          {safeContent.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
            {safeContent.ctaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
            Take the Pledge
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}