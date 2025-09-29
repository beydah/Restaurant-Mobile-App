
'use client';

import Button from '../../components/ui/Button';

interface FilterSheetProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
  onClose: () => void;
}

const filterOptions = [
  { id: 'popularity', label: 'Popülerlik', icon: 'ri-fire-line' },
  { id: 'price-low', label: 'Fiyat (Düşükten Yükseğe)', icon: 'ri-arrow-up-line' },
  { id: 'price-high', label: 'Fiyat (Yüksekten Düşüğe)', icon: 'ri-arrow-down-line' },
  { id: 'newest', label: 'En Yeni', icon: 'ri-time-line' },
  { id: 'points', label: 'Puanla Alınabilir', icon: 'ri-star-line' }
];

export default function FilterSheet({ currentFilter, onFilterChange, onClose }: FilterSheetProps) {
  const handleFilterSelect = (filterId: string) => {
    onFilterChange(filterId);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>

      {/* Sheet */}
      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 max-w-sm mx-auto">
        <div className="p-6">
          {/* Handle */}
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Sıralama</h3>
            <button onClick={onClose} className="w-8 h-8 flex items-center justify-center text-gray-400">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-close-line text-xl"></i>
              </div>
            </button>
          </div>

          {/* Filter Options */}
          <div className="space-y-3">
            {filterOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleFilterSelect(option.id)}
                className={`w-full flex items-center gap-3 p-4 rounded-xl transition-all ${
                  currentFilter === option.id
                    ? 'bg-amber-50 border-2 border-amber-200 text-amber-700'
                    : 'bg-gray-50 border-2 border-transparent text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className={option.icon}></i>
                </div>
                <span className="font-medium">{option.label}</span>
                {currentFilter === option.id && (
                  <div className="w-5 h-5 flex items-center justify-center ml-auto">
                    <i className="ri-check-line text-amber-600"></i>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Apply Button */}
          <div className="mt-6">
            <Button onClick={onClose} className="w-full">
              Uygula
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}