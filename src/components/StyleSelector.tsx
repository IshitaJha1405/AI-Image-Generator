import React from 'react';
import { Style } from '../types';

interface StyleSelectorProps {
  styles: Style[];
  selectedStyle: string;
  onStyleChange: (style: string) => void;
}

export const StyleSelector: React.FC<StyleSelectorProps> = ({
  styles,
  selectedStyle,
  onStyleChange
}) => {
  return (
    <div className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-100">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
        Style
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {styles.map((style) => (
          <button
            key={style.id}
            onClick={() => onStyleChange(style.id)}
            className={`group p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:-translate-y-1
                       ${selectedStyle === style.id
                         ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 shadow-lg shadow-purple-500/20'
                         : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-purple-300 hover:shadow-lg'
                       } backdrop-blur-sm`}
          >
            <div className="w-full h-12 rounded-lg mb-3 overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <img 
                src={style.preview} 
                alt={`${style.name} style preview`}
                className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
              />
            </div>
            <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
              {style.name}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 opacity-75">
              {style.description}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};