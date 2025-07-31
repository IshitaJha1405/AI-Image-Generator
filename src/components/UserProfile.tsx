import React, { useState, useRef, useEffect } from 'react';
import { User, LogOut, Settings } from 'lucide-react';
import { User as UserType } from '../types';

interface UserProfileProps {
  user: UserType;
  onSignOut: () => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user, onSignOut }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center w-12 h-12 rounded-full 
                   bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 
                   hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 
                   shadow-lg hover:shadow-xl overflow-hidden"
      >
        <img
          src={user.avatar}
          alt={user.name}
          className="w-full h-full object-cover"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl 
                        shadow-xl border border-gray-200 dark:border-gray-700 z-50 
                        transform transition-all duration-200 origin-top-right
                        animate-in slide-in-from-top-2 fade-in-0"
             style={{ zIndex: 9999 }}>
          {/* User Info */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                  {user.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                  {user.email}
                </p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            <button
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 
                         dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 
                         transition-colors duration-200"
            >
              <Settings size={16} />
              Account Settings
            </button>
            
            <button
              onClick={() => {
                onSignOut();
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 
                         dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 
                         transition-colors duration-200"
            >
              <LogOut size={16} />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};