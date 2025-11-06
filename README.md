# Mechatronics Project Website

A professional, multi-page React application showcasing a mechatronics engineering project from Olin College of Engineering.

## Features

- **Modern Design**: Clean, card-based UI with Tailwind CSS
- **Responsive Layout**: Works beautifully on desktop, tablet, and mobile
- **Multiple Pages**: 
  - Home - Project overview
  - Team & Reflections - Team member profiles and learning reflections
  - System Design - Mechanical, electrical, and system architecture
  - Design Process - Sprint-by-sprint development journey
  - Budget (BOM) - Complete bill of materials with cost tracking
  - Gallery & Demo - Photos and video demonstration
  - Code & Resources - Links to GitHub repositories and technical documentation

## Tech Stack

- **React** - UI framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool and dev server

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd disc-golf
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Customization Guide

### Updating Content

1. **Team Members** - Edit `src/pages/Team.jsx` and update the `teamMembers` array
2. **Budget Items** - Edit `src/pages/Budget.jsx` and update the `bomItems` array
3. **Gallery Photos** - Replace placeholder URLs in `src/pages/Gallery.jsx` with your actual images
4. **Project Title** - Update in `src/components/Header.jsx` and `index.html`

### Adding Images

1. Place your images in the `public` folder (e.g., `public/images/photo1.jpg`)
2. Reference them in your components as `/images/photo1.jpg`

### Embedding Videos

Replace the video placeholder in `src/pages/Gallery.jsx` with your YouTube/Vimeo embed code.

## Project Structure

```
disc-golf/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Team.jsx
│   │   ├── SystemDesign.jsx
│   │   ├── Process.jsx
│   │   ├── Budget.jsx
│   │   ├── Gallery.jsx
│   │   └── Code.jsx
│   ├── App.jsx         # Main app with routing
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Design Guidelines

The site follows these design principles:
- **Whitespace**: Generous padding (p-6, p-8) for breathing room
- **Cards**: Content in white cards with rounded corners (rounded-lg) and shadows (shadow-md)
- **Typography**: Hierarchical sizing (text-3xl for titles, text-xl for subheadings)
- **Colors**: Professional palette with gray backgrounds and blue accent colors
- **Consistency**: Uniform spacing and styling throughout

## License

This project is for educational purposes as part of an Olin College mechatronics course.

## Contact

For questions about this project, please contact the team members listed in the Team & Reflections page.