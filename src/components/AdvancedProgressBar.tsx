import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

interface AdvancedProgressBarProps {
  current: number;
  total: number;
  currentStage: number;
  isDarkMode: boolean;
}

const stages = [
  { name: 'Ciclo Invisível', questions: 3 },
  { name: 'Mentiras do Mercado', questions: 3 },
  { name: 'Sinais Ignorados', questions: 4 },
  { name: 'Inimigo Interno', questions: 5 },
  { name: 'Inflamação Silenciosa', questions: 5 },
  { name: 'Protocolo Natural', questions: 10 },
];

export const AdvancedProgressBar: React.FC<AdvancedProgressBarProps> = ({ 
  current, 
  total, 
  currentStage,
  isDarkMode 
}) => {
  const percentage = (current / total) * 100;
  const isNearEnd = percentage > 80;

  return (
    <div className={`mb-4 sm:mb-6 p-4 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      {/* Stage indicators */}
      <div className="flex justify-between items-center mb-4 overflow-x-auto">
        {stages.map((stage, index) => {
          const isCompleted = index < currentStage;
          const isCurrent = index === currentStage;
          
          return (
            <div key={index} className="flex flex-col items-center min-w-0 flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 transition-all duration-500 ${
                isCompleted 
                  ? 'bg-green-500 text-white' 
                  : isCurrent 
                    ? 'bg-blue-500 text-white animate-pulse' 
                    : isDarkMode 
                      ? 'bg-gray-600 text-gray-400' 
                      : 'bg-gray-200 text-gray-500'
              }`}>
                {isCompleted ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <Circle className="w-5 h-5" />
                )}
              </div>
              <span className={`text-xs font-medium text-center ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {stage.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="flex justify-between items-center mb-2">
        <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Progresso do Diagnóstico
        </span>
        <span className={`text-sm font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
          {current}/{total}
        </span>
      </div>
      
      <div className={`w-full rounded-full h-3 relative overflow-hidden ${
        isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
      }`}>
        <div
          className={`h-3 rounded-full transition-all duration-700 ease-out ${
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
        <p className={`text-center font-medium text-sm mt-2 animate-bounce ${
          isDarkMode ? 'text-green-400' : 'text-green-600'
        }`}>
          🎉 Quase lá! Seu protocolo está sendo preparado...
        </p>
      )}
    </div>
  );
};