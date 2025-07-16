import { fontMappings, decoratedTemplates, FontMapping } from './font-mappings';

export function transformText(text: string, style: string): string {
  // Handle decorated templates
  if (decoratedTemplates[style]) {
    return decoratedTemplates[style].replace('{text}', text);
  }
  
  // Handle font mappings
  const mapping = fontMappings[style];
  if (!mapping) {
    return text;
  }
  
  return text.split('').map(char => {
    return mapping[char] || char;
  }).join('');
}

export function getRandomStyle(): string {
  const allStyles = [...Object.keys(fontMappings), ...Object.keys(decoratedTemplates)];
  return allStyles[Math.floor(Math.random() * allStyles.length)];
}

export function getAllStyles(): string[] {
  return [...Object.keys(fontMappings), ...Object.keys(decoratedTemplates)];
}

export function getStylesByCategory() {
  return {
    'Fancy Fonts': ['ancient', 'cursive', 'bold-cursive', 'double-struck', 'gothic', 'gothic-bold', 'curve', 'asian', 'squiggle', 'emoji', 'radiance', 'starlight', 'royal', 'geometric', 'flowers', 'glowing', 'neon', 'vintage', 'crystal', 'flames', 'wide', 'bubble', 'square'],
    'Versatile Fonts': ['bold', 'sans-serif-bold', 'monospace', 'wide', 'italic', 'bold-italic', 'cursive', 'bold-cursive', 'double-struck', 'gothic', 'gothic-bold', 'underline', 'strikethrough', 'bubble', 'square', 'dark-bubble'],
    'Cool Fonts': ['bubble', 'square', 'dark-bubble', 'small-capital', 'upside-down', 'subscript', 'curve', 'asian', 'squiggle', 'emoji', 'ancient', 'gothic', 'gothic-bold', 'neon', 'glowing', 'crystal', 'flames', 'mixed-1', 'mixed-2', 'mixed-3'],
    'Lined Fonts': ['underline', 'strikethrough', 'double-underline', 'solidus-overlay', 'tilde-overlay', 'double-overline', 'bold', 'italic', 'bold-italic', 'sans-serif-bold', 'monospace', 'cursive', 'bold-cursive', 'gothic', 'gothic-bold', 'wide', 'bubble', 'square', 'dark-bubble'],
    'Gaming Fonts': ['freefire', 'fortnite', 'pubg', 'minecraft'],
    'Decorated Fonts': ['radiance', 'starlight', 'royal', 'geometric', 'flowers', 'glowing', 'neon', 'vintage', 'crystal', 'flames', 'ancient', 'cursive', 'bold-cursive', 'double-struck', 'gothic', 'gothic-bold', 'curve', 'asian', 'squiggle', 'emoji'],
    'Mixed Random Styles': ['mixed-1', 'mixed-2', 'mixed-3', 'mixed-4', 'mixed-5', 'ancient', 'cursive', 'bold-cursive', 'double-struck', 'gothic', 'gothic-bold', 'curve', 'asian', 'squiggle', 'emoji', 'bubble', 'square', 'dark-bubble', 'small-capital', 'upside-down', 'subscript'],
    'Cute Fonts': ['bubble', 'square', 'dark-bubble', 'small-capital', 'curve', 'squiggle', 'emoji', 'flowers', 'starlight', 'crystal', 'radiance', 'cursive', 'bold-cursive', 'wide', 'subscript', 'underline', 'double-underline', 'glowing', 'neon', 'vintage'],
    'Bold Fonts': ['bold', 'sans-serif-bold', 'bold-italic', 'bold-cursive', 'gothic-bold', 'monospace', 'wide', 'dark-bubble', 'square', 'underline', 'strikethrough', 'double-underline', 'solidus-overlay', 'tilde-overlay', 'double-overline', 'ancient', 'gothic', 'double-struck', 'mixed-1', 'mixed-2'],
    'Italic Fonts': ['italic', 'bold-italic', 'cursive', 'bold-cursive', 'gothic', 'squiggle', 'curve', 'asian', 'small-capital', 'upside-down', 'subscript', 'underline', 'strikethrough', 'flowers', 'starlight', 'glowing', 'neon', 'vintage', 'crystal', 'radiance']
  };
}
