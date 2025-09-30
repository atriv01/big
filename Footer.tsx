import React from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ContactContent {
  email: string;
  phone: string;
  address: string;
  hours: string;
}

interface FooterProps {
  contact?: ContactContent;
}

export default function Footer({ contact }: FooterProps) {
  // Provide fallback values in case contact is not available
  const safeContact = {
    email: contact?.email || "contact@buildindiagroup.in",
    phone: contact?.phone || "+91 11 1234 5678",
    address: contact?.address || "Delhi, India",
    hours: contact?.hours || "Monday - Friday: 9:00 AM - 6:00 PM"
  };
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Vision', href: '#vision' },
  ];

  const resources = [
    { name: 'Press Releases', href: '#' },
    { name: 'Audacity of Dreams', href: '#' },
    { name: 'Pledge Festival', href: '#' },
    { name: 'Constitution Article 51A', href: '#' },
  ];

  const programs = [
    { name: '#BrainRegain', href: '#' },
    { name: '#Campaigner', href: '#' },
    { name: 'Aikyataan', href: '#' },
    { name: 'Forum', href: '#' },
  ];

  return (
    <footer id="contact" className="bg-green-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <ImageWithFallback
                src="https://buildindiagroup.in/wp-content/uploads/2018/11/BIIG-LOGO.png"
                alt="Build India Group Logo"
                className="h-12 w-auto object-contain"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-900">Build India Group</h3>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Cultivating good citizenry for a healthy nation through constitutional awareness 
              and fundamental duties.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">{safeContact.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">{safeContact.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">{safeContact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Founded in 2006</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-green-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Programs</h4>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-gray-700 hover:text-green-600 transition-colors duration-200"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-gray-700 hover:text-green-600 transition-colors duration-200"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-green-200" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-700 mb-4 md:mb-0">
            <p>&copy; Build India Group, 2008 - 2025. All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="text-gray-700 text-sm">
              <p>Founder: Biraja Mahapatra</p>
              <p className="text-xs text-gray-600">Journalist turned Lawyer</p>
            </div>
          </div>
        </div>

        {/* Constitutional Reference */}
        <div className="mt-8 pt-8 border-t border-green-200">
          <div className="text-center text-gray-600">
            <p className="text-sm">
              "It shall be the duty of every citizen of India to abide by the Constitution 
              and respect its ideals and institutions..."
            </p>
            <p className="text-xs mt-2">
              - Article 51A, Constitution of India (42nd Amendment, 1976)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}