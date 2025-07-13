import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;
  const isNearEnd = percentage > 80;

  return (
    <div className="mb-3 sm:mb-4">
      <div className="flex justify-between items-center mb-1 sm:mb-2">
        <span className="text-xs sm:text-sm font-medium text-gray-600">
          Progresso do Diagnóstico
        </span>
        <span className="text-xs sm:text-sm font-bold text-blue-600">
          {current}/{total}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 relative overflow-hidden">
        <div
          className={`h-2 sm:h-3 rounded-full transition-all duration-500 ease-out ${
            isNearEnd 
              ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
              : 'bg-gradient-to-r from-blue-500 to-purple-600'
          }`}
          style={{ width: `${percentage}%` }}
        />
        {isNearEnd && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse" />
        )}
      </div>
      {isNearEnd && (
        <p className="text-center text-green-600 font-medium text-xs sm:text-sm mt-1 sm:mt-2 animate-bounce">
          🎉 Quase lá! Seu protocolo está sendo preparado...
        </p>
      )}
    </div>
  );
};