# Swipe Shop

A Tinder-like mobile application for discovering products with an intuitive swipe interface. Built with React, Vite, and Capacitor.

## Features

- **Interactive Swipe Interface**: Swipe right to like, left to pass, and up to add to cart
- **Smooth Animations**: Fluid card transitions and visual feedback using Framer Motion
- **Responsive Design**: Optimized for mobile devices with a clean, modern UI
- **Product Cards**: Display product details including images, prices, and discounts
- **Mobile-Ready**: Built with Capacitor for native Android deployment

## Tech Stack

- **Frontend**: React, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Mobile**: Capacitor.js
- **Build Tools**: ESLint, Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Android Studio (for Android development)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RaviPratihast/swipe-shop.git
   cd swipe-shop
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Build the project:

   ```bash
   npm run build
   ```

5. Add Android platform:

   ```bash
   npx cap add android
   ```

6. Sync the web code with the Android project:

   ```bash
   npx cap sync android
   ```

7. Open the Android project in Android Studio:

   ```bash
   npx cap open android
   ```

8. Build and run the app on an emulator or physical device from Android Studio.

## Usage

- **Swipe Right**: Like a product
- **Swipe Left**: Pass on a product
- **Swipe Up**: Add product to cart (product cart is not yet added in project, we can add that feature)
- **Tap Buttons**: Use the like/dislike buttons at the bottom

## Acknowledgments & References

This project was built using the following resources:

- [Mastering Touch and Gesture Interactions in React](https://blog.openreplay.com/mastering-touch-and-gesture-interactions-in-react/)
- [Capacitor Documentation](https://capacitorjs.com/)
- [Guide to Animations with Framer Motion](https://blog.maximeheckel.com/posts/guide-animations-spark-joy-framer-motion/)
- [Capacitor: Everything You've Ever Wanted to Know](https://ionic.io/blog/capacitor-everything-youve-ever-wanted-to-know)
