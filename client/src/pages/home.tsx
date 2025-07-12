import { useState } from 'react';
import { Shuffle, GitCompare } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FontPreviewCard } from '@/components/font-preview-card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { getStylesByCategory, getRandomStyle } from '@/lib/font-transformer';

export default function Home() {
  const [inputText, setInputText] = useState('Font Generator');
  const [highlightedStyle, setHighlightedStyle] = useState<string | null>(null);
  
  const stylesByCategory = getStylesByCategory();

  const handleRandomFont = () => {
    const randomStyle = getRandomStyle();
    setHighlightedStyle(randomStyle);
    
    // Scroll to the random font
    setTimeout(() => {
      const element = document.querySelector(`[data-style="${randomStyle}"]`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
    
    // Remove highlight after 3 seconds
    setTimeout(() => {
      setHighlightedStyle(null);
    }, 3000);
  };

  const handleCompareRedirect = () => {
    window.location.href = '/compare-fonts';
  };

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
            Transform Your Text into Fancy Fonts
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Type any text and watch it transform into 200+ fancy font styles
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200 resize-none"
                rows={3}
                placeholder="Enter your text here..."
              />
              <div className="absolute top-2 right-2 flex gap-2">
                <Button
                  onClick={handleRandomFont}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  size="sm"
                >
                  <Shuffle className="w-4 h-4 mr-1" />
                  Random Font
                </Button>
                <Button
                  onClick={handleCompareRedirect}
                  className="bg-green-600 hover:bg-green-700 text-white"
                  size="sm"
                >
                  <GitCompare className="w-4 h-4 mr-1" />
                  Compare Fonts
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Font Categories */}
        <div className="space-y-12">
          {Object.entries(stylesByCategory).map(([categoryName, styles]) => (
            <section key={categoryName} className="animate-in slide-in-from-bottom-4">
              <h2 
                id={categoryName.toLowerCase().replace(' ', '-')}
                className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2"
              >
                {categoryName}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {styles.map((style) => (
                  <FontPreviewCard
                    key={style}
                    fontName={fontNameMap[style] || style}
                    fontStyle={style}
                    inputText={inputText}
                    className={`${
                      highlightedStyle === style
                        ? 'ring-2 ring-blue-500 ring-offset-2 scale-105 transition-all duration-300'
                        : ''
                    }`}
                    data-style={style}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none">
            <CardContent className="py-12 px-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Text?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join millions of users who create stunning text with our font generator
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-3"
              >
                Get Started Now
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
