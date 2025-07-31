import React from 'react';
import { Edit3 } from 'lucide-react';

interface CustomPromptProps {
  value: string;
  onChange: (value: string) => void;
}

export const CustomPrompt: React.FC<CustomPromptProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-300">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
        <Edit3 size={20} />
        Custom Prompt (Optional)
      </h3>
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Describe your image in detail... (e.g., 'a majestic sunset over a futuristic city with flying cars')"
          className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                     focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:shadow-lg
                     resize-none transition-all duration-300 backdrop-blur-sm
                     hover:border-blue-300 dark:hover:border-blue-600"
          rows={4}
        />
        <div className="absolute bottom-3 right-3 text-xs text-gray-400 opacity-75">
          {value.length}/200
        </div>
      </div>
    </div>
  );
};