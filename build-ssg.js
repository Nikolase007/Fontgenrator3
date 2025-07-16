import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Build the Vite project
console.log('Building static site...');
const viteProcess = spawn('npx', ['vite', 'build'], {
  stdio: 'inherit',
  cwd: process.cwd()
});

viteProcess.on('close', (code) => {
  if (code === 0) {
    // Copy any additional static files if needed
    const staticDir = path.join(__dirname, 'static');
    const distDir = path.join(__dirname, 'dist', 'public');
    
    if (fs.existsSync(staticDir)) {
      console.log('📁 Copying additional static files...');
      // You can add logic here to copy additional static files if needed
    }
    
    console.log('✅ Static site built successfully!');
    console.log('📁 Output directory: dist/public/');
    console.log('🚀 Ready to deploy as a static site');
    console.log('');
    console.log('Deploy options:');
    console.log('• Netlify: Drag & drop dist/public folder');
    console.log('• Vercel: Run "vercel --prod" in project root');
    console.log('• GitHub Pages: Push dist/public to gh-pages branch');
    console.log('• Any static host: Upload dist/public folder');
  } else {
    console.error('❌ Build failed');
    process.exit(1);
  }
});