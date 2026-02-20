'use client';
import React from 'react';
export default function F_Top_Nav({ p_title_text, p_is_back_visible, p_on_back_handler }: any) {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b flex items-center justify-between px-4 z-50">
      {p_is_back_visible ? <button onClick={p_on_back_handler}>Back</button> : <div w-10 />}
      <h1 className="font-bold text-lg">{p_title_text}</h1>
      <div className="w-10" />
    </div>
  );
}