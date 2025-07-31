import React from 'react';
import { Sparkles } from 'lucide-react';

export const LoadingAnimation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-12 animate-in fade-in-0 zoom-in-95 duration-500">
      <div className="relative">
        <div className="w-20 h-20 rounded-full border-4 border-blue-200 dark:border-blue-800 shadow-lg"></div>
        <div className="absolute inset-0 w-20 h-20 rounded-full border-4 border-blue-500 border-t-transparent animate-spin shadow-lg"></div>
        <div className="absolute inset-2 w-16 h-16 rounded-full border-2 border-purple-300 dark:border-purple-700 border-b-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-blue-500 animate-pulse drop-shadow-lg" />
        </div>
      </div>
      
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Creating Your Image
        </h3>
        <p className="text-gray-600 dark:text-gray-300 opacity-80">
          Our AI is working its magic...
        </p>
      </div>
      
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce shadow-lg"
            style={{
              animationDelay: `${i * 0.1}s`,
              animationDuration: '0.6s'
            }}
          />
        ))}
      </div>
      
      {/* Progress indicator */}
      <div className="w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" 
             style={{ 
               width: '100%',
               animation: 'loading-progress 3s ease-in-out infinite'
             }} />
      </div>
    </div>
  );
};