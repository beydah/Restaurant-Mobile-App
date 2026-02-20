'use client';
import React from 'react';
import Link from 'next/link';
export default function F_Bottom_Nav({ p_active_tab_id }: any) {
  const tabs = [
    { id: 'home', label: 'Home', href: '/home' },
    { id: 'menu', label: 'Menu', href: '/menu' },
    { id: 'orders', label: 'Orders', href: '/orders' }
  ];
  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t flex justify-around items-center z-50">
      {tabs.map(t => <Link key={t.id} href={t.href} className={p_active_tab_id === t.id ? 'text-amber-600' : 'text-gray-400'}>{t.label}</Link>)}
    </div>
  );
}