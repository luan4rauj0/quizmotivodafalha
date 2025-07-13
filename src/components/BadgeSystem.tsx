import React from 'react';
import { Award, Star, Target, Zap, Crown, Heart } from 'lucide-react';

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  unlocked: boolean;
  color: string;
}

interface BadgeSystemProps {
  userAnswers: any[];
  quizCompleted: boolean;
  shared: boolean;
  isDarkMode: boolean;
}

export const BadgeSystem: React.FC<BadgeSystemProps> = ({ 
  userAnswers, 
  quizCompleted, 
  shared, 
  isDarkMode 
}) => {
  const badges: Badge[] = [
    {
      id: 'first_step',
      name: 'Primeiro Passo',
      description: 'Iniciou o quiz metabólico',
      icon: <Target className="w-6 h-6" />,
      unlocked: userAnswers.length > 0,
      color: 'bg-blue-500',
    },
    {
      id: 'halfway',
      name: 'Meio Caminho',
      description: 'Completou 50% do quiz',
      icon: <Zap className="w-6 h-6" />,
      unlocked: userAnswers.length >= 15,
      color: 'bg-yellow-500',
    },
    {
      id: 'completed',
      name: 'Diagnóstico Completo',
      description: 'Completou todo o quiz',
      icon: <Award className="w-6 h-6" />,
      unlocked: quizCompleted,
      color: 'bg-green-500',
    },
    {
      id: 'high_score',
      name: 'Pontuação Alta',
      description: 'Alcançou mais de 250 pontos',
      icon: <Star className="w-6 h-6" />,
      unlocked: userAnswers.reduce((sum, answer) => sum + answer.points, 0) > 250,
      color: 'bg-purple-500',
    },
    {
      id: 'social_sharer',
      name: 'Compartilhador',
      description: 'Compartilhou o resultado',
      icon: <Heart className="w-6 h-6" />,
      unlocked: shared,
      color: 'bg-pink-500',
    },
    {
      id: 'perfectionist',
      name: 'Perfeccionista',
      description: 'Alcançou pontuação máxima',
      icon: <Crown className="w-6 h-6" />,
      unlocked: userAnswers.reduce((sum, answer) => sum + answer.points, 0) >= 300,
      color: 'bg-gradient-to-r from-yellow-400 to-orange-500',
    },
  ];

  const unlockedBadges = badges.filter(badge => badge.unlocked);

  if (unlockedBadges.length === 0) return null;

  return (
    <div className={`p-4 rounded-xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } shadow-lg mb-4`}>
      <h3 className={`text-lg font-semibold mb-3 ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}>
        🏆 Suas Conquistas
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={`p-3 rounded-lg border-2 transition-all duration-300 ${
              badge.unlocked
                ? `${badge.color} text-white border-transparent shadow-lg transform hover:scale-105`
                : isDarkMode
                  ? 'bg-gray-700 border-gray-600 text-gray-400'
                  : 'bg-gray-100 border-gray-300 text-gray-400'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div className={`mb-2 ${badge.unlocked ? 'opacity-100' : 'opacity-50'}`}>
                {badge.icon}
              </div>
              <h4 className="font-semibold text-sm mb-1">{badge.name}</h4>
              <p className="text-xs opacity-90">{badge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};