'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { F_Use_Auth } from '@/core/context/auth_context';
export default function P() {
  const { is_authenticated_flag } = F_Use_Auth();
  const r = useRouter();
  useEffect(() => { if (!is_authenticated_flag) r.push('/auth/login'); else r.push('/home'); }, [is_authenticated_flag, r]);
  return <div>Loading...</div>;
}