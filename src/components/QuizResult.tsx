import React from 'react';
import { CheckCircle, Star } from 'lucide-react';
import { QuizResult as QuizResultType } from '../types/quiz';
import { DiscountWheel } from './DiscountWheel';
import { EconomyCalculator } from './EconomyCalculator';

interface QuizResultProps {
  result: QuizResultType;
  totalPoints: number;
  userName: string;
  onRestart: () => void;
  eventToAttend?: string; // Novo campo opcional
  isDarkMode?: boolean; // Novo campo para o modo escuro
  userAnswers?: any[]; // Adicionado para acessar altura e peso
}

export const QuizResult: React.FC<QuizResultProps> = ({
  result,
  totalPoints,
  userName,
  onRestart,
  eventToAttend,
  isDarkMode = false,
  userAnswers = [], // Novo parâmetro
}) => {
  const [showWheel, setShowWheel] = React.useState(false);
  const [discount, setDiscount] = React.useState(0);
  // Animação de fade-in/slide-in
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);
  // Efeito de contagem animada para a pontuação
  const [displayedPoints, setDisplayedPoints] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const end = totalPoints;
    if (start === end) return;
    let increment = end > 100 ? Math.ceil(end / 50) : 1;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setDisplayedPoints(start);
    }, 15);
    return () => clearInterval(timer);
  }, [totalPoints]);

  const handleDiscountComplete = (discountValue: number) => {
    setDiscount(discountValue);
  };

  // Função para buscar altura e peso
  const getSliderValue = (id: string) => {
    const answer = userAnswers.find((a) => a.questionId === id);
    if (!answer) return undefined;
    const val = answer.selectedOptions[0];
    return val ? Number(val) : undefined;
  };
  const altura = getSliderValue('q0_height');
  const peso = getSliderValue('q0_weight');
  let imc: number | undefined = undefined;
  if (altura && peso) {
    imc = peso / Math.pow(altura / 100, 2);
  }
  const getImcClass = (imc: number) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 25) return 'Peso normal';
    if (imc < 30) return 'Sobrepeso';
    if (imc < 35) return 'Obesidade grau I';
    if (imc < 40) return 'Obesidade grau II';
    return 'Obesidade grau III';
  };

  // Função para definir o texto do evento
  const getEventText = () => {
    if (!eventToAttend || eventToAttend === 'Nenhum evento específico') {
      return 'sua evolução nos próximos meses';
    }
    
    // Definir a preposição correta baseada no evento
    const eventPrepositions: Record<string, string> = {
      'casamento': 'do',
      'formatura': 'da',
      'viagem': 'da',
      'aniversario': 'do',
      'nenhum': 'da'
    };
    
    const eventKey = eventToAttend.toLowerCase();
    const preposition = eventPrepositions[eventKey] || 'do';
    
    return `bem a tempo ${preposition} ${eventToAttend.toLowerCase()}`;
  };

  if (showWheel) {
    return <DiscountWheel onComplete={handleDiscountComplete} />;
  }

  return (
    <div className={`w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ boxShadow: '0 8px 32px 0 rgba(80, 80, 200, 0.18)' }}
    >
      {/* IMC do usuário */}
      {imc && (
        <div className="mb-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-4 border-l-4 border-blue-500">
          <h3 className="text-lg font-bold text-blue-800 mb-2 text-center">Seu IMC</h3>
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl font-extrabold text-blue-700">{imc.toFixed(1)}</span>
            <span className="text-base font-medium text-blue-600 mb-1">{getImcClass(imc)}</span>
            <span className="text-xs text-gray-600 text-center">O IMC (Índice de Massa Corporal) é um indicador internacional usado para classificar o peso em relação à altura. Ele ajuda a identificar riscos à saúde e personalizar ainda mais seu protocolo.</span>
          </div>
        </div>
      )}
      <div className="text-center mb-4 sm:mb-6">
        <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-3">
          <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
          Parabéns pelo comprometimento, {userName}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
          Uma grande mudança começa com um pequeno passo, o seu foi terminar esse quiz, aqui está o seu resultado personalizado
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 sm:p-5 mb-4 sm:mb-6 shadow-lg">
        <div className="flex items-center justify-center mb-3">
          <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 mr-2 animate-bounce" />
          <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-700">
            Você fez <span className="text-2xl font-extrabold text-purple-700 animate-pulse">{displayedPoints}</span> pontos
          </span>
        </div>
        <h3
          className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 text-center"
          dangerouslySetInnerHTML={{ __html: result.title }}
        />
        <div
          className="text-gray-700 text-sm sm:text-base lg:text-lg mb-4 text-center"
          dangerouslySetInnerHTML={{ __html: result.description }}
        />
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-lg mt-4">
          <div dangerouslySetInnerHTML={{ __html: result.recommendation }} />
        </div>
      </div>

      {/* Seção de Previsão de Resultados */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 mb-6 border-2 border-purple-200">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-purple-800 mb-2">
            📊 Previsão Personalizada de Resultados
          </h3>
          <p className="text-purple-600 text-sm">
            Baseado no seu perfil e nas 15.000+ transformações que acompanhamos
          </p>
        </div>

        <div className="bg-white rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-700 font-medium">🎯 Meta prevista:</span>
            <span className="text-xl font-bold text-green-600">-8 a 20kg</span>
          </div>
          <div className="text-center mb-3">
            <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              📅 Próximos 2 meses
            </span>
          </div>
          
          <div className="text-center mb-4">
            <h4 className="font-bold text-gray-800 mb-3">
              🔮 Seu Quadro Futuro em 2 Meses
            </h4>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <div className="bg-orange-100 rounded-lg p-3 mb-2">
                <div className="w-20 h-24 bg-orange-300 rounded-lg mx-auto mb-2 flex items-center justify-center relative overflow-hidden animate-pulse">
                  <img 
                    src="https://i.imgur.com/QrDX41A.png" 
                    alt="Corpo atual" 
                    className="w-full h-full object-cover rounded-lg transition-all duration-500 hover:scale-110"
                    loading="lazy"
                    // Sugestão: usar versão WebP para maior performance
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-orange-800 bg-opacity-80 text-white text-xs font-bold py-1">
                    AGORA
                  </div>
                </div>
                <p className="text-xs text-orange-700 font-medium">Corpo atual</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-lg p-3 mb-2">
                <div className="w-20 h-24 bg-green-300 rounded-lg mx-auto mb-2 flex items-center justify-center relative overflow-hidden animate-bounce">
                  <img 
                    src="https://i.imgur.com/mjFf5Oj.png" 
                    alt="Seu objetivo" 
                    className="w-full h-full object-cover rounded-lg transition-all duration-500 hover:scale-110"
                    loading="lazy"
                    // Sugestão: usar versão WebP para maior performance
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-green-800 bg-opacity-80 text-white text-xs font-bold py-1">
                    META
                  </div>
                </div>
                <p className="text-xs text-green-700 font-medium">Seu objetivo</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mb-4 animate-pulse">
            <div className="text-4xl text-purple-500 animate-bounce">→</div>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="grid grid-cols-1 gap-4">
            {/* Gordura Perdida */}
            <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">🔥</span>
                  </div>
                  <span className="text-sm font-bold text-gray-800">Peso Perdido</span>
                </div>
                <div className="text-2xl text-purple-500 animate-bounce">→</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-red-50 rounded-lg">
                  <div className="text-xs text-red-600 font-medium mb-1">AGORA</div>
                  <div className="text-lg font-bold text-red-700">ALTA</div>
                  <div className="text-xs text-red-500">Acúmulo excessivo</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-xs text-green-600 font-medium mb-1">DEPOIS</div>
                  <div className="text-lg font-bold text-green-700">BAIXA</div>
                  <div className="text-xs text-green-500">-8 a 20kg perdidos</div>
                </div>
              </div>
            </div>

            {/* Energia e Disposição */}
            <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">⚡</span>
                  </div>
                  <span className="text-sm font-bold text-gray-800">Energia e Disposição</span>
                </div>
                <div className="text-2xl text-purple-500 animate-bounce">→</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-xs text-gray-600 font-medium mb-1">AGORA</div>
                  <div className="text-lg font-bold text-gray-700">BAIXA</div>
                  <div className="text-xs text-gray-500">Fadiga constante</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-xs text-blue-600 font-medium mb-1">DEPOIS</div>
                  <div className="text-lg font-bold text-blue-700">EXCELENTE</div>
                  <div className="text-xs text-blue-500">Vitalidade restaurada</div>
                </div>
              </div>
            </div>

            {/* Equilíbrio Hormonal */}
            <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">⚖️</span>
                  </div>
                  <span className="text-sm font-bold text-gray-800">Equilíbrio Hormonal</span>
                </div>
                <div className="text-2xl text-purple-500 animate-bounce">→</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-red-50 rounded-lg">
                  <div className="text-xs text-red-600 font-medium mb-1">AGORA</div>
                  <div className="text-lg font-bold text-red-700">DESREGULADO</div>
                  <div className="text-xs text-red-500">Múltiplos desequilíbrios</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="text-xs text-purple-600 font-medium mb-1">DEPOIS</div>
                  <div className="text-lg font-bold text-purple-700">EQUILIBRADO</div>
                  <div className="text-xs text-purple-500">Hormônios normalizados</div>
                </div>
              </div>
            </div>

            {/* Metabolismo */}
            <div className="bg-white rounded-lg p-4 border-2 border-red-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">🩺</span>
                  </div>
                  <span className="text-sm font-bold text-gray-800">Metabolismo</span>
                </div>
                <div className="text-2xl text-purple-500 animate-bounce">→</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <div className="text-xs text-orange-600 font-medium mb-1">AGORA</div>
                  <div className="text-lg font-bold text-orange-700">LENTO</div>
                  <div className="text-xs text-orange-500">Queima poucas calorias</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-xs text-green-600 font-medium mb-1">DEPOIS</div>
                  <div className="text-lg font-bold text-green-700">ACELERADO</div>
                  <div className="text-xs text-green-500">Queima 24h por dia</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4">
          <h4 className="font-bold text-gray-800 mb-3 text-center">
            📈 Veja como seu corpo mudará
          </h4>
          <p className="text-center text-sm text-gray-600 mb-3">
            {getEventText()}
          </p>
          
          <div className="relative">
            <div className="flex justify-between items-end h-20 mb-2">
              <div className="flex flex-col items-center">
                <div className="w-2 bg-orange-500 rounded-t" style={{height: '60px'}}></div>
                <span className="text-xs text-gray-600 mt-1">Agora</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2 bg-orange-400 rounded-t" style={{height: '45px'}}></div>
                <span className="text-xs text-gray-600 mt-1">30d</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2 bg-yellow-400 rounded-t" style={{height: '30px'}}></div>
                <span className="text-xs text-gray-600 mt-1">60d</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2 bg-green-500 rounded-t" style={{height: '15px'}}></div>
                <span className="text-xs text-gray-600 mt-1">90d</span>
                <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full mt-1">
                  Objetivo!
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-300"></div>
            
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>75kg</span>
              <span>70kg</span>
              <span>65kg</span>
              <span>60kg</span>
            </div>
          </div>
          
          <p className="text-center text-xs text-gray-500 mt-3">
            *Resultados baseados em dados reais de usuárias com perfil similar ao seu
          </p>
        </div>
      </div>

      {/* Calculadora de Economia */}
      <div className="mb-6 relative z-20" style={{ pointerEvents: 'auto' }}>
        <EconomyCalculator isDarkMode={isDarkMode} />
      </div>

      <div className="space-y-3">
        <button 
          onClick={() => setShowWheel(true)}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-200 hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 flex items-center justify-center animate-pulse"
        >
          <span>🎰 GIRAR ROLETA E GARANTIR DESCONTO</span>
        </button>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
          <div className="flex items-center justify-center mb-1">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse mr-2"></div>
            <span className="text-yellow-700 font-semibold text-xs sm:text-sm">ROLETA DA SORTE DESBLOQUEADA</span>
          </div>
          <p className="text-yellow-700 text-center text-xs sm:text-sm">
            Gire a roleta e ganhe até <span className="font-bold">30% de desconto</span> no seu protocolo
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={onRestart}
            className="px-4 py-2 rounded-md font-semibold text-sm bg-gray-100 text-gray-700 shadow hover:bg-gray-200 transition-all duration-200"
          >
            Recomeçar Quiz
          </button>
        </div>
        
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-4 mt-4">
          <div className="text-center">
            <h3 className="font-bold text-purple-800 mb-2 text-lg">
              🎯 DESCONTO EXCLUSIVO PARA SELECIONADAS
            </h3>
            <p className="text-purple-700 text-sm mb-2">
              Se você foi uma das <span className="font-bold">selecionadas</span> e um dos nossos atendentes entrou em contato com você:
            </p>
            <div className="bg-white rounded-lg p-3 border border-purple-200">
              <p className="text-purple-600 font-medium text-sm">
                📱 <span className="font-bold">Mande um print deste resultado</span> e receba um <span className="font-bold text-purple-800">desconto ainda maior!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};