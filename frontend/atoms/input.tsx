'use client';
import React from 'react';
export default function F_Input({ className='', ...props }: any) {
  return <input className={`w-full px-4 py-3 rounded-xl border border-gray-200 ${className}`} {...props} />;
}