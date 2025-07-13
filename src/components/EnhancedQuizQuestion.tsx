import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { QuizQuestion as QuizQuestionType } from '../types/quiz';

interface EnhancedQuizQuestionProps {
  question: QuizQuestionType;
  selectedOptions: string[];
  onOptionSelect: (optionId: string) => void;
  onNext: () => void;
  onPrevious?: () => void;
  questionNumber: number;
  totalQuestions: number;
  showMicroFeedback?: boolean;
  isDarkMode: boolean;
  canGoBack: boolean;
}

export const EnhancedQuizQuestion: React.FC<EnhancedQuizQuestionProps> = ({
  question,
  selectedOptions,
  onOptionSelect,
  onNext,
  onPrevious,
  questionNumber,
  totalQuestions,
  showMicroFeedback = false,
  isDarkMode,
  canGoBack
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setShowFeedback(false);
  }, [question.id]);

  useEffect(() => {
    if (showMicroFeedback && selectedOptions.length > 0) {
      setTimeout(() => setShowFeedback(true), 100);
    }
  }, [showMicroFeedback, selectedOptions]);

  const isAnswered = selectedOptions.length > 0;

  return (
    <div className={`w-full max-w-2xl mx-auto rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 transition-all duration-500 transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
    } ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="mb-4">
        <span className={`text-xs sm:text-sm font-medium mb-2 block ${
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          Pergunta {questionNumber} de {totalQuestions}
        </span>
        <h2 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-4 leading-tight ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        }`}>
          {question.question}
        </h2>
      </div>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <button
            key={option.id}
            onClick={() => onOptionSelect(option.id)}
            className={`w-full p-3 sm:p-4 text-left rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02] ${
              selectedOptions.includes(option.id)
                ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-lg'
                : isDarkMode
                  ? 'border-gray-600 hover:border-gray-500 hover:bg-gray-700 bg-gray-700 text-gray-200'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 bg-white text-gray-800'
            }`}
            style={{
              animationDelay: `${index * 100}ms`,
              animation: isVisible ? 'slideInUp 0.5s ease-out forwards' : 'none'
            }}
          >
            <div className="flex items-center">
              <div
                className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-all duration-200 ${
                  selectedOptions.includes(option.id)
                    ? 'border-blue-500 bg-blue-500'
                    : isDarkMode
                      ? 'border-gray-500'
                      : 'border-gray-300'
                }`}
              >
                {selectedOptions.includes(option.id) && (
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                )}
              </div>
              <span className="font-medium text-sm sm:text-base">{option.text}</span>
            </div>
          </button>
        ))}
      </div>

      {showFeedback && question.microFeedback && (
        <div className={`mb-6 p-3 sm:p-4 rounded-xl border-l-4 border-green-400 transition-all duration-500 transform translate-y-0 opacity-100 ${
          isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-green-50 to-blue-50'
        }`}>
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <p className={`text-xs sm:text-sm leading-relaxed ${
              isDarkMode ? 'text-gray-200' : 'text-gray-700'
            }`}>
              {question.microFeedback}
            </p>
          </div>
        </div>
      )}

      <div className="flex gap-3">
        {canGoBack && onPrevious && (
          <button
            onClick={onPrevious}
            className={`flex items-center px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
              isDarkMode 
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Voltar
          </button>
        )}

        {isAnswered && (
          <button
            onClick={onNext}
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-200 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 flex items-center justify-center"
          >
            {questionNumber === totalQuestions ? (
              '🎯 Ver Meu Protocolo Personalizado'
            ) : (
              <>
                Próxima Pergunta
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </button>
        )}
      </div>

      {questionNumber === totalQuestions && isAnswered && (
        <div className={`mt-3 p-3 sm:p-4 rounded-xl border transition-all duration-500 ${
          isDarkMode 
            ? 'bg-gray-700 border-green-500' 
            : 'bg-gradient-to-r from-green-50 to-blue-50 border-green-200'
        }`}>
          <p className={`text-center font-medium text-xs sm:text-sm ${
            isDarkMode ? 'text-green-400' : 'text-green-700'
          }`}>
            ✨ Seu protocolo Mounjaro Natural será revelado em instantes!
          </p>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};