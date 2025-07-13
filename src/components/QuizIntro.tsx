import React, { useState, useEffect } from 'react';
import { PlayCircle, Clock, Target } from 'lucide-react';

interface QuizIntroProps {
  title: string;
  subtitle: string;
  totalQuestions: number;
  onStart: () => void;
}

export const QuizIntro: React.FC<QuizIntroProps> = ({
  title,
  subtitle,
  totalQuestions,
  onStart,
}) => {
  const [activeUsers, setActiveUsers] = useState(17);
  const [direction, setDirection] = useState(1); // 1 para aumentar, -1 para diminuir

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => {
        if (prev >= 33) {
          setDirection(-1);
          return prev - 1;
        } else if (prev <= 17) {
          setDirection(1);
          return prev + 1;
        } else {
          return prev + direction;
        }
      });
    }, 2000); // Muda a cada 2 segundos

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 text-center">
      <div>
        <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-3 sm:mb-4">
          <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
        
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 sm:mb-3 leading-tight">
          {title}
        </h1>
        
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="bg-blue-50 rounded-xl p-3 sm:p-4">
          <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mx-auto mb-2" />
          <h3 className="font-semibold text-gray-800 mb-1 text-xs sm:text-sm">Apenas 5 Minutos</h3>
          <p className="text-gray-600 text-xs">
            {totalQuestions} perguntas que revelam tudo
          </p>
        </div>
        
        <div className="bg-purple-50 rounded-xl p-3 sm:p-4">
          <Target className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 mx-auto mb-2" />
          <h3 className="font-semibold text-gray-800 mb-1 text-xs sm:text-sm">Diagnóstico Preciso</h3>
          <p className="text-gray-600 text-xs">
            Sistema de pontuação revela seu perfil real
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-4 mb-4">
        <h3 className="font-bold text-yellow-800 mb-2 text-center">🎯 Como Funciona a Pontuação</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-yellow-700">• Mais de 250 pontos:</span>
            <span className="font-bold text-green-600">Você não precisa do protocolo! 🎉</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-yellow-700">• 150-249 pontos:</span>
            <span className="font-bold text-orange-600">Metabolismo em alerta 🚨</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-yellow-700">• Menos de 150:</span>
            <span className="font-bold text-red-600">Precisa de intervenção urgente ⚠️</span>
          </div>
        </div>
        <p className="text-center text-yellow-700 text-xs mt-3 font-medium">
          💡 Baseado em 15.000+ diagnósticos, 94% das pessoas fazem entre 140-260 pontos
        </p>
      </div>

      <div>
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 rounded-r-xl p-3 mb-3">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
            <p className="text-red-700 font-medium text-xs sm:text-sm">
              ⚠️ Apenas <span className="font-bold">35 diagnósticos gratuitos</span> restantes hoje
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-400 rounded-r-xl p-3 mb-4">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
            <p className="text-green-700 font-medium text-xs sm:text-sm">
              👥 <span className="font-bold">{activeUsers} pessoas</span> fazendo o quiz neste momento
            </p>
          </div>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-200 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 flex items-center justify-center"
        >
          <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Começar Quiz
        </button>
      </div>
    </div>
  );
};