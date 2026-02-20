'use client';
import F_Login_Form from '@/frontend/organisms/login_form';
import { F_Use_Auth } from '@/core/context/auth_context';
export default function P() {
  const { login } = F_Use_Auth();
  return <F_Login_Form p_on_login_success_handler={login} />;
}