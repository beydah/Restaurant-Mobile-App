'use client';
import F_Top_Nav from '@/frontend/organisms/top_nav';
import F_Bottom_Nav from '@/frontend/organisms/bottom_nav';
export default function P() {
  return (
    <div className="pt-16 pb-16">
      <F_Top_Nav p_title_text="Menu" p_is_back_visible={true} p_on_back_handler={() => window.history.back()} />
      <div className="p-4">Menu</div>
      <F_Bottom_Nav p_active_tab_id="menu" />
    </div>
  );
}