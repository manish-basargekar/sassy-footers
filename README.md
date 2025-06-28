# Sassy Footers ✨

A collection of beautiful, interactive footer components with scroll-based animations built with React, TypeScript, and Tailwind CSS. 

## Demo


https://github.com/user-attachments/assets/4f28d13e-b8d7-43a3-8677-efc541544166



![image](https://github.com/user-attachments/assets/5c1e3da4-69df-46ad-a74d-db17670721ed)
![image](https://github.com/user-attachments/assets/d18b2bdf-b260-4188-a8a5-43983860ff8b)


## 🌟 Features

- **Multiple Footer Designs**: 4 unique footer components with different visual styles and animations
- **Scroll-Based Animations**: Dynamic effects that respond to user scroll position
- **Tab Navigation**: Easy switching between different footer examples

## 🎨 Footer Variants

### 1. Dia Scroll Effect
A gradient-based footer with smooth scaling animation that responds to scroll position.

### 2. Scroll Effect Two  
An SVG-based footer with colorful gradient bars that scale vertically based on scroll.

### 3. Scroll Effect Three
Another unique scroll-responsive footer design with custom animations.

### 4. Scroll Effect Four
A fourth variation with its own distinctive scroll-based animation style.

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/manish-basargekar/sassy-footers.git
cd sassy-footers
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

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality checks

## 🏗️ Project Structure

```
src/
├── components/
│   ├── dia/
│   │   ├── dia-footer-gradient.tsx    # Gradient footer component
│   │   └── dia-scroll-effect.tsx      # Dia scroll effect wrapper
│   ├── scroll-effect-two.tsx          # SVG-based footer
│   ├── scroll-effect-three.tsx        # Third footer variant
│   ├── scroll-effect-four.tsx         # Fourth footer variant
│   └── Tabs.tsx                       # Tab navigation component
├── App.tsx                            # Main application component
└── main.tsx                           # Application entry point
```

## 🎯 How It Works

The footers use the `@smakss/react-scroll-direction` library to detect scroll position and apply dynamic transformations:

- **Scale Effects**: Components scale based on scroll position using `scaleY()` transforms
- **Translation Effects**: Navigation elements move vertically with different scroll ratios
- **Responsive Scaling**: Animations adapt to different screen sizes

## 🎨 Customization

Each footer component accepts a `top` prop representing the current scroll position. You can:

1. **Modify Animation Speed**: Adjust the divisors in transform calculations (e.g., `top / 6`, `top / 3.5`)
2. **Change Colors**: Update the gradient colors in the SVG definitions or Tailwind classes
3. **Add New Effects**: Create additional footer variants following the existing patterns
4. **Customize Navigation**: Modify the links and styling in the `Tabs` component

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Add new footer designs
- Improve existing animations
- Enhance responsive behavior
- Fix bugs or optimize performance

## 👨‍💻 Author

**Manish Basargekar**
- Twitter: [@madebymanish](https://x.com/madebymanish)
- GitHub: [manish-basargekar](https://github.com/manish-basargekar)


**Star ⭐ this repository if you found it helpful!**
