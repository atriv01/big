# Build India Group Website

A React-based website for Build India Group (BIG), a Delhi-based civil society organization promoting civic consciousness and fundamental duties as outlined in Article 51A of the Indian Constitution.

## Features

- **Responsive Design**: Mobile-first approach with professional Indian patriotic theme
- **Content Management**: Password-protected admin panel (Ctrl+Shift+A to access)
- **Multi-section Layout**: Hero, About, Programs, Pledges, Forums, Blog, News, and Vision sections
- **Green Theme**: Light green color scheme reflecting India's national colors
- **Interactive Elements**: Smooth scrolling, animations, and user-friendly navigation

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS v3, Custom CSS variables
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Notifications**: Sonner (Toast notifications)
- **Components**: Custom UI components with shadcn/ui styling

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

Build the project:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Admin Panel

The content management system can be accessed by:
1. Pressing `Ctrl + Shift + A` on the website
2. Entering the password: `big2024admin`

## Project Structure

```
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   └── figma/          # Figma-specific components
├── hooks/              # Custom React hooks
├── styles/             # Global styles and CSS
├── public/             # Static assets
└── ...config files
```

## Key Components

- **Header**: Navigation with responsive mobile menu
- **HeroSection**: Landing section with call-to-action
- **AboutSection**: Organization information and milestones
- **ProgramsSection**: BrainRegain, Pledge Festival, Aikyataan programs
- **PledgesSection**: Information about the pledge movement
- **ContentManager**: Admin panel for content management

## Deployment

This project is configured for deployment to various platforms including:
- Netlify (recommended)
- Vercel
- GitHub Pages
- Any static hosting provider

See the deployment guides in the project for specific instructions.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

Copyright © 2024 Build India Group. All rights reserved.

## Contact

- Website: www.buildindiagroup.org
- Organization: Build India Group (BIG)
- Founded: 2006
- Founder: Biraja Mahapatra
- Location: New Delhi, India