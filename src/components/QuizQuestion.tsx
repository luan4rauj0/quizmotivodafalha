import React from 'react';
import { CheckCircle } from 'lucide-react';
import { QuizQuestion as QuizQuestionType } from '../types/quiz';

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedOptions: string[];
  onOptionSelect: (optionId: string) => void;
  onNext: () => void;
  questionNumber: number;
  totalQuestions: number;
  showMicroFeedback?: boolean;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedOptions,
  onOptionSelect,
  onNext,
  questionNumber,
  totalQuestions,
  showMicroFeedback = false,
}) => {
  const isAnswered = selectedOptions.length > 0;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 transform transition-all duration-300 hover:shadow-2xl">
      <div className="mb-4">
        <span className="text-xs sm:text-sm font-medium text-gray-500 mb-2 block">
          Pergunta {questionNumber} de {totalQuestions}
        </span>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 leading-tight">
          {question.question}
        </h2>
      </div>

      <div className="space-y-3 mb-6">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onOptionSelect(option.id)}
            className={`w-full p-3 sm:p-4 text-left rounded-xl border-2 transition-all duration-200 ${
              selectedOptions.includes(option.id)
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center">
              <div
                className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                  selectedOptions.includes(option.id)
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-300'
                }`}
              >
                {selectedOptions.includes(option.id) && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
              <span className="font-medium text-sm sm:text-base">{option.text}</span>
            </div>
          </button>
        ))}
      </div>

      {showMicroFeedback && question.microFeedback && (
        <div className="mb-6 p-3 sm:p-4 bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-400 rounded-r-xl">
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              {question.microFeedback}
            </p>
          </div>
        </div>
      )}

      {isAnswered && (
        <div className="space-y-3 sm:space-y-4">
          <button
            onClick={onNext}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-200 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105"
          >
            {questionNumber === totalQuestions ? '🎯 Ver Meu Protocolo Personalizado' : 'Próxima Pergunta →'}
          </button>
          
          {questionNumber === totalQuestions && (
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-3 sm:p-4">
              <p className="text-center text-green-700 font-medium text-xs sm:text-sm">
                ✨ Seu protocolo Mounjaro Natural será revelado em instantes!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};