import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { QuizQuestion as QuizQuestionType } from '../types/quiz';
// Remover import do WheelPicker

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
  // Novo estado para slider
  const [sliderValue, setSliderValue] = useState<number | undefined>(undefined);
  // Novo estado para saber se o usuário já interagiu com o slider de peso
  const [pesoInteragido, setPesoInteragido] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setShowFeedback(false);
    // Resetar slider ao trocar de pergunta
    if (question.type === 'slider') {
      // Se já respondeu, mostrar valor salvo
      const prev = selectedOptions[0];
      setSliderValue(prev ? Number(prev) : question.min ?? 0);
    }
  }, [question.id]);

  useEffect(() => {
    if (showMicroFeedback && selectedOptions.length > 0) {
      setTimeout(() => setShowFeedback(true), 100);
    }
  }, [showMicroFeedback, selectedOptions]);

  const isAnswered = selectedOptions.length > 0 || (question.type === 'slider' && sliderValue !== undefined);

  // Handler para slider
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSliderValue(Number(value));
    onOptionSelect(value);
    // Se for altura, salvar em window para uso no IMC do peso
    if (question.id === 'q0_height') {
      (window as any).lastHeightValue = value;
    }
    // Se for peso, marcar que o usuário já interagiu
    if (question.id === 'q0_weight') {
      setPesoInteragido(true);
    }
  };

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
        {question.type === 'slider' ? (
          <div className="flex flex-col items-center w-full">
            <div className="flex items-center justify-center mb-2">
              <span className="text-2xl mr-2">
                {question.id === 'q0_height' ? '🧍' : '⚖️'}
              </span>
              <span className="text-4xl font-extrabold text-blue-700">
                {sliderValue ?? question.min}
              </span>
              <span className="ml-2 text-2xl font-medium text-gray-600">{question.unit}</span>
            </div>
            <input
              type="range"
              min={question.min}
              max={question.max}
              step={question.step || 1}
              value={sliderValue ?? question.min}
              onChange={handleSliderChange}
              className="w-full h-3 bg-gradient-to-r from-blue-200 via-blue-400 to-purple-400 rounded-lg appearance-none cursor-pointer outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-400 mb-2"
              style={{ accentColor: '#3b82f6' }}
            />
            
            {/* Mensagem informativa para slider */}
            <div className={`mb-3 p-2 rounded-lg text-center w-full max-w-md ${
              isDarkMode 
                ? 'bg-blue-900/30 border border-blue-700 text-blue-200' 
                : 'bg-blue-50 border border-blue-200 text-blue-700'
            }`}>
              <p className="text-xs font-medium">
                {question.id === 'q0_height' 
                  ? '📏 Arraste a bolinha para selecionar sua altura'
                  : '⚖️ Arraste a bolinha para selecionar seu peso'
                }
              </p>
            </div>
            
            <div className="flex justify-between w-full text-xs mt-1 text-gray-500">
              <span>{question.min}{question.unit ? ` ${question.unit}` : ''}</span>
              <span>{question.max}{question.unit ? ` ${question.unit}` : ''}</span>
            </div>
            {/* Microfeedback de IMC dinâmico */}
            {question.id === 'q0_weight' && pesoInteragido && (() => {
              const alturaAnswer = (window as any).lastHeightValue ?? null;
              const altura = alturaAnswer ? Number(alturaAnswer) : undefined;
              const peso = sliderValue;
              let imc: number | undefined = undefined;
              if (altura && peso) {
                imc = peso / Math.pow(altura / 100, 2);
              }
              const getImcClass = (imc: number) => {
                if (imc < 18.5) return { label: 'Abaixo do peso', color: 'text-blue-600', desc: 'Seu peso está abaixo do ideal para sua altura. Isso pode indicar desnutrição ou outros problemas de saúde.' };
                if (imc < 25) return { label: 'Peso normal', color: 'text-green-600', desc: 'Seu peso está adequado para sua altura. Continue mantendo hábitos saudáveis!' };
                if (imc < 30) return { label: 'Excesso de peso', color: 'text-yellow-600', desc: 'Você está acima do peso para sua altura. Estar acima do peso pode aumentar o risco de desenvolver doenças cardíacas, bem como outras condições de saúde.' };
                if (imc < 35) return { label: 'Obesidade grau I', color: 'text-orange-600', desc: 'Obesidade leve. Atenção à alimentação e atividade física.' };
                if (imc < 40) return { label: 'Obesidade grau II', color: 'text-orange-700', desc: 'Obesidade moderada. Procure acompanhamento profissional.' };
                return { label: 'Obesidade grau III', color: 'text-red-700', desc: 'Obesidade grave. Risco elevado para a saúde. Procure orientação médica.' };
              };
              if (imc && altura) {
                const imcInfo = getImcClass(imc);
                return (
                  <div className={`mt-2 p-4 rounded-xl border-l-4 bg-orange-50 border-orange-400 flex flex-col items-start w-full max-w-md mx-auto`}>
                    <div className="flex items-center mb-1">
                      <span className="font-bold mr-2 text-orange-600">⚠️</span>
                      <span className="font-semibold text-gray-800">Seu IMC é considerado <span className={imcInfo.color}>{imcInfo.label}</span> ({imc.toFixed(1)})</span>
                    </div>
                    <span className="text-gray-700 text-sm mb-1">{imcInfo.desc}</span>
                    <span className="text-purple-700 text-sm font-semibold mt-1">Continue o quiz para receber seu diagnóstico personalizado!</span>
                  </div>
                );
              }
              return null;
            })()}
          </div>
        ) : (
          <>
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
            {/* Microfeedback destacado por opção */}
            {showFeedback && selectedOptions.length === 1 && question.options.find(o => o.id === selectedOptions[0])?.microFeedback && (
              <div className={`mt-4 mb-6 p-4 rounded-2xl border-l-8 border-blue-400 bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg animate-fadeIn` + (isDarkMode ? ' bg-gray-700 border-blue-600' : '')}>
                <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{question.options.find(o => o.id === selectedOptions[0])?.microFeedback}</p>
              </div>
            )}
          </>
        )}
      </div>

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

      <style>{`
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
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-in;
        }
      `}</style>
    </div>
  );
};