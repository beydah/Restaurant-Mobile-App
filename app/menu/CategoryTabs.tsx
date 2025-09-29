
'use client';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function CategoryTabs({ categories, activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="sticky top-16 bg-white border-b border-gray-100 z-30">
      <div className="flex overflow-x-auto scrollbar-hide px-4 py-3 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              activeCategory === category.id
                ? 'bg-amber-100 text-amber-700 border-2 border-amber-300'
                : 'bg-gray-50 text-gray-600 border-2 border-transparent hover:bg-gray-100'
            }`}
          >
            <span className="text-lg">{category.icon}</span>
            <span className="font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}