import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FontPreviewCard } from '@/components/font-preview-card';
import { Textarea } from '@/components/ui/textarea';
import { getStylesByCategory } from '@/lib/font-transformer';

export default function DecoratedFontsPage() {
  const [inputText, setInputText] = useState('Decorated Fonts');
  
  const stylesByCategory = getStylesByCategory();
  const decoratedFonts = stylesByCategory['Decorated Fonts'] || [];

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
            Decorated Fonts Generator
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Beautiful fonts with decorative elements and artistic flair
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
          {decoratedFonts.map((style) => (
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Decorated Fonts</h2>
          <p className="text-gray-600 mb-4">
            Decorated fonts feature beautiful ornamental elements that surround and enhance your text. 
            These fonts combine typography with artistic decorations to create stunning visual presentations 
            perfect for special occasions and creative projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Perfect for:</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Special announcements</li>
                <li>• Artistic projects</li>
                <li>• Celebration posts</li>
                <li>• Creative headers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Features:</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Ornamental designs</li>
                <li>• Artistic elements</li>
                <li>• Eye-catching appeal</li>
                <li>• Unique aesthetics</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}