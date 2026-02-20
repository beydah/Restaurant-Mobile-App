'use client';
import F_Top_Nav from '@/frontend/organisms/top_nav';
import F_Bottom_Nav from '@/frontend/organisms/bottom_nav';
import { C_ORDER_SERVICE } from '@/backend/order/order_service';
export default function P() {
  const h = C_ORDER_SERVICE.F_Get_Order_History();
  return (
    <div className="pt-16 pb-16">
      <F_Top_Nav p_title_text="Orders" />
      <div className="p-4">{JSON.stringify(h)}</div>
      <F_Bottom_Nav p_active_tab_id="orders" />
    </div>
  );
}