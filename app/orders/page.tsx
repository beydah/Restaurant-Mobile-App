
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TopNav from '../../components/TopNav';
import BottomNav from '../../components/BottomNav';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  size?: string;
}

interface Order {
  id: string;
  date: string;
  time: string;
  status: 'completed' | 'cancelled' | 'preparing' | 'ready';
  items: OrderItem[];
  total: number;
  orderType: 'pickup' | 'delivery';
  location?: string;
}

const mockOrders: Order[] = [
  {
    id: '#2024001',
    date: '15 Ocak 2024',
    time: '14:30',
    status: 'completed',
    items: [
      { id: '1', name: 'Latte', quantity: 2, price: 45.90, size: 'Orta' },
      { id: '2', name: 'Cheesecake', quantity: 1, price: 38.90 }
    ],
    total: 130.70,
    orderType: 'pickup'
  },
  {
    id: '#2024002',
    date: '14 Ocak 2024',
    time: '09:15',
    status: 'completed',
    items: [
      { id: '3', name: 'Americano', quantity: 1, price: 35.90, size: 'Büyük' },
      { id: '4', name: 'Croissant', quantity: 2, price: 22.90 }
    ],
    total: 81.70,
    orderType: 'delivery',
    location: 'Beyoğlu, İstanbul'
  },
  {
    id: '#2024003',
    date: '12 Ocak 2024',
    time: '16:45',
    status: 'cancelled',
    items: [
      { id: '5', name: 'Cappuccino', quantity: 1, price: 42.90, size: 'Orta' }
    ],
    total: 42.90,
    orderType: 'pickup'
  },
  {
    id: '#2024004',
    date: '10 Ocak 2024',
    time: '11:20',
    status: 'completed',
    items: [
      { id: '6', name: 'Mocha', quantity: 1, price: 48.90, size: 'Büyük' },
      { id: '7', name: 'Muffin', quantity: 1, price: 28.90 },
      { id: '8', name: 'Latte', quantity: 1, price: 45.90, size: 'Orta' }
    ],
    total: 123.70,
    orderType: 'pickup'
  }
];

