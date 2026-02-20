'use client';
import React from 'react';
import F_Button from '@/frontend/atoms/button';
import F_Input from '@/frontend/atoms/input';
export default function F_Login_Form({ p_on_login_success_handler }: any) {
  return (
    <div className="p-8 text-center pt-24">
      <h1 className="text-2xl font-bold mb-8">Login</h1>
      <F_Input type="email" placeholder="Email" className="mb-4" />
      <F_Button className="w-full" p_on_click={() => p_on_login_success_handler('user@test.com')}>Login</F_Button>
    </div>
  );
}