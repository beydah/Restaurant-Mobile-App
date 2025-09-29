
'use client';

import Link from 'next/link';

interface BottomNavProps {
  activeTab: string;
}

export default function BottomNav({ activeTab }: BottomNavProps) {
  const tabs = [
    { id: 'home', label: 'Ana Sayfa', icon: 'ri-home-5-fill', href: '/home' },
    { id: 'menu', label: 'Menü', icon: 'ri-restaurant-fill', href: '/menu' },
    { id: 'orders', label: 'Siparişler', icon: 'ri-file-list-3-fill', href: '/orders' },
    { id: 'loyalty', label: 'Puan', icon: 'ri-star-fill', href: '/loyalty' },
    { id: 'profile', label: 'Profil', icon: 'ri-user-fill', href: '/profile' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
      <div className="grid grid-cols-5 max-w-sm mx-auto">
        {tabs.map((tab) => (
          <Link key={tab.id} href={tab.href}>
            <div className={`flex flex-col items-center justify-center py-2 px-1 ${
              activeTab === tab.id ? 'text-amber-600' : 'text-gray-500'
            }`}>
              <div className="w-6 h-6 flex items-center justify-center mb-1">
                <i className={`${tab.icon} text-lg`}></i>
              </div>
              <span className="text-xs font-medium">{tab.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
