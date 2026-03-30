# Customization Guide

This guide shows you how to customize the Interactive Gradient effect for your needs.

## Quick Color Changes

### Using CSS (Easiest)

If you're using the standalone HTML files from the `examples/` folder, edit the color values directly in the `<style>` section:

```css
.g1 {
  background: radial-gradient(circle at 30% 30%, #COLOR1, #COLOR2);
  /* Change COLOR1 and COLOR2 to your hex colors */
}
```

Try these color combinations:
- **Ocean**: `#00d4ff` to `#0066cc`
- **Sunset**: `#ff006e` to `#ffbe0b`
- **Forest**: `#06ffa5` to `#229954`
- **Purple Dream**: `#8338ec` to `#5a189a`

### Using SCSS (Full Source)

If you're working from the source code:

1. Edit `src/style.scss`
2. Change the gradient colors in each `.g1` - `.g5` and `.interactive` rule
3. Run `npm run build` to create the new build

## Animation Speed

To make gradients move **faster** or **slower**:

### In the HTML examples:
Look for `animation` in each gradient element:
```css
animation: animate1 15s ease-in-out infinite;
              ↑
         Change this number (seconds)
```
- **Lower = Fast**: 8s - 12s
- **Faster = Slow**: 15s - 25s

### In the TypeScript source:
Edit `src/main.ts` and adjust the easing factor:
```typescript
curX += (tgx - curX) / 23;  // Change 23 to another number
curY += (tgy - curY) / 23;
```
- **Higher number = Smoother, slower tracking** (23-40)
- **Lower number = Snappier, responsive** (10-20)

## Bubble Size

To make the interactive bubble larger or smaller:

```css
.interactive {
  width: 100px;    /* Change to 150px for larger */
  height: 100px;   /* Must match width */
}
```

Update the JavaScript bubble centering too:
```typescript
interactive.style.left = curX - 50 + 'px';  // 50 = half of width
interactive.style.top = curY - 50 + 'px';   // 50 = half of width
```

If bubble width is 150px, use `- 75` instead.

## Background Color

To change the base background:

```css
.gradient-bg {
  background: linear-gradient(135deg, #START_COLOR 0%, #END_COLOR 100%);
}
```

## Number of Gradient Circles

The effect uses 5 gradient circles (g1-g5). To add more:

1. Add a new div in HTML: `<div class="g6"></div>`
2. Create a CSS class in `<style>`:
```css
.g6 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle at 30% 30%, #color1, #color2);
  top: 30%;
  right: 30%;
  opacity: 0.4;
  animation: animate1 14s ease-in-out infinite;
}
```

## Opacity/Transparency

Each `.g` element has `opacity`. Lower = more transparent:
```css
opacity: 0.3;  /* 0 = invisible, 1 = fully opaque */
```

Adjust these to control how vibrant the effect looks.

## Goo Filter Blur

For a softer or sharper blend between circles:

```html
<feGaussianBlur in="SourceGraphic" stdDeviation="10" />
                                              ↑↑
                                         Change this
```
- **10** = Medium blur (default)
- **5-8** = Sharper, more defined edges
- **15-20** = Softer, more blended

## Text Content

To change the text displayed:

```html
<div class="text-container">
  "your text here"
</div>
```

Or remove it entirely by deleting that div.

## Need More Help?

The source code uses:
- **HTML** for structure
- **SCSS** for styling (compiles to CSS)
- **TypeScript** for interactivity (compiles to JavaScript)

Run `npm install` and `npm run dev` to start making changes with live reload!

## Using in a Website

To integrate into your existing site:

1. Copy the contents of `dist/` (if using built version)
2. Or use just the HTML from `examples/` and customize inline
3. Adjust the z-index in `.gradient-bg` if it's covering other content:
```css
.gradient-bg {
  z-index: 1;  /* Lower values go behind other elements */
}
```

Make it a background by adding:
```css
.gradient-bg {
  position: fixed;
  pointer-events: none;  /* Lets clicks pass through */
}
```
