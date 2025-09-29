
'use client';

import { useState } from 'react';
import Button from './ui/Button';

interface OnboardingProps {
  onComplete: () => void;
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Hoş Geldiniz!",
      description: "Haliç Kahve ailesine katılın ve premium kahve deneyimini yaşayın",
      image: "https://readdy.ai/api/search-image?query=Welcome%20coffee%20shop%20scene%2C%20cozy%20modern%20cafe%20interior%20with%20warm%20lighting%2C%20people%20enjoying%20coffee%2C%20contemporary%20design%2C%20soft%20warm%20colors%2C%20inviting%20atmosphere%2C%20professional%20photography%20style&width=300&height=200&seq=onboard1&orientation=landscape"
    },
    {
      title: "Sadakat Programı",
      description: "Her alışverişinizde puan kazanın, ücretsiz kahveler kazanın",
      image: "https://readdy.ai/api/search-image?query=Loyalty%20points%20concept%20illustration%2C%20mobile%20phone%20showing%20reward%20points%2C%20coffee%20cups%20icons%2C%20golden%20stars%2C%20achievement%20badges%2C%20modern%20flat%20design%20style%2C%20warm%20coffee%20colors&width=300&height=200&seq=onboard2&orientation=landscape"
    },
    {
      title: "Mobil Ödeme",
      description: "QR kod ile hızlı ve güvenli ödeme yapın, kuyrukta beklemeyin",
      image: "https://readdy.ai/api/search-image?query=Mobile%20payment%20QR%20code%20scanning%2C%20smartphone%20screen%20showing%20QR%20code%2C%20coffee%20shop%20counter%20background%2C%20contactless%20payment%2C%20modern%20technology%2C%20clean%20interface%20design&width=300&height=200&seq=onboard3&orientation=landscape"
    },
    {
      title: "Sipariş Takibi",
      description: "Siparişinizin durumunu anlık olarak takip edin",
      image: "https://readdy.ai/api/search-image?query=Order%20tracking%20mobile%20app%20interface%2C%20coffee%20preparation%20status%2C%20barista%20making%20coffee%2C%20progress%20indicators%2C%20real-time%20updates%2C%20modern%20app%20design%2C%20professional%20coffee%20shop&width=300&height=200&seq=onboard4&orientation=landscape"
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const skipOnboarding = () => {
    onComplete();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="flex flex-col h-screen max-w-sm mx-auto">
        <div className="flex justify-between items-center pt-12 px-6">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-amber-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <button 
            onClick={skipOnboarding}
            className="text-gray-500 text-sm font-medium"
          >
            Geç
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-8">
          <div className="mb-8">
            <img 
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-72 h-48 object-cover rounded-2xl shadow-lg"
            />
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {slides[currentSlide].title}
            </h2>
            <p className="text-gray-600 text-base leading-6">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>

        <div className="px-8 pb-12">
          <Button 
            onClick={nextSlide}
            className="w-full"
            size="lg"
          >
            {currentSlide === slides.length - 1 ? 'Başlayın' : 'Devam Et'}
          </Button>
        </div>
      </div>
    </div>
  );
}
