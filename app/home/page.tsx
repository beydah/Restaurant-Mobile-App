
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import BottomNav from '../../components/BottomNav';

export default function HomePage() {
  const [userName, setUserName] = useState('Ayşe');
  const [loyaltyPoints, setLoyaltyPoints] = useState(170);
  const [nextRewardAt, setNextRewardAt] = useState(200);
  const [unreadNotifications, setUnreadNotifications] = useState(3);

  const getCurrentDate = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return now.toLocaleDateString('tr-TR', options);
  };

  const progressPercentage = (loyaltyPoints / nextRewardAt) * 100;

  const coffeeQuotes = [
    "Hayat kahve gibi, nasıl içersen öyle...",
    "Güzel bir gün kahveyle başlar",
    "Kahve, ruhu besleyen bir büyü",
    "Her yudum yeni bir başlangıç"
  ];

  const [quote, setQuote] = useState(coffeeQuotes[0]);

  useEffect(() => {
    const randomQuote = coffeeQuotes[Math.floor(Math.random() * coffeeQuotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Top Navigation */}
      <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40">
        <div className="flex items-center justify-between h-16 px-4 max-w-sm mx-auto">
          <div className="w-10 h-10 flex items-center justify-center">
            <img 
              src="https://readdy.ai/api/search-image?query=coffee%20cup%20icon%2C%20minimalist%20brown%20coffee%20logo%2C%20simple%20cafe%20emblem%2C%20warm%20amber%20tones%2C%20clean%20design%2C%20isolated%20on%20transparent%20background%2C%20centered%20composition&width=40&height=40&seq=home_logo&orientation=squarish"
              alt="Logo"
              className="w-8 h-8 object-contain"
            />
          </div>
          
          <h1 className="text-lg font-bold text-gray-900">
            Haliç Kahve
          </h1>
          
          <div className="w-10 h-10 flex items-center justify-center">
            <button className="relative">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-notification-3-line text-gray-600 text-xl"></i>
              </div>
              {unreadNotifications > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-medium">
                    {unreadNotifications}
                  </span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 pb-20 px-4 max-w-sm mx-auto">
        {/* Welcome Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Hoş geldin, {userName}!
          </h2>
          <p className="text-gray-600 text-sm mb-2">
            {getCurrentDate()}
          </p>
          <p className="text-amber-700 text-sm font-medium italic">
            "{quote}"
          </p>
        </div>

        {/* Loyalty Points Card */}
        <Card className="mb-6 p-6 bg-gradient-to-r from-amber-500 to-orange-500">
          <div className="text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold mb-1">Puanın</h3>
                <p className="text-3xl font-bold">{loyaltyPoints}</p>
              </div>
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full">
                <i className="ri-trophy-line text-white text-2xl"></i>
              </div>
            </div>
            
            <div className="mb-3">
              <div className="flex justify-between text-sm mb-2">
                <span>Sonraki hediye</span>
                <span>{nextRewardAt - loyaltyPoints} puan kaldı</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full bg-white/10 border-white text-white hover:bg-white/20"
            >
              Puanla Hediye Al
            </Button>
          </div>
        </Card>

        {/* Order Now Banner */}
        <Card className="mb-6 p-0 overflow-hidden relative">
          <div 
            className="h-40 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20coffee%20shop%20interior%2C%20warm%20lighting%2C%20coffee%20beans%20and%20cups%2C%20cozy%20atmosphere%2C%20premium%20coffee%20brewing%20equipment%2C%20soft%20brown%20and%20amber%20tones%2C%20inviting%20and%20elegant%2C%20professional%20photography%2C%20high%20quality&width=350&height=160&seq=order_banner&orientation=landscape')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex flex-col justify-center p-6">
              <h3 className="text-white text-2xl font-bold mb-2">
                Favorin Hazır!
              </h3>
              <p className="text-white/90 text-sm mb-4">
                En sevdiğin kahveyi hemen sipariş et
              </p>
              <Button className="w-32 bg-amber-600 hover:bg-amber-700">
                Hemen Sipariş Ver
              </Button>
            </div>
          </div>
        </Card>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="p-4 text-center">
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 bg-amber-100 rounded-full">
              <i className="ri-map-pin-line text-amber-600 text-xl"></i>
            </div>
            <h4 className="font-semibold text-gray-900 text-sm mb-1">
              En Yakın Mağaza
            </h4>
            <p className="text-gray-600 text-xs">
              500m uzaklıkta
            </p>
          </Card>

          <Card className="p-4 text-center">
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 bg-green-100 rounded-full">
              <i className="ri-qr-code-line text-green-600 text-xl"></i>
            </div>
            <h4 className="font-semibold text-gray-900 text-sm mb-1">
              QR ile Öde
            </h4>
            <p className="text-gray-600 text-xs">
              Hızlı ödeme
            </p>
          </Card>
        </div>

        {/* Today's Special */}
        <Card className="mb-6">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-bold text-gray-900 mb-2">Günün Fırsatı</h3>
          </div>
          <div className="p-4 flex items-center">
            <img 
              src="https://readdy.ai/api/search-image?query=delicious%20latte%20coffee%20with%20beautiful%20foam%20art%2C%20professional%20coffee%20photography%2C%20warm%20lighting%2C%20coffee%20cup%20on%20wooden%20table%2C%20appetizing%20and%20inviting%2C%20high%20quality%2C%20realistic&width=80&height=80&seq=daily_special&orientation=squarish"
              alt="Günün Kahvesi"
              className="w-20 h-20 rounded-2xl object-cover mr-4"
            />
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 mb-1">
                Karamel Latte
              </h4>
              <p className="text-gray-600 text-sm mb-2">
                Günün özel kahvesi
              </p>
              <div className="flex items-center">
                <span className="text-amber-600 font-bold mr-2">₺18,90</span>
                <span className="text-gray-400 text-sm line-through">₺24,90</span>
              </div>
            </div>
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-add-line text-amber-600 text-xl"></i>
            </div>
          </div>
        </Card>

        {/* Recent Orders */}
        <Card className="mb-6">
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-900">Son Siparişlerin</h3>
              <Link href="/history" className="text-amber-600 text-sm font-medium">
                Tümünü Gör
              </Link>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Americano</p>
                  <p className="text-gray-600 text-xs">Dün, 14:30</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="text-xs">
                Tekrar Sipariş
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Cappuccino</p>
                  <p className="text-gray-600 text-xs">3 gün önce</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="text-xs">
                Tekrar Sipariş
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
}
