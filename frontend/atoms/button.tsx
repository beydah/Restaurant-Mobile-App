'use client';
import React from 'react';
export default function F_Button({ p_children, p_variant='primary', className='', ...props }: any) {
  const v = p_variant === 'outline' ? 'border-2 border-amber-600 text-amber-600' : 'bg-amber-600 text-white';
  return <button className={`px-6 py-3 rounded-xl font-bold ${v} ${className}`} {...props}>{p_children}</button>;
}