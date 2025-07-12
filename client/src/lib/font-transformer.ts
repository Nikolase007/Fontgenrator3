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
    'Fancy Fonts': ['ancient', 'cursive', 'bold-cursive', 'double-struck', 'gothic', 'gothic-bold', 'curve', 'asian', 'squiggle', 'emoji'],
    'Versatile Fonts': ['bold', 'sans-serif-bold', 'monospace', 'wide', 'italic', 'bold-italic'],
    'Cool Fonts': ['bubble', 'square', 'dark-bubble', 'small-capital', 'upside-down', 'subscript'],
    'Lined Fonts': ['underline', 'strikethrough', 'double-underline', 'solidus-overlay', 'tilde-overlay', 'double-overline'],
    'Gaming Fonts': ['freefire', 'fortnite', 'pubg', 'minecraft'],
    'Decorated Fonts': ['radiance', 'starlight', 'royal', 'geometric', 'flowers', 'glowing', 'neon', 'vintage', 'crystal', 'flames'],
    'Mixed Random Styles': ['mixed-1', 'mixed-2', 'mixed-3', 'mixed-4', 'mixed-5']
  };
}
