#!/usr/bin/env node

/**
 * 🚨 EMERGENCY ANGULAR REMOVAL SCRIPT
 * Removes ALL Angular files to fix the dist directory build issue
 */

const fs = require('fs');
const path = require('path');

console.log('🚨 EMERGENCY: Removing ALL Angular files...\n');

// Files and directories to completely remove
const angularFilesToRemove = [
  // Root level Angular files
  'angular.json',
  'tsconfig.app.json', 
  'tailwind.config.js',
  
  // Entire src directory (Angular project structure)
  'src',
  
  // Angular documentation files that might confuse build
  'ANGULAR_CLEANUP.md',
  'CLEANUP_COMPLETE.md',
  'CLEANUP_REMAINING_ANGULAR.md',
  'CLEANUP_STATUS_FINAL.md',
  'CRITICAL_ANGULAR_CLEANUP.md',
  'REMOVE_ANGULAR_FILES.md',
  '🎯-FINAL-ANGULAR-CLEANUP.md'
];

function removeRecursively(filePath) {
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      // Remove directory and all contents
      const files = fs.readdirSync(filePath);
      files.forEach(file => {
        removeRecursively(path.join(filePath, file));
      });
      fs.rmdirSync(filePath);
      console.log(`🗑️  Removed directory: ${filePath}`);
    } else {
      // Remove file
      fs.unlinkSync(filePath);
      console.log(`🗑️  Removed file: ${filePath}`);
    }
  }
}

// Remove all Angular files
angularFilesToRemove.forEach(item => {
  removeRecursively(item);
});

console.log('\n✅ Angular removal complete!');
console.log('🚀 React build should now work correctly');
console.log('📁 Vite will create dist/ directory successfully');

// Verify React files are intact
const reactFiles = [
  'index.html',
  'main.tsx',
  'App.tsx',
  'vite.config.ts',
  'package.json'
];

console.log('\n🔍 Verifying React files...');
reactFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ Missing: ${file}`);
  }
});

console.log('\n🎯 BUILD SHOULD NOW SUCCEED!');