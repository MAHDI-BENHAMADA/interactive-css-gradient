# Interactive Gradient – Product Edition

A production-ready, interactive gradient background effect with mouse-tracking animation. Perfect for landing pages, portfolios, and hero sections. Built with TypeScript, SCSS, and Vite.

## 📦 What You Get

- **Source Code**: Full TypeScript + SCSS source with build tooling
- **Production Build**: Pre-compiled HTML, CSS, and JavaScript ready to use
- **Live Demos**: 3 styled examples (Dark, Vibrant, Minimalist)
- **Complete Customization Guide**: Easy color, speed, and animation adjustments
- **MIT Licensed**: Free to use commercially

## ✨ Features

- **Mouse-Tracking Bubble**: Smooth interactive bubble follows your cursor
- **Animated Gradient Circles**: Multiple layered gradients with fluid motion
- **Gooey Blur Effect**: SVG filters create organic, blended aesthetics
- **High Performance**: Uses requestAnimationFrame for 60fps animation
- **Fully Responsive**: Works on mobile, tablet, and desktop
- **Easy to Customize**: Change colors, speeds, and effects in minutes

## 🚀 Quick Start

### Option 1: Use the Built Version (Easiest)

1. Open any file from the `examples/` folder in your browser to see live demos
2. Copy the HTML code from an example and paste into your project
3. Customize colors directly in the HTML `<style>` section

### Option 2: Use the Source Code (Full Control)

1. Extract the project files
2. Run:
   ```bash
   npm install
   npm run dev
   ```
3. Edit `src/style.scss` and `src/main.ts` for customization
4. Run `npm run build` to create production artifacts

## 🎨 Included Examples

- **dark-theme.html** – Cyan and purple gradients on dark background
- **vibrant-colors.html** – Bold rainbow colors on light background
- **minimalist.html** – Subtle grays for understated elegance

All examples are fully responsive and work standalone.

## 📋 Customization at a Glance

| What | How |
|------|-----|
| **Colors** | Edit hex codes in `.g1`-`.g5` background gradients |
| **Speed** | Change `animation: animateX 15s...` (higher = slower) |
| **Bubble Size** | Adjust `.interactive { width: 100px; height: 100px; }` |
| **Background** | Edit `.gradient-bg` background property |
| **Text** | Change or remove the `.text-container` div |
| **Blur Effect** | Adjust `<feGaussianBlur stdDeviation="10" />` |

See **CUSTOMIZATION.md** for detailed instructions and code examples.

## 💻 System Requirements

- **For HTML examples**: Any modern browser (Chrome, Firefox, Safari, Edge)
- **For source code**: Node.js 16+ and npm

## 📁 File Structure

```
interactive-gradient/
├── dist/                    # Production build (HTML, CSS, JS)
├── examples/                # Styled demo files
│   ├── dark-theme.html
│   ├── vibrant-colors.html
│   └── minimalist.html
├── src/                     # Source TypeScript and SCSS
│   ├── main.ts
│   ├── style.scss
│   └── assets/
├── package.json
├── tsconfig.json
├── index.html
├── README.md
├── CUSTOMIZATION.md         # Detailed customization guide
└── LICENSE                  # MIT License
```

## 🔧 Tech Stack

- **TypeScript** – Type-safe JavaScript
- **SCSS** – Advanced CSS with variables and nesting
- **Vite** – Lightning-fast build tool
- **SVG Filters** – Native browser blur effects

## 🎯 Use Cases

- **Landing Page Background** – Create stunning hero sections
- **Portfolio Site** – Add visual interest to creative portfolios
- **SaaS Homepage** – Impress visitors with modern effects
- **Event Pages** – Eye-catching background for event promotions
- **Brand Sites** – Customizable gradients matching your brand colors

## 📝 License

MIT License – Use freely in personal and commercial projects. See LICENSE file for details.

## 🚢 Next Steps

1. **View Examples**: Open `examples/` folder in your browser
2. **Pick a Style**: Choose which demo matches your vision
3. **Customize**: Follow CUSTOMIZATION.md for your color scheme
4. **Deploy**: Copy the HTML to your site or integrate into your project

## ❓ FAQ

**Q: Can I use this commercially?**  
A: Yes! MIT license allows free commercial use.

**Q: Do I need Node.js to use this?**  
A: No. Use the `examples/` HTML files standalone. Only needed for development.

**Q: Can I add more gradient circles?**  
A: Yes! See CUSTOMIZATION.md for instructions.

**Q: Will this work on mobile?**  
A: Yes. All examples are fully responsive.

**Q: Can I change the animation speed?**  
A: Absolutely. See CUSTOMIZATION.md for easy adjustments.

---

**Made with ❤️ for creators who want to stand out.**