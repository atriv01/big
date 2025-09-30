/**
 * Build India Group - Build Configuration
 * Ensures clean React build without Angular interference
 */

module.exports = {
  // Files and directories to ignore during build
  ignore: [
    'src/**/*',           // Angular source directory
    '**/*.scss',          // Angular SCSS files
    'angular.json',       // Angular config
    'tsconfig.app.json',  // Angular TypeScript config
    '**/*.component.ts',  // Angular components
    '**/*.service.ts',    // Angular services
    '**/*.routes.ts'      // Angular routes
  ],
  
  // React-only build process
  reactFiles: [
    'index.html',         // React entry point
    'main.tsx',           // React bootstrap
    'App.tsx',            // Main React component
    'components/**/*.tsx', // React components
    'hooks/**/*.ts',      // React hooks
    'styles/globals.css'  // Global styles
  ],
  
  // Expected build output
  output: {
    directory: 'dist',
    files: [
      'index.html',
      'assets/*.js',
      'assets/*.css'
    ]
  }
};