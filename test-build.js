#!/usr/bin/env node

/**
 * Test Build Script - Diagnose dist directory issue
 */

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 BUILD INDIA GROUP - Build Test Diagnostic\n');

// Check if required files exist
const requiredFiles = [
  'index.html',
  'main.tsx', 
  'App.tsx',
  'package.json',
  'vite.config.ts'
];

console.log('📋 Checking required files...');
let missingFiles = [];
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ Missing: ${file}`);
    missingFiles.push(file);
  }
});

if (missingFiles.length > 0) {
  console.log('\n❌ Cannot proceed - missing required files');
  process.exit(1);
}

// Clean any existing dist directory
if (fs.existsSync('dist')) {
  console.log('\n🧹 Cleaning existing dist directory...');
  fs.rmSync('dist', { recursive: true, force: true });
}

// Test the build
console.log('\n🔨 Testing build process...');
exec('npm run build', (error, stdout, stderr) => {
  console.log('\n--- BUILD OUTPUT ---');
  console.log(stdout);
  
  if (stderr) {
    console.log('\n--- BUILD ERRORS ---');
    console.log(stderr);
  }
  
  if (error) {
    console.log('\n❌ BUILD FAILED');
    console.log(error.message);
  } else {
    // Check if dist was created
    if (fs.existsSync('dist')) {
      console.log('\n✅ SUCCESS: dist directory created!');
      
      // List contents
      const distContents = fs.readdirSync('dist');
      console.log('📁 dist/ contents:');
      distContents.forEach(item => {
        console.log(`   - ${item}`);
      });
      
      console.log('\n🚀 READY FOR NETLIFY DEPLOYMENT!');
    } else {
      console.log('\n❌ FAILED: dist directory not created');
    }
  }
});