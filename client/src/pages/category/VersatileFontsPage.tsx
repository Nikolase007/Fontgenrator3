import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FontPreviewCard } from '@/components/font-preview-card';
import { Textarea } from '@/components/ui/textarea';
import { getStylesByCategory } from '@/lib/font-transformer';

export default function VersatileFontsPage() {
  const [inputText, setInputText] = useState('Versatile Fonts');
  
  const stylesByCategory = getStylesByCategory();
  const versatileFonts = stylesByCategory['Versatile Fonts'] || [];

  const fontNameMap: Record<string, string> = {
    'ancient': 'Ancient Font',
    'cursive': 'Script/Cursive Font',
    'bold-cursive': 'Bold Cursive Font',
    'double-struck': 'Double Struck Font',
    'gothic': 'Gothic Font',
    'gothic-bold': 'Gothic Bold Font',
    'curve': 'Curve Font',
    'asian': 'Asian Font',
    'squiggle': 'Squiggle Font',
    'emoji': 'Emoji Font',
    'bold': 'Bold Font',
    'sans-serif-bold': 'Sans-Serif Bold Font',
    'monospace': 'Monospace Font',
    'wide': 'Wide Font',
    'italic': 'Italic Font',
    'bold-italic': 'Bold Italic Font',
    'bubble': 'Bubble Font',
    'square': 'Square Font',
    'dark-bubble': 'Dark Bubble Font',
    'small-capital': 'Small Capital Font',
    'upside-down': 'Upside Down Font',
    'subscript': 'Subscript Font',
    'underline': 'Underline Text',
    'strikethrough': 'Strikethrough Text',
    'double-underline': 'Double Underline',
    'solidus-overlay': 'Solidus Overlay',
    'tilde-overlay': 'Tilde Overlay',
    'double-overline': 'Double Overline',
    'freefire': 'FreeFire Style',
    'fortnite': 'Fortnite Style',
    'pubg': 'PUBG Style',
    'minecraft': 'Minecraft Style',
    'radiance': 'Radiance',
    'starlight': 'Starlight',
    'royal': 'Royal',
    'geometric': 'Geometric',
    'flowers': 'Flowers',
    'glowing': 'Glowing',
    'neon': 'Neon',
    'vintage': 'Vintage',
    'crystal': 'Crystal',
    'flames': 'Flames',
    'mixed-1': 'Mixed Style 1',
    'mixed-2': 'Mixed Style 2',
    'mixed-3': 'Mixed Style 3',
    'mixed-4': 'Mixed Style 4',
    'mixed-5': 'Mixed Style 5'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Versatile Fonts Generator
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Multi-purpose fonts perfect for any occasion and platform
          </p>
          
          <div className="max-w-2xl mx-auto">
            <Textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200 resize-none"
              rows={3}
              placeholder="Enter your text here..."
            />
          </div>
        </div>

        {/* Font Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {versatileFonts.map((style) => (
            <FontPreviewCard
              key={style}
              fontName={fontNameMap[style] || style}
              fontStyle={style}
              inputText={inputText}
            />
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Versatile Fonts</h2>
          <p className="text-gray-600 mb-4">
            Versatile fonts are designed to work well in multiple contexts and applications. 
            These fonts strike the perfect balance between style and readability, making them 
            suitable for both professional and casual use.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Perfect for:</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Business presentations</li>
                <li>• Social media content</li>
                <li>• Website headers</li>
                <li>• Document formatting</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Features:</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• High readability</li>
                <li>• Professional appearance</li>
                <li>• Cross-platform support</li>
                <li>• Multiple weights available</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}