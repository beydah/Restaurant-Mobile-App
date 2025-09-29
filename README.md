# ☕ Restaurant Mobile Application

A modern mobile application for Restaurant, built with Next.js and Capacitor to deliver a seamless coffee shop experience on both web and mobile platforms.

![Restaurant Banner](https://via.placeholder.com/1200x400/1a1a1a/ffffff?text=Restaurant)

## ✨ Features

- **User Authentication** - Secure login system
- **Onboarding Flow** - Smooth introduction to the app
- **Responsive Design** - Works on mobile and desktop
- **Menu Browsing** - Explore our coffee selection
- **Shopping Cart** - Easy order management
- **Order Tracking** - Real-time order status updates
- **Mobile Optimized** - Built with Capacitor for native mobile experience

## 🚀 Tech Stack

- **Frontend Framework**: Next.js 13+ (App Router)
- **Mobile**: Capacitor
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Maps Integration**: Google Maps API
- **Charts**: Recharts
- **Type Safety**: TypeScript

## 📱 Screens

1. **Splash Screen**
2. **Onboarding**
3. **Login/Register**
4. **Home**
5. **Menu**
6. **Cart**
7. **Orders**
8. **Profile**

## 🛠️ Prerequisites

- Node.js 18.0.0 or later
- npm or yarn
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

## 🚀 Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/beydah/Restaurant-Mobile-App.git
   cd Restaurant-Mobile-App
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

1. Create a production build:
   ```bash
   npm run build
   ```

2. Export the static files:
   ```bash
   npm run export
   ```

### Mobile Development

#### Android

1. Add Android platform:
   ```bash
   npx cap add android
   ```

2. Copy web assets and sync with Capacitor:
   ```bash
   npx cap copy android
   ```

3. Open in Android Studio:
   ```bash
   npx cap open android
   ```

4. Build and run from Android Studio

#### iOS (macOS only)

1. Add iOS platform:
   ```bash
   npx cap add ios
   ```

2. Copy web assets and sync with Capacitor:
   ```bash
   npx cap copy ios
   ```

3. Open in Xcode:
   ```bash
   npx cap open ios
   ```

4. Build and run from Xcode

## 📂 Project Structure

```
Restaurant-Mobile-App/
├── app/                    # App router pages
│   ├── cart/              # Shopping cart page
│   ├── home/              # Home page
│   ├── menu/              # Menu page
│   └── orders/            # Orders page
├── components/            # Reusable components
│   ├── ui/                # UI components
│   ├── BottomNav.tsx      # Bottom navigation
│   ├── Login.tsx          # Login component
│   ├── Onboarding.tsx     # Onboarding flow
│   └── TopNav.tsx         # Top navigation
├── public/                # Static files
├── android/               # Android native code
└── ios/                   # iOS native code (if exists)
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
# Add other environment variables here
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Capacitor](https://capacitorjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- All the amazing open-source libraries used in this project
