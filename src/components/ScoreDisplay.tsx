import React from 'react';
import { TrendingUp, Star } from 'lucide-react';

interface ScoreDisplayProps {
  currentScore: number;
  maxPossibleScore: number;
  isDarkMode: boolean;
}

export const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ 
  currentScore, 
  maxPossibleScore, 
  isDarkMode 
}) => {
  const percentage = (currentScore / maxPossibleScore) * 100;
  
  const getScoreLevel = () => {
    if (percentage >= 83) return { level: 'Ótimo', color: 'text-green-500', bgColor: 'bg-green-100' };
    if (percentage >= 60) return { level: 'Moderado', color: 'text-yellow-500', bgColor: 'bg-yellow-100' };
    if (percentage >= 40) return { level: 'Severo', color: 'text-orange-500', bgColor: 'bg-orange-100' };
    return { level: 'Crítico', color: 'text-red-500', bgColor: 'bg-red-100' };
  };

  const scoreLevel = getScoreLevel();

  return (
    <div className={`fixed top-20 right-4 z-40 p-3 rounded-xl shadow-lg transition-all duration-300 ${
      isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
    }`}>
      <div className="flex items-center space-x-2">
        <TrendingUp className={`w-4 h-4 ${scoreLevel.color}`} />
        <div>
          <div className={`text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Pontuação Atual
          </div>
          <div className="flex items-center space-x-1">
            <span className={`text-lg font-bold ${scoreLevel.color}`}>
              {currentScore}
            </span>
            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              /{maxPossibleScore}
            </span>
          </div>
          <div className={`text-xs px-2 py-1 rounded-full ${scoreLevel.bgColor} ${scoreLevel.color} font-medium`}>
            {scoreLevel.level}
          </div>
        </div>
      </div>
    </div>
  );
};