export default function OrdersPage() {
  const [orders] = useState<Order[]>(mockOrders);
  const [activeFilter, setActiveFilter] = useState<'all' | 'completed' | 'cancelled'>('all');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const router = useRouter();

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Tamamlandı';
      case 'cancelled': return 'İptal Edildi';
      case 'preparing': return 'Hazırlanıyor';
      case 'ready': return 'Hazır';
      default: return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-50';
      case 'cancelled': return 'text-red-600 bg-red-50';
      case 'preparing': return 'text-orange-600 bg-orange-50';
      case 'ready': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const handleReviewOrder = (order: Order) => {
    setSelectedOrder(order);
    setShowReviewModal(true);
  };

  const handleReorder = (order: Order) => {
    const cartItems = order.items.map(item => ({
      id: item.id,
      name: item.name,
      description: `${item.size ? item.size + ' boy' : ''}`,
      price: item.price,
      image: `https://readdy.ai/api/search-image?query=Professional%20coffee%20photography%2C%20${item.name.toLowerCase()}%2C%20high%20quality%20product%20shot%2C%20centered%20composition%2C%20clean%20background&width=80&height=80&seq=${item.id}reorder&orientation=squarish`,
      quantity: item.quantity,
      size: item.size
    }));

    localStorage.setItem('reorderItems', JSON.stringify(cartItems));
    router.push('/cart');
  };

  const submitReview = () => {
    console.log('Review submitted:', { orderId: selectedOrder?.id, rating, review });
    setShowReviewModal(false);
    setRating(0);
    setReview('');
    setSelectedOrder(null);
  };

  const filteredOrders = orders.filter(order => {
    if (activeFilter === 'all') return true;
    return order.status === activeFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav 
        title="Siparişlerim"
        showBack={false}
      />

      <div className="pt-16 pb-20">
        {/* Filter Tabs */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'all'
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              Tümü
            </button>
            <button
              onClick={() => setActiveFilter('completed')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'completed'
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              Tamamlanan
            </button>
            <button
              onClick={() => setActiveFilter('cancelled')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'cancelled'
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              İptal Edilen
            </button>
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="w-24 h-24 flex items-center justify-center mx-auto mb-6 bg-gray-100 rounded-full">
              <i className="ri-file-list-3-line text-4xl text-gray-400"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Henüz sipariş yok</h3>
            <p className="text-gray-500 text-center mb-6">İlk siparişinizi vermek için menüye göz atın.</p>
            <Button onClick={() => window.location.href = '/menu'}>Menüye Git</Button>
          </div>
        ) : (
          <div className="p-4 space-y-4">
            {filteredOrders.map((order) => (
              <Card key={order.id} className="p-4">
                {/* Order Header */}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{order.id}</h3>
                    <p className="text-sm text-gray-500">{order.date} • {order.time}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {getStatusText(order.status)}
                  </span>
                </div>

                {/* Order Items */}
                <div className="space-y-2 mb-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {item.quantity}x {item.name}
                        {item.size && ` (${item.size})`}
                      </span>
                      <span className="text-gray-900">₺{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                {/* Order Details */}
                <div className="border-t pt-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      <i className={`${order.orderType === 'pickup' ? 'ri-store-2-line' : 'ri-truck-line'} mr-2`}></i>
                      {order.orderType === 'pickup' ? 'Gel Al' : 'Teslimat'}
                      {order.location && ` - ${order.location}`}
                    </span>
                    <span className="font-bold text-lg text-amber-600">₺{order.total.toFixed(2)}</span>
                  </div>
                  
                  {order.status === 'completed' && (
                    <div className="flex gap-2 mt-3">
                      <Button 
                        variant="outline" 
                        className="flex-1 !py-2 text-sm"
                        onClick={() => handleReorder(order)}
                      >
                        Tekrar Sipariş Ver
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1 !py-2 text-sm"
                        onClick={() => handleReviewOrder(order)}
                      >
                        Değerlendir
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Review Modal */}
      {showReviewModal && selectedOrder && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setShowReviewModal(false)}
          />
          
          <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-3xl z-50 max-w-sm mx-auto">
            <div className="p-6">
              {/* Handle */}
              <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>

              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Sipariş Değerlendirmesi</h3>
                <button 
                  onClick={() => setShowReviewModal(false)}
                  className="w-8 h-8 flex items-center justify-center text-gray-400"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-close-line text-xl"></i>
                  </div>
                </button>
              </div>

              {/* Order Info */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <div className="text-sm font-medium text-gray-900 mb-1">{selectedOrder.id}</div>
                <div className="text-xs text-gray-500">{selectedOrder.date} • {selectedOrder.time}</div>
              </div>

              {/* Star Rating */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900 mb-3">Değerlendirmeniz</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className="w-10 h-10 flex items-center justify-center"
                    >
                      <i className={`ri-star-${rating >= star ? 'fill' : 'line'} text-2xl ${rating >= star ? 'text-amber-400' : 'text-gray-300'}`}></i>
                    </button>
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900 mb-3">Yorumunuz (İsteğe bağlı)</label>
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Deneyiminizi bizimle paylaşın..."
                  className="w-full h-24 p-3 border border-gray-200 rounded-xl resize-none text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  maxLength={500}
                />
                <div className="text-xs text-gray-400 mt-1">{review.length}/500</div>
              </div>

              {/* Submit Button */}
              <Button 
                onClick={submitReview}
                disabled={rating === 0}
                className="w-full"
              >
                Değerlendirmeyi Gönder
              </Button>
            </div>
          </div>
        </>
      )}

      <BottomNav activeTab="orders" />
    </div>
  );
}
