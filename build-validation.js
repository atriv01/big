#!/usr/bin/env node

/**
 * Build Validation Script for Build India Group
 * Ensures clean React build without Angular conflicts
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Build India Group - Build Validation Check\n');

// Check for conflicting Angular files
const conflictingFiles = [
  'angular.json',
  'tsconfig.app.json', 
  'tailwind.config.js',
  'src/main.ts',
  'src/index.html',
  'src/polyfills.ts'
];

let hasConflicts = false;

console.log('📋 Checking for Angular conflicts...');
conflictingFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`❌ Found conflicting file: ${file}`);
    hasConflicts = true;
  } else {
    console.log(`✅ Clean: ${file}`);
  }
});

// Check for required React files
const requiredFiles = [
  'index.html',
  'main.tsx', 
  'App.tsx',
  'package.json',
  'vite.config.ts',
  'netlify.toml'
];

console.log('\n📋 Checking required React files...');
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ Found: ${file}`);
  } else {
    console.log(`❌ Missing: ${file}`);
    hasConflicts = true;
  }
});

// Check package.json build script
if (fs.existsSync('package.json')) {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const buildScript = pkg.scripts?.build;
  
  console.log('\n📋 Checking build configuration...');
  if (buildScript === 'tsc --noEmit && vite build') {
    console.log('✅ Build script correct');
  } else {
    console.log(`❌ Build script incorrect: ${buildScript}`);
    hasConflicts = true;
  }
}

console.log('\n' + '='.repeat(50));

if (hasConflicts) {
  console.log('❌ BUILD VALIDATION FAILED');
  console.log('Please resolve conflicts before deploying to Netlify');
  process.exit(1);
} else {
  console.log('✅ BUILD VALIDATION PASSED');
  console.log('🚀 Ready for deployment to www.buildindiagroup.org');
  console.log('📁 Vite will successfully create dist/ directory');
}

console.log('='.repeat(50));