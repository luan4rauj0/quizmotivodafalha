import React, { useState, useEffect } from 'react';
import { Gift, MessageCircle, Camera } from 'lucide-react';

interface DiscountWheelProps {
  onComplete: (discount: number) => void;
}

export const DiscountWheel: React.FC<DiscountWheelProps> = ({ onComplete }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [rotation, setRotation] = useState(0);

  const discounts = [5, 10, 15, 20, 25, 30, 10, 15, 20, 25, 30, 5];
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD',
    '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9', '#F8C471', '#82E0AA'
  ];

  const spinWheel = () => {
    if (isSpinning || hasSpun) return;

    setIsSpinning(true);
    
    // Random rotation between 1440 and 2160 degrees (4-6 full rotations)
    const randomRotation = 1440 + Math.random() * 720;
    setRotation(randomRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setHasSpun(true);
      
      // Calculate which segment we landed on
      const normalizedRotation = (360 - (randomRotation % 360)) % 360;
      const segmentAngle = 360 / discounts.length;
      const segmentIndex = Math.floor(normalizedRotation / segmentAngle);
      const finalDiscount = discounts[segmentIndex];
      
      setDiscount(finalDiscount);
      onComplete(finalDiscount);
    }, 3000);
  };

  const handleWhatsAppRedirect = () => {
    const message = `Olá! Acabei de fazer o quiz metabólico e ganhei ${discount}% de desconto na roleta! Gostaria de saber mais sobre o protocolo dos 3 chás.`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
      <div className="text-center mb-6">
        <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mb-3 animate-pulse">
          <Gift className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
          🎉 Parabéns! Você Desbloqueou a Roleta da Sorte!
        </h2>
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
          Gire a roleta e ganhe até 30% de desconto no seu protocolo personalizado
        </p>
      </div>

      <div className="flex justify-center mb-6">
        <div className="relative">
          {/* Wheel */}
          <div 
            className={`w-64 h-64 rounded-full border-8 border-gray-300 relative overflow-hidden transition-transform duration-3000 ease-out ${isSpinning ? 'animate-spin' : ''}`}
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {discounts.map((disc, index) => {
              const angle = (360 / discounts.length) * index;
              return (
                <div
                  key={index}
                  className="absolute w-full h-full"
                  style={{
                    transform: `rotate(${angle}deg)`,
                    clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((360 / discounts.length) * Math.PI / 180)}% ${50 - 50 * Math.sin((360 / discounts.length) * Math.PI / 180)}%)`
                  }}
                >
                  <div 
                    className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: colors[index] }}
                  >
                    <span 
                      className="text-white font-bold text-lg transform"
                      style={{ transform: `rotate(${360 / discounts.length / 2}deg) translateY(-80px)` }}
                    >
                      {disc}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Pointer */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
            <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-red-600"></div>
          </div>
        </div>
      </div>

      {!hasSpun ? (
        <button
          onClick={spinWheel}
          disabled={isSpinning}
          className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform ${
            isSpinning 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white hover:from-yellow-600 hover:to-orange-700 hover:scale-105'
          }`}
        >
          {isSpinning ? '🎰 Girando...' : '🎰 GIRAR A ROLETA DA SORTE'}
        </button>
      ) : (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-xl p-4 text-center">
            <h3 className="text-2xl font-bold text-green-700 mb-2">
              🎉 VOCÊ GANHOU {discount}% DE DESCONTO!
            </h3>
            <p className="text-green-600 font-medium">
              Seu desconto exclusivo está garantido!
            </p>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4">
            <div className="flex items-start">
              <Camera className="w-5 h-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-yellow-800 mb-2">📸 IMPORTANTE - Instruções:</h4>
                <ol className="text-yellow-700 text-sm space-y-1 list-decimal list-inside">
                  <li>Tire um print/screenshot desta tela com seu desconto</li>
                  <li>Clique no botão do WhatsApp abaixo</li>
                  <li>Envie o print no chat para garantir seu desconto</li>
                  <li>Nossa equipe te enviará o link de pagamento com desconto aplicado</li>
                </ol>
              </div>
            </div>
          </div>

          <button
            onClick={handleWhatsAppRedirect}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:from-green-600 hover:to-green-700 transform hover:scale-105 flex items-center justify-center animate-pulse"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            💬 FALAR NO WHATSAPP E GARANTIR DESCONTO
          </button>

          <div className="bg-red-50 border border-red-200 rounded-xl p-3">
            <p className="text-red-700 text-center text-sm font-medium">
              ⏰ Desconto válido apenas nas próximas 24 horas!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};