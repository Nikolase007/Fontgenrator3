import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

// Build the Vite project
console.log('Building static site...');
const viteProcess = spawn('npx', ['vite', 'build'], {
  stdio: 'inherit',
  cwd: process.cwd()
});

viteProcess.on('close', (code) => {
  if (code === 0) {
    console.log('✅ Static site built successfully!');
    console.log('📁 Output directory: dist/');
    console.log('🚀 Ready to deploy as a static site');
  } else {
    console.error('❌ Build failed');
    process.exit(1);
  }
});