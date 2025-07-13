import React, { useEffect, useState } from 'react';
import { X, Gift, Clock } from 'lucide-react';

interface ExitIntentPopupProps {
  onClose: () => void;
  onAccept: () => void;
  isDarkMode: boolean;
}

export const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ 
  onClose, 
  onAccept, 
  isDarkMode 
}) => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onClose]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className={`max-w-md w-full rounded-2xl p-6 relative animate-pulse ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 ${
            isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-4">
            <Gift className="w-8 h-8 text-white" />
          </div>

          <h2 className={`text-2xl font-bold mb-2 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            🚨 ESPERE! Oferta Especial
          </h2>

          <p className={`mb-4 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Antes de sair, que tal garantir seu protocolo com <strong>70% de desconto</strong>?
          </p>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-5 h-5 text-red-600 mr-2" />
              <span className="text-red-700 font-bold">
                Oferta expira em: {formatTime(timeLeft)}
              </span>
            </div>
            <p className="text-red-600 text-sm">
              Esta é sua última chance de garantir o preço promocional!
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={onAccept}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
            >
              🎯 GARANTIR DESCONTO AGORA
            </button>

            <button
              onClick={onClose}
              className={`w-full py-2 text-sm ${
                isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Não, obrigado. Continuar sem desconto.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};