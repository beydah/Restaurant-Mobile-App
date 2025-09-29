
'use client';

import { useState } from 'react';
import TopNav from '../../components/TopNav';
import BottomNav from '../../components/BottomNav';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  extras?: string[];
}

const mockCartItems: CartItem[] = [
  {
    id: '1',
    name: 'Latte',
    description: 'Espresso ve süt köpüğüyle hazırlanır',
    price: 45.90,
    image: 'https://readdy.ai/api/search-image?query=Professional%20coffee%20photography%2C%20latte%20art%20in%20white%20ceramic%20cup%2C%20creamy%20milk%20foam%20heart%20pattern%2C%20coffee%20beans%20scattered%20around%2C%20warm%20brown%20wooden%20table%2C%20soft%20natural%20lighting%2C%20high%20resolution%20product%20shot%2C%20isolated%20subject%2C%20centered%20composition%2C%20cozy%20coffee%20shop%20atmosphere&width=80&height=80&seq=cartlatte1&orientation=squarish',
    quantity: 2,
    size: 'Orta'
  },
  {
    id: '2',
    name: 'Americano',
    description: 'Sade espresso ve sıcak su',
    price: 35.90,
    image: 'https://readdy.ai/api/search-image?query=Professional%20coffee%20photography%2C%20black%20americano%20coffee%20in%20white%20ceramic%20cup%2C%20steam%20rising%2C%20dark%20rich%20coffee%2C%20minimal%20setup%2C%20wooden%20surface%2C%20natural%20lighting%2C%20product%20photography%20style%2C%20centered%20composition%2C%20clean%20background&width=80&height=80&seq=cartamericano1&orientation=squarish',
    quantity: 1,
    size: 'Büyük'
  },
  {
    id: '3',
    name: 'Cheesecake',
    description: 'Klasik New York usulü cheesecake',
    price: 38.90,
    image: 'https://readdy.ai/api/search-image?query=Professional%20dessert%20photography%2C%20classic%20new%20york%20cheesecake%20slice%2C%20creamy%20white%20texture%2C%20graham%20cracker%20crust%2C%20berry%20compote%20topping%2C%20elegant%20plate%20presentation%2C%20soft%20lighting%2C%20product%20shot%2C%20centered%20composition%2C%20appetizing%20display&width=80&height=80&seq=cartcheese1&orientation=squarish',
    quantity: 1
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== itemId));
    } else {
      setCartItems(prev => 
        prev.map(item => 
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 8.90;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav 
        title="Sepetim"
        showBack={true}
        onBack={() => window.history.back()}
      />

      <div className="pt-16 pb-32">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="w-24 h-24 flex items-center justify-center mx-auto mb-6 bg-gray-100 rounded-full">
              <i className="ri-shopping-cart-line text-4xl text-gray-400"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Sepetiniz boş</h3>
            <p className="text-gray-500 text-center mb-6">Lezzetli ürünlerimizi keşfetmek için menüye göz atın.</p>
            <Button onClick={() => window.location.href = '/menu'}>Menüye Git</Button>
          </div>
        ) : (
          <div className="p-4 space-y-4">
            {/* Cart Items */}
            <div className="space-y-3">
              {cartItems.map((item) => (
                <Card key={item.id} className="p-4">
                  <div className="flex items-center gap-3">
                    {/* Product Image */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      {item.size && (
                        <p className="text-sm text-gray-500">{item.size} boy</p>
                      )}
                      <p className="text-lg font-bold text-amber-600 mt-1">₺{item.price.toFixed(2)}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-full"
                      >
                        <i className="ri-subtract-line text-sm"></i>
                      </button>
                      
                      <span className="font-semibold w-8 text-center">{item.quantity}</span>
                      
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-amber-500 text-white rounded-full"
                      >
                        <i className="ri-add-line text-sm"></i>
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <Card className="p-4 mt-6">
              <h3 className="font-semibold text-gray-900 mb-4">Sipariş Özeti</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Ara toplam</span>
                  <span>₺{subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between text-gray-600">
                  <span>Teslimat ücreti</span>
                  <span>₺{deliveryFee.toFixed(2)}</span>
                </div>
                
                <div className="border-t pt-3 flex justify-between font-bold text-lg">
                  <span>Toplam</span>
                  <span className="text-amber-600">₺{total.toFixed(2)}</span>
                </div>
              </div>
            </Card>

            {/* Delivery Options */}
            <Card className="p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Teslimat Seçenekleri</h3>
              
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 border border-amber-200 bg-amber-50 rounded-xl">
                  <input type="radio" name="delivery" defaultChecked className="text-amber-600" />
                  <div>
                    <div className="font-medium text-gray-900">Gel Al</div>
                    <div className="text-sm text-gray-600">15-20 dakika • Ücretsiz</div>
                  </div>
                </label>
                
                <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl">
                  <input type="radio" name="delivery" className="text-amber-600" />
                  <div>
                    <div className="font-medium text-gray-900">Adrese Teslimat</div>
                    <div className="text-sm text-gray-600">25-35 dakika • ₺8.90</div>
                  </div>
                </label>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Bottom Checkout Bar */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-lg font-bold">₺{total.toFixed(2)}</div>
              <div className="text-sm text-gray-600">{cartItems.length} ürün</div>
            </div>
            <Button className="flex-1 ml-4 !py-3">
              Siparişi Tamamla
            </Button>
          </div>
        </div>
      )}

      <BottomNav activeTab="" />
    </div>
  );
}
