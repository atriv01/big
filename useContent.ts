import { useState, useEffect } from 'react';

interface ContentState {
  hero: {
    headline: string;
    subtitle: string;
    ctaText: string;
  };
  about: {
    title: string;
    description: string;
    mission: string;
  };
  programs: {
    title: string;
    description: string;
    programs: Array<{
      title: string;
      description: string;
      status: string;
      icon?: string;
      color?: string;
    }>;
  };
  blog: {
    title: string;
    description: string;
    posts: Array<{
      title: string;
      excerpt: string;
      author: string;
      category: string;
      date: string;
    }>;
  };
  news: {
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
  };
  contact: {
    email: string;
    phone: string;
    address: string;
    hours: string;
  };
}

const defaultContent: ContentState = {
  hero: {
    headline: "Building Constitutional Consciousness",
    subtitle: "Fostering civic awareness through fundamental duties and constitutional values across India",
    ctaText: "Join Our Mission"
  },
  about: {
    title: "About Build India Group",
    description: "Build India Group (BIG) is a Delhi-based civil society organization founded in 2006 by Biraja Mahapatra. We focus on promoting civic consciousness and fundamental duties as outlined in Article 51A of the Indian Constitution.",
    mission: "Our mission is to create constitutional consciousness among citizens, especially students, through innovative programs that connect them with their cultural roots while building national unity."
  },
  programs: {
    title: "Our Programs & Initiatives",
    description: "Building consciousness through diverse programs focused on fundamental duties and constitutional values.",
    programs: [
      {
        title: "#BrainRegain",
        description: "Initiative to bring back intellectual talent to contribute to India's development",
        status: "Active",
        icon: "Brain",
        color: "bg-blue-500"
      },
      {
        title: "Pledge Festival",
        description: "Students write pledges in mother tongue and commit to good citizenship",
        status: "Annual",
        icon: "Heart",
        color: "bg-red-500"
      },
      {
        title: "Aikyataan",
        description: "Unity programs promoting harmony and constitutional values",
        status: "Active",
        icon: "Users",
        color: "bg-purple-500"
      }
    ]
  },
  blog: {
    title: "Insights & Perspectives",
    description: "Thought-provoking articles on constitutional values, civic engagement, and building a stronger India through conscious citizenship.",
    posts: [
      {
        title: "The Transformative Power of Constitutional Consciousness",
        excerpt: "How understanding our fundamental duties can reshape India's future and create a generation of responsible citizens.",
        author: "Biraja Mahapatra",
        category: "Constitutional Awareness",
        date: "March 15, 2024"
      },
      {
        title: "Mother Tongue Education: Preserving Cultural Identity",
        excerpt: "The importance of teaching constitutional values in regional languages to create deeper connections with our heritage.",
        author: "Dr. Priya Nair",
        category: "Education",
        date: "March 12, 2024"
      }
    ]
  },
  news: {
    title: "News & Updates",
    description: "Stay informed about our latest initiatives, achievements, and impact in building constitutional consciousness across India.",
    news: [
      {
        title: "BIG Launches Constitutional Awareness Drive in 100 Schools Across Delhi",
        summary: "Build India Group partners with Delhi Education Department to introduce fundamental duties curriculum in government schools.",
        category: "Education",
        location: "New Delhi",
        date: "March 18, 2024",
        time: "2 hours ago"
      },
      {
        title: "National Pledge Day Celebrations Draw 50,000 Students",
        summary: "Students from 15 states participated in synchronized pledge recitation in their mother tongues, creating unprecedented unity.",
        category: "Events",
        location: "Pan India",
        date: "March 17, 2024",
        time: "1 day ago"
      }
    ]
  },
  contact: {
    email: "contact@buildindiagroup.in",
    phone: "+91 11 1234 5678",
    address: "Build India Group\nNew Delhi, India",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM"
  }
};

export function useContent() {
  const [content, setContent] = useState<ContentState>(defaultContent);

  useEffect(() => {
    // Load content from localStorage on component mount
    const savedContent = localStorage.getItem('bigWebsiteContent');
    if (savedContent) {
      try {
        const parsedContent = JSON.parse(savedContent);
        setContent({ ...defaultContent, ...parsedContent });
      } catch (error) {
        console.error('Error parsing saved content:', error);
        setContent(defaultContent);
      }
    }

    // Listen for content updates from the admin panel
    const handleContentUpdate = (event: CustomEvent) => {
      setContent({ ...defaultContent, ...event.detail });
    };

    window.addEventListener('contentUpdated', handleContentUpdate as EventListener);

    return () => {
      window.removeEventListener('contentUpdated', handleContentUpdate as EventListener);
    };
  }, []);

  return content;
}