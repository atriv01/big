import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Lock, Save, Eye, EyeOff, Plus, Trash2, Edit3, Download, Upload } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface ContentManagerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContentManager({ isOpen, onClose }: ContentManagerProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [content, setContent] = useState<any>({});
  const [activeTab, setActiveTab] = useState('hero');

  // 🔒 PRODUCTION: Change this password before deploying to production
  const ADMIN_PASSWORD = 'big2024admin';

  useEffect(() => {
    // Load content from localStorage or use defaults
    const savedContent = localStorage.getItem('bigWebsiteContent');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    } else {
      setContent(getDefaultContent());
    }
  }, []);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast.success('Successfully logged in as admin');
    } else {
      toast.error('Invalid password');
    }
  };

  const handleSave = () => {
    localStorage.setItem('bigWebsiteContent', JSON.stringify(content));
    // Also trigger a custom event to notify other components
    window.dispatchEvent(new CustomEvent('contentUpdated', { detail: content }));
    toast.success('Content saved successfully');
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(content, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `big-website-content-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success('Content exported successfully');
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedContent = JSON.parse(e.target?.result as string);
          setContent({ ...getDefaultContent(), ...importedContent });
          toast.success('Content imported successfully');
        } catch (error) {
          toast.error('Invalid file format');
        }
      };
      reader.readAsText(file);
    }
  };

  const updateContent = (section: string, field: string, value: any) => {
    setContent((prev: any) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const addArrayItem = (section: string, field: string, newItem: any) => {
    setContent((prev: any) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: [...(prev[section]?.[field] || []), newItem]
      }
    }));
  };

  const removeArrayItem = (section: string, field: string, index: number) => {
    setContent((prev: any) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: prev[section]?.[field]?.filter((_: any, i: number) => i !== index) || []
      }
    }));
  };

  const updateArrayItem = (section: string, field: string, index: number, newItem: any) => {
    setContent((prev: any) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: prev[section]?.[field]?.map((item: any, i: number) => i === index ? newItem : item) || []
      }
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center">
            <Lock className="h-6 w-6 mr-2" />
            Content Management System
          </h2>
          <Button variant="outline" onClick={onClose}>Close</Button>
        </div>

        {!isAuthenticated ? (
          <div className="p-8 text-center">
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Admin Authentication</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                />
                <Button onClick={handleLogin} className="w-full">
                  Login as Admin
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="flex h-[calc(90vh-80px)]">
            <div className="w-full overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Badge variant="default" className="bg-green-600">
                      Admin Mode Active
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50">
                      Content saved locally
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        accept=".json"
                        onChange={handleImport}
                        className="hidden"
                      />
                      <Button variant="outline" className="bg-blue-50 hover:bg-blue-100">
                        <Upload className="h-4 w-4 mr-2" />
                        Import
                      </Button>
                    </label>
                    <Button onClick={handleExport} variant="outline" className="bg-yellow-50 hover:bg-yellow-100">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                    <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                      <Save className="h-4 w-4 mr-2" />
                      Save All Changes
                    </Button>
                  </div>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-6">
                    <TabsTrigger value="hero">Hero</TabsTrigger>
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="programs">Programs</TabsTrigger>
                    <TabsTrigger value="blog">Blog</TabsTrigger>
                    <TabsTrigger value="news">News</TabsTrigger>
                    <TabsTrigger value="contact">Contact</TabsTrigger>
                  </TabsList>

                  <TabsContent value="hero" className="space-y-6">
                    <HeroContentEditor content={content.hero || {}} updateContent={(field, value) => updateContent('hero', field, value)} />
                  </TabsContent>

                  <TabsContent value="about" className="space-y-6">
                    <AboutContentEditor content={content.about || {}} updateContent={(field, value) => updateContent('about', field, value)} />
                  </TabsContent>

                  <TabsContent value="programs" className="space-y-6">
                    <ProgramsContentEditor 
                      content={content.programs || {}} 
                      updateContent={(field, value) => updateContent('programs', field, value)}
                      addArrayItem={(field, item) => addArrayItem('programs', field, item)}
                      removeArrayItem={(field, index) => removeArrayItem('programs', field, index)}
                      updateArrayItem={(field, index, item) => updateArrayItem('programs', field, index, item)}
                    />
                  </TabsContent>

                  <TabsContent value="blog" className="space-y-6">
                    <BlogContentEditor 
                      content={content.blog || {}} 
                      updateContent={(field, value) => updateContent('blog', field, value)}
                      addArrayItem={(field, item) => addArrayItem('blog', field, item)}
                      removeArrayItem={(field, index) => removeArrayItem('blog', field, index)}
                      updateArrayItem={(field, index, item) => updateArrayItem('blog', field, index, item)}
                    />
                  </TabsContent>

                  <TabsContent value="news" className="space-y-6">
                    <NewsContentEditor 
                      content={content.news || {}} 
                      updateContent={(field, value) => updateContent('news', field, value)}
                      addArrayItem={(field, item) => addArrayItem('news', field, item)}
                      removeArrayItem={(field, index) => removeArrayItem('news', field, index)}
                      updateArrayItem={(field, index, item) => updateArrayItem('news', field, index, item)}
                    />
                  </TabsContent>

                  <TabsContent value="contact" className="space-y-6">
                    <ContactContentEditor content={content.contact || {}} updateContent={(field, value) => updateContent('contact', field, value)} />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Hero Section Editor
function HeroContentEditor({ content, updateContent }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hero Section</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Main Headline</label>
          <Input
            value={content.headline || ''}
            onChange={(e) => updateContent('headline', e.target.value)}
            placeholder="Building Constitutional Consciousness"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Subtitle</label>
          <Textarea
            value={content.subtitle || ''}
            onChange={(e) => updateContent('subtitle', e.target.value)}
            placeholder="Fostering civic awareness through fundamental duties..."
            rows={3}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Call to Action Text</label>
          <Input
            value={content.ctaText || ''}
            onChange={(e) => updateContent('ctaText', e.target.value)}
            placeholder="Join Our Mission"
          />
        </div>
      </CardContent>
    </Card>
  );
}

// About Section Editor
function AboutContentEditor({ content, updateContent }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About Section</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Section Title</label>
          <Input
            value={content.title || ''}
            onChange={(e) => updateContent('title', e.target.value)}
            placeholder="About Build India Group"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <Textarea
            value={content.description || ''}
            onChange={(e) => updateContent('description', e.target.value)}
            placeholder="Build India Group is a civil society organization..."
            rows={4}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Mission Statement</label>
          <Textarea
            value={content.mission || ''}
            onChange={(e) => updateContent('mission', e.target.value)}
            placeholder="Our mission is to promote constitutional consciousness..."
            rows={3}
          />
        </div>
      </CardContent>
    </Card>
  );
}

// Programs Section Editor
function ProgramsContentEditor({ content, updateContent, addArrayItem, removeArrayItem, updateArrayItem }: any) {
  const [newProgram, setNewProgram] = useState({ title: '', description: '', status: '', icon: 'Heart', color: 'bg-blue-500' });

  const iconOptions = ['Brain', 'Users', 'Heart', 'BookOpen', 'Camera', 'FileText', 'MessageSquare'];
  const colorOptions = ['bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-purple-500', 'bg-orange-500', 'bg-gray-500', 'bg-yellow-500', 'bg-pink-500'];

  const handleAddProgram = () => {
    if (newProgram.title && newProgram.description) {
      addArrayItem('programs', newProgram);
      setNewProgram({ title: '', description: '', status: '', icon: 'Heart', color: 'bg-blue-500' });
      toast.success('Program added');
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Programs Section</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Section Title</label>
            <Input
              value={content.title || ''}
              onChange={(e) => updateContent('title', e.target.value)}
              placeholder="Our Programs & Initiatives"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Section Description</label>
            <Textarea
              value={content.description || ''}
              onChange={(e) => updateContent('description', e.target.value)}
              placeholder="Building consciousness through diverse programs..."
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Add New Program</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Program Title"
              value={newProgram.title}
              onChange={(e) => setNewProgram({ ...newProgram, title: e.target.value })}
            />
            <Input
              placeholder="Status"
              value={newProgram.status}
              onChange={(e) => setNewProgram({ ...newProgram, status: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <select
              value={newProgram.icon}
              onChange={(e) => setNewProgram({ ...newProgram, icon: e.target.value })}
              className="px-3 py-2 border rounded-md"
            >
              {iconOptions.map(icon => (
                <option key={icon} value={icon}>{icon}</option>
              ))}
            </select>
            <select
              value={newProgram.color}
              onChange={(e) => setNewProgram({ ...newProgram, color: e.target.value })}
              className="px-3 py-2 border rounded-md"
            >
              {colorOptions.map(color => (
                <option key={color} value={color}>{color.replace('bg-', '').replace('-500', '')}</option>
              ))}
            </select>
          </div>
          <Textarea
            placeholder="Program Description"
            value={newProgram.description}
            onChange={(e) => setNewProgram({ ...newProgram, description: e.target.value })}
            rows={2}
          />
          <Button onClick={handleAddProgram}>
            <Plus className="h-4 w-4 mr-2" />
            Add Program
          </Button>
        </CardContent>
      </Card>

      {content.programs && content.programs.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Existing Programs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {content.programs.map((program: any, index: number) => (
                <div key={index} className="border rounded p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <Input
                      value={program.title || ''}
                      onChange={(e) => updateArrayItem('programs', index, { ...program, title: e.target.value })}
                      className="font-medium"
                    />
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeArrayItem('programs', index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <Textarea
                    value={program.description || ''}
                    onChange={(e) => updateArrayItem('programs', index, { ...program, description: e.target.value })}
                    rows={2}
                  />
                  <Input
                    value={program.status || ''}
                    onChange={(e) => updateArrayItem('programs', index, { ...program, status: e.target.value })}
                    placeholder="Status"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <select
                      value={program.icon || 'Heart'}
                      onChange={(e) => updateArrayItem('programs', index, { ...program, icon: e.target.value })}
                      className="px-2 py-1 border rounded text-sm"
                    >
                      {iconOptions.map(icon => (
                        <option key={icon} value={icon}>{icon}</option>
                      ))}
                    </select>
                    <select
                      value={program.color || 'bg-blue-500'}
                      onChange={(e) => updateArrayItem('programs', index, { ...program, color: e.target.value })}
                      className="px-2 py-1 border rounded text-sm"
                    >
                      {colorOptions.map(color => (
                        <option key={color} value={color}>{color.replace('bg-', '').replace('-500', '')}</option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// Blog Section Editor
function BlogContentEditor({ content, updateContent, addArrayItem, removeArrayItem, updateArrayItem }: any) {
  const [newPost, setNewPost] = useState({ title: '', excerpt: '', author: '', category: '', date: '' });

  const handleAddPost = () => {
    if (newPost.title && newPost.excerpt) {
      addArrayItem('posts', { ...newPost, date: new Date().toLocaleDateString() });
      setNewPost({ title: '', excerpt: '', author: '', category: '', date: '' });
      toast.success('Blog post added');
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Blog Section</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Section Title</label>
            <Input
              value={content.title || ''}
              onChange={(e) => updateContent('title', e.target.value)}
              placeholder="Insights & Perspectives"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Section Description</label>
            <Textarea
              value={content.description || ''}
              onChange={(e) => updateContent('description', e.target.value)}
              placeholder="Thought-provoking articles on constitutional values..."
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Add New Blog Post</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Post Title"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            />
            <Input
              placeholder="Author"
              value={newPost.author}
              onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Category"
              value={newPost.category}
              onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
            />
            <Input
              type="date"
              value={newPost.date}
              onChange={(e) => setNewPost({ ...newPost, date: e.target.value })}
            />
          </div>
          <Textarea
            placeholder="Post Excerpt"
            value={newPost.excerpt}
            onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
            rows={3}
          />
          <Button onClick={handleAddPost}>
            <Plus className="h-4 w-4 mr-2" />
            Add Blog Post
          </Button>
        </CardContent>
      </Card>

      {content.posts && content.posts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Existing Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {content.posts.map((post: any, index: number) => (
                <div key={index} className="border rounded p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <Input
                      value={post.title || ''}
                      onChange={(e) => updateArrayItem('posts', index, { ...post, title: e.target.value })}
                      className="font-medium"
                    />
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeArrayItem('posts', index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      value={post.author || ''}
                      onChange={(e) => updateArrayItem('posts', index, { ...post, author: e.target.value })}
                      placeholder="Author"
                    />
                    <Input
                      value={post.category || ''}
                      onChange={(e) => updateArrayItem('posts', index, { ...post, category: e.target.value })}
                      placeholder="Category"
                    />
                  </div>
                  <Textarea
                    value={post.excerpt || ''}
                    onChange={(e) => updateArrayItem('posts', index, { ...post, excerpt: e.target.value })}
                    rows={2}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// News Section Editor
function NewsContentEditor({ content, updateContent, addArrayItem, removeArrayItem, updateArrayItem }: any) {
  const [newNews, setNewNews] = useState({ title: '', summary: '', category: '', location: '' });

  const handleAddNews = () => {
    if (newNews.title && newNews.summary) {
      addArrayItem('news', { ...newNews, date: new Date().toLocaleDateString(), time: 'Just now' });
      setNewNews({ title: '', summary: '', category: '', location: '' });
      toast.success('News item added');
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>News Section</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Section Title</label>
            <Input
              value={content.title || ''}
              onChange={(e) => updateContent('title', e.target.value)}
              placeholder="News & Updates"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Section Description</label>
            <Textarea
              value={content.description || ''}
              onChange={(e) => updateContent('description', e.target.value)}
              placeholder="Stay informed about our latest initiatives..."
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Add News Item</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="News Title"
            value={newNews.title}
            onChange={(e) => setNewNews({ ...newNews, title: e.target.value })}
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Category"
              value={newNews.category}
              onChange={(e) => setNewNews({ ...newNews, category: e.target.value })}
            />
            <Input
              placeholder="Location"
              value={newNews.location}
              onChange={(e) => setNewNews({ ...newNews, location: e.target.value })}
            />
          </div>
          <Textarea
            placeholder="News Summary"
            value={newNews.summary}
            onChange={(e) => setNewNews({ ...newNews, summary: e.target.value })}
            rows={3}
          />
          <Button onClick={handleAddNews}>
            <Plus className="h-4 w-4 mr-2" />
            Add News
          </Button>
        </CardContent>
      </Card>

      {content.news && content.news.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Existing News Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {content.news.map((news: any, index: number) => (
                <div key={index} className="border rounded p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <Input
                      value={news.title || ''}
                      onChange={(e) => updateArrayItem('news', index, { ...news, title: e.target.value })}
                      className="font-medium"
                    />
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeArrayItem('news', index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      value={news.category || ''}
                      onChange={(e) => updateArrayItem('news', index, { ...news, category: e.target.value })}
                      placeholder="Category"
                    />
                    <Input
                      value={news.location || ''}
                      onChange={(e) => updateArrayItem('news', index, { ...news, location: e.target.value })}
                      placeholder="Location"
                    />
                  </div>
                  <Textarea
                    value={news.summary || ''}
                    onChange={(e) => updateArrayItem('news', index, { ...news, summary: e.target.value })}
                    rows={2}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// Contact Section Editor
function ContactContentEditor({ content, updateContent }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input
              value={content.email || ''}
              onChange={(e) => updateContent('email', e.target.value)}
              placeholder="contact@buildindiagroup.in"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Phone</label>
            <Input
              value={content.phone || ''}
              onChange={(e) => updateContent('phone', e.target.value)}
              placeholder="+91 11 1234 5678"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Address</label>
          <Textarea
            value={content.address || ''}
            onChange={(e) => updateContent('address', e.target.value)}
            placeholder="Build India Group Office Address..."
            rows={3}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Office Hours</label>
          <Input
            value={content.hours || ''}
            onChange={(e) => updateContent('hours', e.target.value)}
            placeholder="Monday - Friday: 9:00 AM - 6:00 PM"
          />
        </div>
      </CardContent>
    </Card>
  );
}

function getDefaultContent() {
  return {
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
      posts: []
    },
    news: {
      title: "News & Updates",
      description: "Stay informed about our latest initiatives, achievements, and impact in building constitutional consciousness across India.",
      news: []
    },
    contact: {
      email: "contact@buildindiagroup.in",
      phone: "+91 11 1234 5678",
      address: "Build India Group\nNew Delhi, India",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM"
    }
  };
}