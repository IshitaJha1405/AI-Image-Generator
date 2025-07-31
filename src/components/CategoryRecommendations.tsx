import React from 'react';
import { Lightbulb, Sparkles, TrendingUp } from 'lucide-react';
import { Category, Style } from '../types';

interface CategoryRecommendationsProps {
  selectedCategory: Category;
  allCategories: Category[];
  allStyles: Style[];
  onCategoryChange: (categoryId: string) => void;
  onStyleChange: (styleId: string) => void;
  onPromptSelect: (prompt: string) => void;
}

export const CategoryRecommendations: React.FC<CategoryRecommendationsProps> = ({
  selectedCategory,
  allCategories,
  allStyles,
  onCategoryChange,
  onStyleChange,
  onPromptSelect
}) => {
  const relatedCategories = selectedCategory.relatedCategories
    .map(id => allCategories.find(cat => cat.id === id))
    .filter(Boolean) as Category[];

  const recommendedStyles = selectedCategory.recommendedStyles
    .map(id => allStyles.find(style => style.id === id))
    .filter(Boolean) as Style[];

  return (
    <div className="space-y-6 animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-400">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 
                      rounded-2xl p-6 border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Lightbulb className="w-4 h-4 text-white" />
          </div>
          Recommendations for {selectedCategory.name}
        </h3>

        {/* Popular Prompts */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-orange-500" />
            Popular Prompts
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {selectedCategory.popularPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => onPromptSelect(prompt)}
                className="group text-left p-3 rounded-lg bg-white dark:bg-gray-800 
                         border border-gray-200 dark:border-gray-700 
                         hover:border-blue-300 dark:hover:border-blue-600 
                         hover:shadow-md transition-all duration-200 text-sm"
              >
                <div className="flex items-start gap-2">
                  <Sparkles className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0 
                                    group-hover:text-purple-500 transition-colors duration-200" />
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 
                                 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {prompt}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Recommended Styles */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full" />
            Recommended Styles
          </h4>
          <div className="flex flex-wrap gap-2">
            {recommendedStyles.map((style) => (
              <button
                key={style.id}
                onClick={() => onStyleChange(style.id)}
                className="group flex items-center gap-2 px-3 py-2 rounded-lg 
                         bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                         hover:border-purple-300 dark:hover:border-purple-600 
                         hover:shadow-md transition-all duration-200 text-sm"
              >
                <div className="w-6 h-6 rounded overflow-hidden">
                  <img 
                    src={style.preview} 
                    alt={style.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 
                               dark:group-hover:text-purple-400 transition-colors duration-200 font-medium">
                  {style.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Related Categories */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            You Might Also Like
          </h4>
          <div className="flex flex-wrap gap-2">
            {relatedCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className="group flex items-center gap-2 px-3 py-2 rounded-lg 
                         bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                         hover:border-green-300 dark:hover:border-green-600 
                         hover:shadow-md transition-all duration-200 text-sm"
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </span>
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-green-600 
                               dark:group-hover:text-green-400 transition-colors duration-200 font-medium">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};