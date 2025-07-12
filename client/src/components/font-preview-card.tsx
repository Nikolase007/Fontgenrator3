import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { transformText } from '@/lib/font-transformer';
import { showToast } from '@/components/toast';

interface FontPreviewCardProps {
  fontName: string;
  fontStyle: string;
  inputText: string;
  className?: string;
}

export function FontPreviewCard({ fontName, fontStyle, inputText, className = '' }: FontPreviewCardProps) {
  const transformedText = transformText(inputText, fontStyle);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(transformedText);
      showToast('Copied to clipboard!');
    } catch (err) {
      showToast('Failed to copy text');
    }
  };

  return (
    <Card className={`hover:shadow-md transition-shadow duration-200 ${className}`}>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <h4 className="font-medium text-gray-800 text-sm">{fontName}</h4>
          <Button
            onClick={handleCopy}
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1"
          >
            <Copy className="w-3 h-3 mr-1" />
            Copy
          </Button>
        </div>
        <div className="text-lg text-gray-700 font-preview break-words overflow-wrap-anywhere">
          {transformedText}
        </div>
      </CardContent>
    </Card>
  );
}
