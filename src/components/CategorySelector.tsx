import React from 'react';
import { Category } from '../types';

interface CategorySelectorProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategory,
  onCategoryChange
}) => {
  return (
    <div className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-2 duration-500">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        Category
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`group relative p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden
                       ${selectedCategory === category.id
                         ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                         : 'border-white/20 dark:border-white/10 hover:border-blue-300/50 hover:shadow-lg'
                       }`}
          >
            {/* Glass Background */}
            <div className={`absolute inset-0 backdrop-blur-md transition-all duration-300
                           ${selectedCategory === category.id
                             ? 'bg-blue-500/20 dark:bg-blue-500/30'
                             : 'bg-white/10 dark:bg-white/5 group-hover:bg-white/20 dark:group-hover:bg-white/10'
                           }`} />
            
            {/* Glass Highlight */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b 
                            from-white/30 to-transparent dark:from-white/20 dark:to-transparent 
                            rounded-t-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            
            {/* Glass Reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/5 
                            dark:from-white/10 dark:via-transparent dark:to-black/10 
                            rounded-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="relative z-10">
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {category.name}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 opacity-75">
              {category.description}
            </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};