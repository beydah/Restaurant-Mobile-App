'use client';

import { useState } from 'react';
import Link from 'next/link';
import TopNav from '../../components/TopNav';
import BottomNav from '../../components/BottomNav';
import MenuContent from './MenuContent';

export default function MenuPage() {
  const [cartCount, setCartCount] = useState(3);

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav 
        title="Menü"
        showBack={true}
        onBack={() => window.history.back()}
        rightElement={
          <Link href="/cart">
            <div className="relative">
              <div className="w-10 h-10 flex items-center justify-center">
                <i className="ri-shopping-cart-line text-xl text-gray-700"></i>
              </div>
              {cartCount > 0 && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </div>
              )}
            </div>
          </Link>
        }
      />

      <div className="pt-16 pb-20">
        <MenuContent />
      </div>

      <BottomNav activeTab="menu" />
    </div>
  );
}