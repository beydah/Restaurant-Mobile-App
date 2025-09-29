
'use client';

interface TopNavProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  rightElement?: React.ReactNode;
}

export default function TopNav({ title, showBack = false, onBack, rightElement }: TopNavProps) {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-40">
      <div className="flex items-center justify-between h-16 px-4 max-w-sm mx-auto">
        <div className="w-10 h-10 flex items-center justify-center">
          {showBack && (
            <button onClick={onBack} className="text-gray-600">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-arrow-left-line text-xl"></i>
              </div>
            </button>
          )}
        </div>
        
        <h1 className="text-lg font-semibold text-gray-900 text-center flex-1">
          {title}
        </h1>
        
        <div className="w-10 h-10 flex items-center justify-center">
          {rightElement}
        </div>
      </div>
    </div>
  );
}
