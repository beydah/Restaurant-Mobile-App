'use client';
import React, { createContext, useContext, useState } from 'react';
const AuthContext = createContext<any>(null);
export function AuthProvider({ children }: any) {
  const [u, setU] = useState(null);
  const login = (e: string) => setU({ name: e } as any);
  return <AuthContext.Provider value={{ user_data: u, login, is_authenticated_flag: !!u, is_onboarding_complete_flag: true }}>{children}</AuthContext.Provider>;
}
export const F_Use_Auth = () => useContext(AuthContext);