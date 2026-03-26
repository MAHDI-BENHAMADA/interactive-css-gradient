# Interactive Gradient

An interactive gradient background effect with mouse-tracking bubble animation. Built with TypeScript, SCSS, and Vite.

## Features

- **Interactive Bubble**: A bubble element that smoothly follows your mouse cursor across the page
- **Animated Gradients**: Multiple layered gradient circles with a gooey blur filter effect
- **Smooth Motion**: Uses `requestAnimationFrame` for fluid, high-performance animations
- **Responsive Design**: Adapts to different screen sizes

## Tech Stack

- **TypeScript** - Type-safe JavaScript
- **SCSS** - Advanced styling with variables and nesting
- **Vite** - Fast build tool and development server

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port Vite assigns).

### Build

Create an optimized production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

## How It Works

The project creates an interactive visual effect with:

- **Multiple Gradient Layers** (`g1` - `g5`): Animated circles that create the background gradient effect
- **Interactive Bubble** (`.interactive`): A bubble element that tracks your mouse position
- **SVG Goo Filter**: Creates a smooth, organic blur effect between the gradient elements
- **Smooth Motion**: Uses easing to create fluid animation as the bubble follows your cursor

The TypeScript code in `src/main.ts` handles:
- Mouse movement tracking
- Smooth easing calculations
- Position updates using CSS transforms
- Animation frame management with `requestAnimationFrame`

## Project Structure

```
interactive-gradient/
├── index.html          # Main HTML file
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── src/
│   ├── main.ts        # Interactive bubble logic
│   ├── style.scss     # Styling and animations
│   └── assets/        # Static assets folder
└── public/            # Public assets directory
```

## Customization

### Colors & Gradients
Edit `src/style.scss` to change:
- Gradient colors of `.g1` - `.g5` elements
- Bubble size and opacity
- Animation speeds

### Animation Speed
In `src/main.ts`, adjust the easing factor (currently `23`) in:
```typescript
curX += (tgx - curX) / 23;
curY += (tgY - curY) / 23;
```
- **Higher number** = slower, smoother animation
- **Lower number** = faster, more responsive animation

### Bubble Appearance
Modify the `.interactive` styles in `src/style.scss` to change:
- Bubble size (`width`, `height`)
- Color and opacity
- Blur effects

## Performance

The implementation uses:
- **requestAnimationFrame** for optimal animation timing
- **CSS transforms** for GPU-accelerated motion
- **SVG filters** for efficient blur effects

## License

MIT