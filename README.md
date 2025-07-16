# Font Generator - Static Site

A fast, lightweight font generator that transforms your text into 200+ fancy Unicode font styles. Perfect for social media, gaming, and creative projects.

## 🚀 Features

- **200+ Font Styles** - Fancy, decorative, gaming, and social media fonts
- **Real-time Preview** - See transformations as you type
- **One-click Copy** - Instant clipboard integration
- **Mobile Responsive** - Works perfectly on all devices
- **No Server Required** - Pure client-side static site
- **Universal Compatibility** - Unicode fonts work everywhere

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

This is a static site that can be deployed anywhere:

### Netlify (Recommended)
1. Run `npm run build`
2. Drag & drop the `dist/public` folder to Netlify
3. Or connect your GitHub repo for automatic deployments

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel --prod` in project root
3. Follow the prompts

### GitHub Pages
1. Run `npm run build`
2. Push `dist/public` contents to `gh-pages` branch
3. Enable GitHub Pages in repository settings

### Other Static Hosts
Upload the `dist/public` folder to any static hosting service:
- AWS S3 + CloudFront
- Firebase Hosting
- Surge.sh
- Cloudflare Pages

## 🏗️ Project Structure

```
├── client/              # React frontend source
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Route components
│   │   ├── lib/         # Font transformation logic
│   │   └── hooks/       # Custom React hooks
│   └── index.html       # Main HTML template
├── dist/public/         # Built static site (after npm run build)
├── build-ssg.js         # Static site build script
├── netlify.toml         # Netlify configuration
├── vercel.json          # Vercel configuration
└── vite.config.ts       # Vite build configuration
```

## 🎨 Font Categories

- **Fancy Fonts**: Ancient, Cursive, Gothic, Asian styles
- **Versatile Fonts**: Bold, Italic, Monospace, Wide
- **Cool Fonts**: Bubble, Square, Small Capital, Upside Down
- **Lined Fonts**: Underline, Strikethrough, Double lines
- **Gaming Fonts**: FreeFire, Fortnite, PUBG, Minecraft styles
- **Decorated Fonts**: Radiance, Starlight, Royal, Geometric

## 🔧 Customization

### Adding New Fonts
1. Edit `client/src/lib/font-mappings.ts`
2. Add your Unicode character mappings
3. Update the category in `getStylesByCategory()`

### Styling
- Uses Tailwind CSS for styling
- Custom CSS variables in `client/src/index.css`
- Responsive design with mobile-first approach

## 📱 Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🌟 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Bundle Size**: < 500KB gzipped
- **First Paint**: < 1s on 3G
- **No Runtime Dependencies**: Pure client-side processing

---

Built with ❤️ using React, TypeScript, and Vite