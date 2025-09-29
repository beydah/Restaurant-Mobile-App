
'use client';

import { useState } from 'react';
import CategoryTabs from './CategoryTabs';
import ProductGrid from './ProductGrid';
import FilterSheet from './FilterSheet';

const categories = [
  { id: 'coffee', name: 'Kahve', icon: '☕' },
  { id: 'cold-drinks', name: 'Soğuk İçecek', icon: '🧊' },
  { id: 'dessert', name: 'Tatlı', icon: '🍰' },
  { id: 'sandwiches', name: 'Sandviç', icon: '🥪' },
  { id: 'seasonal', name: 'Mevsimsel', icon: '🍂' },
  { id: 'favorites', name: 'Favorilerim', icon: '❤️' }
];

export default function MenuContent() {
  const [activeCategory, setActiveCategory] = useState('coffee');
  const [showFilter, setShowFilter] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('popularity');

  return (
    <div>
      {/* Category Tabs */}
      <CategoryTabs 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Filter Button */}
      <div className="px-4 py-3 bg-white border-b border-gray-100">
        <button
          onClick={() => setShowFilter(true)}
          className="flex items-center gap-2 text-amber-600 font-medium"
        >
          <div className="w-5 h-5 flex items-center justify-center">
            <i className="ri-filter-3-line"></i>
          </div>
          <span>Filtrele</span>
        </button>
      </div>

      {/* Product Grid */}
      <ProductGrid 
        category={activeCategory} 
        filter={currentFilter}
      />

      {/* Filter Sheet */}
      {showFilter && (
        <FilterSheet
          currentFilter={currentFilter}
          onFilterChange={setCurrentFilter}
          onClose={() => setShowFilter(false)}
        />
      )}
    </div>
  );
}