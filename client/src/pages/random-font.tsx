import { useState, useEffect } from 'react';
import { Shuffle, Home } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FontPreviewCard } from '@/components/font-preview-card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { getRandomStyle, getAllStyles } from '@/lib/font-transformer';
import { Link } from 'wouter';

export default function RandomFont() {
  const [inputText, setInputText] = useState('Random Font Generator');
  const [currentStyle, setCurrentStyle] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

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

  const generateRandomFont = () => {
    setIsGenerating(true);
    
    // Add slight delay for visual feedback
    setTimeout(() => {
      const randomStyle = getRandomStyle();
      setCurrentStyle(randomStyle);
      setIsGenerating(false);
    }, 200);
  };

  useEffect(() => {
    // Generate initial random font
    generateRandomFont();
  }, []);

  const allStyles = getAllStyles();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Random Font Generator
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover new font styles with every click
          </p>
          
          <div className="max-w-2xl mx-auto mb-8">
            <Textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200 resize-none"
              rows={3}
              placeholder="Enter your text here..."
            />
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={generateRandomFont}
              disabled={isGenerating}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg"
            >
              <Shuffle className={`w-5 h-5 mr-2 ${isGenerating ? 'animate-spin' : ''}`} />
              Generate Random Font
            </Button>
            <Link href="/">
              <Button variant="outline" className="px-6 py-3 text-lg">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>

        {/* Current Random Font */}
        {currentStyle && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Your Random Font
            </h2>
            <div className="max-w-2xl mx-auto">
              <FontPreviewCard
                fontName={fontNameMap[currentStyle] || currentStyle}
                fontStyle={currentStyle}
                inputText={inputText}
                className="ring-2 ring-blue-500 ring-offset-2 scale-105 transition-all duration-300"
              />
            </div>
          </div>
        )}

        {/* Statistics */}
        <Card className="mb-8">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Font Statistics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-bold text-blue-600">{allStyles.length}</div>
                <div className="text-sm text-gray-600">Total Fonts Available</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">∞</div>
                <div className="text-sm text-gray-600">Possible Combinations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-gray-600">Free to Use</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Tips for Using Random Fonts
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Click "Generate Random Font" to discover new styles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Use the copy button to save your favorite transformations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Try different text lengths to see how fonts adapt</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Perfect for social media posts, gaming usernames, and creative projects</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
