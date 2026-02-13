# Coach Kareem - Fitness Trainer Portfolio

A modern, responsive React portfolio website for a fitness trainer/coach built with Vite and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── assets/          # Images, icons, and other static assets
├── components/      # Reusable UI components
│   ├── Button.jsx
│   ├── Card.jsx
│   └── SectionTitle.jsx
├── sections/        # Page sections/components
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Gallery.jsx
│   ├── Payment.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── layouts/         # Layout components
│   └── MainLayout.jsx
├── pages/           # Page components
│   └── Home.jsx
├── data/            # Data files (content, packages, etc.)
│   ├── content.js
│   └── packages.js
├── styles/          # Global styles
│   └── index.css
├── App.jsx          # Main app component
└── main.jsx         # Entry point
```

## ✏️ Where to Edit Content

### Coach Information
Edit `src/data/content.js` to update:
- Coach name
- Headlines and bio
- Achievements
- Social media handles
- Contact information

### Training Packages
Edit `src/data/packages.js` to modify:
- Package titles
- Descriptions
- Prices
- Features lists

### Images
Replace image placeholders in:
- `src/sections/Hero.jsx` - Main hero image
- `src/sections/About.jsx` - About section image
- `src/sections/Gallery.jsx` - Transformation gallery images

Simply replace the placeholder divs with `<img>` tags pointing to your images.

### Styling
- Global styles: `src/styles/index.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles: Edit individual component files

## 🎨 Design Features

- **Dark Theme**: Bold, masculine fitness aesthetic
- **Fully Responsive**: Mobile-first design with breakpoints for tablet and desktop
- **Smooth Animations**: Hover effects and transitions throughout
- **Modern UI**: Clean typography and spacing

## 🛠 Technologies Used

- React 18
- Vite
- Tailwind CSS
- Modern ES6+ JavaScript

## 📱 Responsive Breakpoints

- Mobile: Default (< 640px)
- Tablet: sm (640px+)
- Desktop: md (768px+), lg (1024px+), xl (1280px+)

## 📝 Notes

- All image areas are currently placeholders with dashed borders
- Replace placeholder content with actual images and updated text
- Social media links are functional and open in new tabs
- All components are reusable and well-structured


