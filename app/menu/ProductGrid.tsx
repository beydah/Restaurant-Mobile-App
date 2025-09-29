
'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

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

interface ProductGridProps {
  category: string;
  filter: string;
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Latte',
    description: 'Espresso ve süt köpüğüyle hazırlanır',
    price: 45.90,
    image: 'https://readdy.ai/api/search-image?query=Professional%20coffee%20photography%2C%20latte%20art%20in%20white%20ceramic%20cup%2C%20creamy%20milk%20foam%20heart%20pattern%2C%20coffee%20beans%20scattered%20around%2C%20warm%20brown%20wooden%20table%2C%20soft%20natural%20lighting%2C%20high%20resolution%20product%20shot%2C%20isolated%20subject%2C%20centered%20composition%2C%20cozy%20coffee%20shop%20atmosphere&width=300&height=300&seq=latte1&orientation=squarish',
    category: 'coffee',
    isPopular: true,
    canBuyWithPoints: true,
    pointsPrice: 150
  },
  {
    id: '2',
    name: 'Americano',
    description: 'Sade espresso ve sıcak su',
    price: 35.90,
    image: 'https://readdy.ai/api/search-image?query=Professional%20coffee%20photography%2C%20black%20americano%20coffee%20in%20white%20ceramic%20cup%2C%20steam%20rising%2C%20dark%20rich%20coffee%2C%20minimal%20setup%2C%20wooden%20surface%2C%20natural%20lighting%2C%20product%20photography%20style%2C%20centered%20composition%2C%20clean%20background&width=300&height=300&seq=americano1&orientation=squarish',
    category: 'coffee'
  },
  {
    id: '3',
    name: 'Cappuccino',
    description: 'Espresso, süt ve yoğun köpük',
    price: 42.90,
    image: 'https://readdy.ai/api/search-image?query=Professional%20coffee%20photography%2C%20cappuccino%20with%20thick%20milk%20foam%2C%20cocoa%20powder%20dusting%2C%20white%20ceramic%20cup%20and%20saucer%2C%20coffee%20beans%20decoration%2C%20warm%20lighting%2C%20product%20shot%2C%20centered%20composition%2C%20cozy%20atmosphere&width=300&height=300&seq=cappuccino1&orientation=squarish',
    category: 'coffee',
    isFavorite: true
  },
  {
    id: '4',
    name: 'Mocha',
    description: 'Espresso, çikolata ve süt köpüğü',
    price: 48.90,
    image: 'https://readdy.ai/api/search-image?query=Professional%20coffee%20photography%2C%20chocolate%20mocha%20coffee%20with%20whipped%20cream%2C%20chocolate%20syrup%20drizzle%2C%20white%20ceramic%20mug%2C%20chocolate%20shavings%2C%20warm%20brown%20tones%2C%20product%20photography%2C%20centered%20composition%2C%20inviting%20presentation&width=300&height=300&seq=mocha1&orientation=squarish',
    category: 'coffee'
  },
  {
    id: '5',
    name: 'Iced Latte',
    description: 'Soğuk süt ve espresso karışımı',
    price: 47.90,
    image: 'https://readdy.ai/api/search-image?query=Professional%20beverage%20photography%2C%20iced%20latte%20in%20tall%20glass%2C%20milk%20swirling%20with%20coffee%2C%20ice%20cubes%2C%20condensation%20on%20glass%2C%20straw%2C%20clean%20white%20background%2C%20refreshing%20summer%20drink%2C%20product%20shot%2C%20centered%20composition&width=300&height=300&seq=icedlatte1&orientation=squarish',
    category: 'cold-drinks',
    isPopular: true
  },
  {
    id: '6',
    name: 'Frappuccino',
    description: 'Buzlu kahve karışımı ve krema',
    price: 52.90,
    image: 'https://readdy.ai/api/search-image?query=Professional%20beverage%20photography%2C%20frappuccino%20with%20whipped%20cream%20topping%2C%20blended%20iced%20coffee%2C%20tall%20clear%20glass%2C%20caramel%20drizzle%2C%20straw%2C%20refreshing%20cold%20drink%2C%20product%20photography%20style%2C%20clean%20background%2C%20centered%20composition&width=300&height=300&seq=frapp1&orientation=squarish',
    category: 'cold-drinks'
  },
  {
    id: '7',
    name: 'Cheesecake',
    description: 'Klasik New York usulü cheesecake',
    price: 38.90,
    image: 'https://readdy.ai/api/search-image?query=Professional%20dessert%20photography%2C%20classic%20new%20york%20cheesecake%20slice%2C%20creamy%20white%20texture%2C%20graham%20cracker%20crust%2C%20berry%20compote%20topping%2C%20elegant%20plate%20presentation%2C%20soft%20lighting%2C%20product%20shot%2C%20centered%20composition%2C%20appetizing%20display&width=300&height=300&seq=cheesecake1&orientation=squarish',
    category: 'dessert'
  },
  {
    id: '8',
    name: 'Brownie',
    description: 'Çikolatalı brownie, vanilyalı dondurma ile',
    price: 34.90,
    image: 'https://readdy.ai/api/search-image?query=Professional%20dessert%20photography%2C%20chocolate%20brownie%20with%20vanilla%20ice%20cream%20scoop%2C%20rich%20dark%20chocolate%20texture%2C%20melting%20ice%20cream%2C%20chocolate%20sauce%20drizzle%2C%20elegant%20presentation%2C%20warm%20lighting%2C%20product%20shot%2C%20centered%20composition&width=300&height=300&seq=brownie1&orientation=squarish',
    category: 'dessert',
    isFavorite: true
  }
];

export default function ProductGrid({ category, filter }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<string[]>(['3', '8']);

  useEffect(() => {
    let filteredProducts = mockProducts.filter(product => {
      if (category === 'favorites') {
        return favorites.includes(product.id);
      }
      return product.category === category;
    });

    // Apply filter
    switch (filter) {
      case 'price-low':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filteredProducts.reverse();
        break;
      case 'points':
        filteredProducts = filteredProducts.filter(p => p.canBuyWithPoints);
        break;
      default: // popularity
        filteredProducts.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
    }

    setProducts(filteredProducts);
  }, [category, filter, favorites]);

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="p-4">
      {products.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-full">
            <i className="ri-cup-line text-2xl text-gray-400"></i>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Ürün bulunamadı</h3>
          <p className="text-gray-500">Bu kategoride henüz ürün bulunmuyor.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={() => toggleFavorite(product.id)}
              onAddToCart={() => console.log('Add to cart:', product.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}