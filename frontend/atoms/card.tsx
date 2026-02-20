'use client';
import React from 'react';
export default function F_Card({ p_children, p_class_name='' }: any) {
  return <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 ${p_class_name}`}>{p_children}</div>;
}