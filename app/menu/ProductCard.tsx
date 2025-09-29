
'use client';

import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isPopular?: boolean;
  isFavorite?: boolean;
  isOutOfStock?: boolean;
  canBuyWithPoints?: boolean;
  pointsPrice?: number;
}

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onAddToCart: () => void;
}

export default function ProductCard({ product, isFavorite, onToggleFavorite, onAddToCart }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden rounded-t-2xl">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isPopular && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              Popüler
            </span>
          )}
          {product.canBuyWithPoints && (
            <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              Puanla Al
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={onToggleFavorite}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md"
        >
          <div className="w-5 h-5 flex items-center justify-center">
            <i className={`${isFavorite ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-gray-400'}`}></i>
          </div>
        </button>

        {/* Out of Stock Overlay */}
        {product.isOutOfStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-t-2xl">
            <span className="bg-white text-gray-900 px-3 py-1 rounded-full font-medium">
              Tükendi
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">₺{product.price.toFixed(2)}</span>
            {product.canBuyWithPoints && (
              <div className="text-xs text-amber-600 font-medium">
                veya {product.pointsPrice} puan
              </div>
            )}
          </div>

          <Button
            onClick={onAddToCart}
            disabled={product.isOutOfStock}
            size="sm"
            className="!px-4 !py-2"
          >
            <div className="w-4 h-4 flex items-center justify-center mr-1">
              <i className="ri-shopping-cart-line"></i>
            </div>
            Sepete Ekle
          </Button>
        </div>
      </div>
    </Card>
  );
}