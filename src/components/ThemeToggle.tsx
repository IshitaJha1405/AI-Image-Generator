import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="relative inline-flex items-center justify-center w-12 h-12 rounded-full 
                 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 
                 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 
                 shadow-lg hover:shadow-xl"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 w-6 h-6 text-yellow-500 transition-all duration-300 
                     ${isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} 
        />
        <Moon 
          className={`absolute inset-0 w-6 h-6 text-blue-400 transition-all duration-300 
                     ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} 
        />
      </div>
    </button>
  );
};