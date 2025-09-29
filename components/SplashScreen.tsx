
'use client';

import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-amber-600 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-6">
          <img 
            src="https://readdy.ai/api/search-image?query=Modern%20coffee%20cup%20logo%20icon%2C%20clean%20minimalist%20design%2C%20golden%20brown%20color%2C%20isolated%20on%20transparent%20background%2C%20centered%20composition%2C%20professional%20branding%20style%2C%20simple%20geometric%20shapes%2C%20premium%20coffee%20brand%20aesthetic&width=120&height=120&seq=logo1&orientation=squarish" 
            alt="Haliç Kahve Logo" 
            className="w-24 h-24 mx-auto object-contain"
          />
        </div>
        <div className="text-white">
          <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Pacifico, serif' }}>Haliç Kahve</h1>
          <div className="flex justify-center">
            <div className="animate-spin w-6 h-6 border-2 border-white border-t-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
