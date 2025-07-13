import React from 'react';
import { ChevronLeft, Edit3 } from 'lucide-react';
import { UserAnswer } from '../types/quiz';
import { quizQuestions } from '../data/quizConfig';

interface QuestionHistoryProps {
  userAnswers: UserAnswer[];
  onEditAnswer: (questionIndex: number) => void;
  isDarkMode: boolean;
}

export const QuestionHistory: React.FC<QuestionHistoryProps> = ({ 
  userAnswers, 
  onEditAnswer, 
  isDarkMode 
}) => {
  if (userAnswers.length === 0) return null;

  return (
    <div className={`mb-4 p-4 rounded-xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } shadow-lg`}>
      <h3 className={`text-lg font-semibold mb-3 ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}>
        Suas Respostas Anteriores
      </h3>
      
      <div className="space-y-2 max-h-40 overflow-y-auto">
        {userAnswers.map((answer, index) => {
          const question = quizQuestions.find(q => q.id === answer.questionId);
          if (!question) return null;

          return (
            <div
              key={answer.questionId}
              className={`p-3 rounded-lg border transition-all duration-200 hover:shadow-md ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' 
                  : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className={`text-sm font-medium mb-1 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Q{index + 1}: {question.question.substring(0, 60)}...
                  </p>
                  <p className={`text-xs ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Pontos: {answer.points}
                  </p>
                </div>
                <button
                  onClick={() => onEditAnswer(index)}
                  className={`ml-2 p-1 rounded-full transition-colors ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-600' 
                      : 'text-gray-500 hover:text-blue-600 hover:bg-gray-200'
                  }`}
                  title="Editar resposta"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};