import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

export const LiveUserCounter: React.FC = () => {
  const [userCount, setUserCount] = useState(23);

  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount(prev => {
        // 70% chance to increase, 30% to decrease
        const shouldIncrease = Math.random() > 0.3;
        const change = Math.floor(Math.random() * 3) + 1; // 1-3 users
        
        if (shouldIncrease && prev < 34) {
          return Math.min(34, prev + change);
        } else if (!shouldIncrease && prev > 20) {
          return Math.max(20, prev - change);
        }
        return prev;
      });
    }, 3000 + Math.random() * 4000); // Random interval between 3-7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-2 sm:p-3 mb-2 sm:mb-3">
      <div className="flex items-center justify-center">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
          <Users className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-1 sm:mr-2" />
          <span className="text-green-700 font-medium text-xs sm:text-sm">
            <span className="font-bold">{userCount} pessoas</span> estão fazendo o quiz neste momento
          </span>
        </div>
      </div>
    </div>
  );
};