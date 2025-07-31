import React from 'react';
import { Resolution } from '../types';

interface ResolutionSelectorProps {
  resolutions: Resolution[];
  selectedResolution: string;
  onResolutionChange: (resolution: string) => void;
}

export const ResolutionSelector: React.FC<ResolutionSelectorProps> = ({
  resolutions,
  selectedResolution,
  onResolutionChange
}) => {
  return (
    <div className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-200">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        Resolution
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {resolutions.map((resolution) => (
          <button
            key={resolution.id}
            onClick={() => onResolutionChange(resolution.id)}
            className={`group p-3 rounded-lg border-2 transition-all duration-300 hover:scale-105 hover:-translate-y-1
                       ${selectedResolution === resolution.id
                         ? 'border-green-500 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 shadow-lg shadow-green-500/20'
                         : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-green-300 hover:shadow-lg'
                       } backdrop-blur-sm`}
          >
            <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
              {resolution.label}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};