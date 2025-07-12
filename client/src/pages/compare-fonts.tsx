import { useState } from 'react';
import { Plus, X, ArrowLeftRight } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FontPreviewCard } from '@/components/font-preview-card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getStylesByCategory } from '@/lib/font-transformer';

export default function CompareFonts() {
  const [inputText, setInputText] = useState('Compare Fonts');
  const [selectedFonts, setSelectedFonts] = useState<string[]>(['bold', 'cursive']);
  
  const stylesByCategory = getStylesByCategory();
  const allStyles = Object.entries(stylesByCategory).flatMap(([category, styles]) => 
    styles.map(style => ({ value: style, category, label: style.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) }))
  );

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

  const addFont = () => {
    if (selectedFonts.length < 6) {
      const unusedFonts = allStyles.filter(style => !selectedFonts.includes(style.value));
      if (unusedFonts.length > 0) {
        setSelectedFonts([...selectedFonts, unusedFonts[0].value]);
      }
    }
  };

  const removeFont = (fontToRemove: string) => {
    if (selectedFonts.length > 1) {
      setSelectedFonts(selectedFonts.filter(font => font !== fontToRemove));
    }
  };

  const updateFont = (index: number, newFont: string) => {
    const newSelectedFonts = [...selectedFonts];
    newSelectedFonts[index] = newFont;
    setSelectedFonts(newSelectedFonts);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Compare Fonts Side by Side
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Select multiple fonts and compare them with your text
          </p>
          
          <div className="max-w-2xl mx-auto mb-8">
            <Textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200 resize-none"
              rows={3}
              placeholder="Enter your text to compare..."
            />
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={addFont}
              disabled={selectedFonts.length >= 6}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Font ({selectedFonts.length}/6)
            </Button>
          </div>
        </div>

        {/* Font Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {selectedFonts.map((font, index) => (
            <Card key={`${font}-${index}`} className="relative">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ArrowLeftRight className="w-4 h-4 text-blue-600" />
                    Comparison {index + 1}
                  </CardTitle>
                  {selectedFonts.length > 1 && (
                    <Button
                      onClick={() => removeFont(font)}
                      variant="outline"
                      size="sm"
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                <Select value={font} onValueChange={(value) => updateFont(index, value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a font" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(stylesByCategory).map(([category, styles]) => (
                      <div key={category}>
                        <div className="px-2 py-1 text-sm font-semibold text-gray-600 bg-gray-100">
                          {category}
                        </div>
                        {styles.map((style) => (
                          <SelectItem key={style} value={style}>
                            {fontNameMap[style] || style}
                          </SelectItem>
                        ))}
                      </div>
                    ))}
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent>
                <FontPreviewCard
                  fontName={fontNameMap[font] || font}
                  fontStyle={font}
                  inputText={inputText}
                  className="border-none shadow-none p-0"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Tips */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Font Comparison Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Best Practices</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Compare fonts with similar purposes (e.g., all decorative or all readable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Test with your actual text content for the best results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Consider readability vs. style based on your use case</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Use Cases</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Social media posts and bios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Gaming usernames and clan tags</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Creative projects and presentations</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
