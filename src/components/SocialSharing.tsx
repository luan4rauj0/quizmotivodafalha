import React from 'react';
import { Share2, MessageCircle, Instagram, Copy, Check } from 'lucide-react';
import { QuizResult } from '../types/quiz';

interface SocialSharingProps {
  result: QuizResult;
  userName: string;
  totalPoints: number;
  isDarkMode: boolean;
}

export const SocialSharing: React.FC<SocialSharingProps> = ({ 
  result, 
  userName, 
  totalPoints, 
  isDarkMode 
}) => {
  const [copied, setCopied] = React.useState(false);

  const shareText = `🎯 Acabei de fazer um quiz incrível que revelou meu perfil metabólico!\n\n💪 Descobri que tenho ${totalPoints} pontos e ${result.title}\n\n🌟 ${result.description}\n\n🔍 Faça você também e descubra seu perfil: ${window.location.href}`;

  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramShare = () => {
    // Para Instagram, vamos tentar abrir o app ou copiar o texto
    try {
      // Tenta abrir o Instagram (pode não funcionar em todos os navegadores)
      window.open('instagram://', '_blank');
    } catch (error) {
      // Se não conseguir abrir o app, copia o texto
      navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      alert('Texto copiado! Cole no seu Instagram Stories 📱');
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`p-4 rounded-xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
    } border-2 border-dashed ${
      isDarkMode ? 'border-gray-600' : 'border-gray-300'
    }`}>
      <div className="flex items-center mb-3">
        <Share2 className={`w-5 h-5 mr-2 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`} />
        <h3 className={`font-semibold ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        }`}>
          Compartilhe o quiz com suas amigas
        </h3>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={handleWhatsAppShare}
          className="flex flex-col items-center p-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors cursor-pointer"
          type="button"
        >
          <MessageCircle className="w-6 h-6 mb-1" />
          <span className="text-xs font-medium">WhatsApp</span>
        </button>

        <button
          onClick={handleInstagramShare}
          className="flex flex-col items-center p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-colors cursor-pointer"
          type="button"
        >
          <Instagram className="w-6 h-6 mb-1" />
          <span className="text-xs font-medium">Instagram</span>
        </button>

        <button
          onClick={handleCopyLink}
          className={`flex flex-col items-center p-3 rounded-lg transition-colors cursor-pointer ${
            copied 
              ? 'bg-green-500 text-white' 
              : isDarkMode 
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          type="button"
        >
          {copied ? (
            <Check className="w-6 h-6 mb-1" />
          ) : (
            <Copy className="w-6 h-6 mb-1" />
          )}
          <span className="text-xs font-medium">
            {copied ? 'Copiado!' : 'Copiar'}
          </span>
        </button>
      </div>

      <div className={`mt-3 p-3 rounded-lg text-xs ${
        isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-600'
      }`}>
        <strong>Preview da mensagem:</strong> {shareText.substring(0, 80)}...
      </div>
    </div>
  );
};