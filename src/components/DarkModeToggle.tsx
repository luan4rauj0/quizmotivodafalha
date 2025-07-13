import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface DarkModeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDarkMode, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`fixed top-4 right-4 z-50 p-3 rounded-full transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
          : 'bg-white text-gray-700 hover:bg-gray-100'
      } shadow-lg hover:scale-110`}
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};