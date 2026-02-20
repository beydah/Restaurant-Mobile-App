'use client';
import F_Top_Nav from '@/frontend/organisms/top_nav';
import F_Bottom_Nav from '@/frontend/organisms/bottom_nav';
import { F_Use_Auth } from '@/core/context/auth_context';
export default function P() {
  const { user_data } = F_Use_Auth();
  return (
    <div className="pt-16 pb-16">
      <F_Top_Nav p_title_text="Home" />
      <div className="p-4">Hello ${user_data?.name || 'Guest'}</div>
      <F_Bottom_Nav p_active_tab_id="home" />
    </div>
  );
}