import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Copy, Zap, Globe } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      title: "200+ Unique Fonts",
      description: "Transform your text into over 200 unique Unicode font styles including fancy, decorative, gaming, and social media fonts."
    },
    {
      icon: <Copy className="w-8 h-8 text-green-600" />,
      title: "One-Click Copy",
      description: "Instantly copy any transformed text to your clipboard with our convenient copy buttons on every font preview."
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Real-Time Preview",
      description: "See your text transformed instantly as you type. No waiting, no loading - just immediate results."
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      title: "Universal Compatibility",
      description: "Our Unicode-based fonts work across all platforms, devices, and social media sites without requiring font installation."
    }
  ];

  const stats = [
    { number: "200+", label: "Font Styles" },
    { number: "20+", label: "Categories" },
    { number: "100%", label: "Free to Use" },
    { number: "∞", label: "Possibilities" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About Font Generator
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Font Generator is a powerful, free online tool that transforms your ordinary text into extraordinary styles. 
            Whether you're creating content for social media, gaming, or creative projects, we provide the perfect 
            fonts to make your text stand out.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Font Generator by the Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              How Font Generator Works
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Enter Your Text</h3>
                  <p className="text-gray-600">Type or paste any text in our input field. You can use letters, numbers, and symbols.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Browse Font Styles</h3>
                  <p className="text-gray-600">Explore our extensive collection of fonts organized into convenient categories.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Copy and Use</h3>
                  <p className="text-gray-600">Click the copy button on any style you like and paste it anywhere you want to use it.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technology */}
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Built with Unicode Technology
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Font Generator uses Unicode characters to create styled text. Unlike traditional fonts that require 
                installation, Unicode characters are universally supported across all modern devices and platforms.
              </p>
              <p>
                This means your styled text will appear correctly whether you paste it on Instagram, Twitter, Discord, 
                gaming platforms, or any other website or application. The characters maintain their appearance 
                without requiring any special software or plugins.
              </p>
              <p>
                Our tool is completely client-side, meaning your text is processed locally in your browser for 
                maximum privacy and speed. No data is sent to our servers, ensuring your content remains private.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
