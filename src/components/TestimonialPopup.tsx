import React, { useState, useEffect } from 'react';
import { Star, X, User } from 'lucide-react';

interface Testimonial {
  name: string;
  age: number;
  text: string;
  result: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Maria",
    age: 42,
    text: "Perdi 8kg em 2 meses só com os 3 chás! Nunca pensei que seria tão simples.",
    result: "8kg perdidos",
  },
  {
    name: "Ana",
    age: 45,
    text: "A fome descontrolada sumiu na primeira semana. Incrível como funciona!",
    result: "Fome controlada",
  },
  {
    name: "Carla",
    age: 48,
    text: "Finalmente entendi porque nada funcionava antes. O protocolo mudou tudo.",
    result: "12kg perdidos",
  },
  {
    name: "Fernanda",
    age: 51,
    text: "Minha energia voltou e a barriga desinflou. Melhor investimento que já fiz.",
    result: "Energia restaurada",
  },
  {
    name: "Patricia",
    age: 44,
    text: "Em 3 semanas já sentia diferença. Os chás realmente ativaram meu metabolismo.",
    result: "Metabolismo ativo",
  },
  {
    name: "Juliana",
    age: 47,
    text: "Depois de anos tentando, finalmente encontrei algo que funciona de verdade.",
    result: "15kg perdidos",
  },
  {
    name: "Sandra",
    age: 49,
    text: "O vício em doces desapareceu completamente. Não acredito que era tão simples!",
    result: "Sem compulsão",
  },
  {
    name: "Roberta",
    age: 43,
    text: "Meu intestino regulou e perdi 6kg só no primeiro mês. Estou impressionada!",
    result: "6kg perdidos",
  },
  {
    name: "Luciana",
    age: 38,
    text: "Estava tomando Ozempic e gastando uma fortuna. Com os chás consegui o mesmo resultado gastando 10x menos!",
    result: "Economia + resultados",
  },
  {
    name: "Beatriz",
    age: 52,
    text: "Minha glicose estava descontrolada. Em 1 mês normalizou completamente. Meu médico ficou surpreso!",
    result: "Glicose normalizada",
  },
  {
    name: "Camila",
    age: 29,
    text: "Pós-parto foi um pesadelo. Os chás me ajudaram a voltar ao meu corpo em 4 meses.",
    result: "Corpo pós-parto recuperado",
  },
  {
    name: "Renata",
    age: 46,
    text: "Sofria com refluxo e má digestão há anos. Agora durmo tranquila e sem dor!",
    result: "Digestão perfeita",
  },
  {
    name: "Daniela",
    age: 41,
    text: "Meu marido disse que eu voltei a ser a mulher que ele conheceu. Autoestima nas alturas!",
    result: "Autoestima renovada",
  },
  {
    name: "Vanessa",
    age: 35,
    text: "Trabalhava o dia todo e chegava em casa exausta. Agora tenho energia para brincar com meus filhos!",
    result: "Energia para família",
  },
  {
    name: "Cristina",
    age: 54,
    text: "Na menopausa engordei 15kg. Com o protocolo já eliminei 10kg e me sinto jovem novamente!",
    result: "10kg na menopausa",
  },
  {
    name: "Adriana",
    age: 39,
    text: "Tinha síndrome do intestino irritável. Os chás regularam tudo e ainda emagreci 7kg!",
    result: "Intestino regulado",
  },
  {
    name: "Mônica",
    age: 48,
    text: "Estava pré-diabética e com pressão alta. Hoje todos os exames estão normais!",
    result: "Saúde normalizada",
  },
  {
    name: "Priscila",
    age: 33,
    text: "Ansiedade me fazia comer compulsivamente. O chá da noite acalmou minha mente e parei de beliscar!",
    result: "Ansiedade controlada",
  },
  {
    name: "Simone",
    age: 50,
    text: "Fiz bariátrica há 5 anos e estava reengordando. Os chás me ajudaram a manter o peso ideal!",
    result: "Peso mantido pós-bariátrica",
  },
  {
    name: "Tatiana",
    age: 42,
    text: "Hipotireoidismo tornava impossível emagrecer. Finalmente encontrei algo que funciona mesmo com hormônio baixo!",
    result: "Emagrecimento com hipotireoidismo",
  },
  {
    name: "Viviane",
    age: 36,
    text: "Estava viciada em refrigerante e doces. Em 2 semanas perdi completamente a vontade!",
    result: "Livre do açúcar",
  },
  {
    name: "Elaine",
    age: 45,
    text: "Gastrite crônica me impedia de fazer dietas. Com os chás emagreci sem agredir o estômago!",
    result: "Emagrecimento sem gastrite",
  },
  {
    name: "Raquel",
    age: 31,
    text: "SOP me fazia engordar sem parar. O protocolo regulou meus hormônios e perdi 9kg!",
    result: "9kg com SOP",
  },
  {
    name: "Cláudia",
    age: 53,
    text: "Insônia e ganho de peso andavam juntos. Agora durmo como um bebê e estou 11kg mais leve!",
    result: "Sono + 11kg perdidos",
  },
  {
    name: "Fabiana",
    age: 40,
    text: "Trabalho em turnos e meu metabolismo estava bagunçado. Os chás organizaram minha fome e energia!",
    result: "Metabolismo regulado",
  },
  {
    name: "Letícia",
    age: 28,
    text: "Depois da pandemia engordei 12kg. Em 3 meses voltei ao meu peso e me sinto melhor que antes!",
    result: "12kg pós-pandemia",
  },
  {
    name: "Márcia",
    age: 47,
    text: "Fazia academia há anos sem resultado. Com os chás finalmente meu corpo respondeu aos exercícios!",
    result: "Potencializou exercícios",
  },
  {
    name: "Natália",
    age: 34,
    text: "Enxaqueca constante me deixava de cama. Desde que comecei o protocolo, raramente tenho crise!",
    result: "Enxaqueca controlada",
  },
  {
    name: "Patrícia",
    age: 49,
    text: "Colesterol alto e triglicérides nas alturas. Em 2 meses todos os índices normalizaram!",
    result: "Colesterol normalizado",
  },
  {
    name: "Rosana",
    age: 55,
    text: "Artrose me limitava muito. Perdi peso e a inflamação diminuiu drasticamente!",
    result: "Menos inflamação",
  },
  {
    name: "Sabrina",
    age: 37,
    text: "Amamentando meu segundo filho, precisava emagrecer com segurança. Os chás foram perfeitos!",
    result: "Emagrecimento na amamentação",
  },
  {
    name: "Tânia",
    age: 51,
    text: "Depressão me fazia comer por ansiedade. O protocolo melhorou meu humor e eliminei 8kg!",
    result: "Humor + 8kg perdidos",
  },
  {
    name: "Valéria",
    age: 43,
    text: "Retenção de líquido era meu pesadelo. Em 1 semana desinchei completamente!",
    result: "Desinchada totalmente",
  },
  {
    name: "Yara",
    age: 32,
    text: "Vegetariana há anos mas não conseguia emagrecer. Os chás se adaptaram perfeitamente à minha dieta!",
    result: "Emagrecimento vegetariano",
  },
  {
    name: "Zilda",
    age: 58,
    text: "Achei que na minha idade seria impossível. Aos 58 anos perdi 13kg e me sinto com 40!",
    result: "13kg aos 58 anos",
  },
  {
    name: "Amanda",
    age: 26,
    text: "Bulimia destruiu meu metabolismo. O protocolo me ensinou a ter uma relação saudável com a comida!",
    result: "Relação saudável com comida",
  },
  {
    name: "Bruna",
    age: 44,
    text: "Fibromialgia me deixava sem energia. Os chás me devolveram a vitalidade que eu pensava ter perdido!",
    result: "Vitalidade com fibromialgia",
  },
  {
    name: "Carolina",
    age: 39,
    text: "Três cesárias deixaram minha barriga flácida. Não acreditava que chá pudesse ajudar, mas funcionou!",
    result: "Barriga pós-cesárias",
  },
  {
    name: "Débora",
    age: 46,
    text: "Diabetes tipo 2 controlada apenas com os chás. Meu endocrinologista reduziu a medicação!",
    result: "Diabetes controlada",
  },
  {
    name: "Eduarda",
    age: 30,
    text: "Síndrome dos ovários policísticos me fazia engordar 2kg por mês. Agora estou perdendo na mesma velocidade!",
    result: "SOP revertida",
  },
];

interface TestimonialPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

export const TestimonialPopup: React.FC<TestimonialPopupProps> = ({ isVisible, onClose }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    if (isVisible) {
      setCurrentTestimonial(Math.floor(Math.random() * testimonials.length));
      
      // Auto close after 5 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const testimonial = testimonials[currentTestimonial];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-2xl p-4 sm:p-6 max-w-sm sm:max-w-md w-full mx-2 sm:mx-4 transform animate-pulse">
        <div className="flex justify-between items-start mb-3 sm:mb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center">
                <h4 className="font-bold text-gray-800 mr-2 text-sm sm:text-base">
                  {testimonial.name}, {testimonial.age} anos
                </h4>
                <div className="bg-blue-500 rounded-full p-1">
                  <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-xs text-blue-600 font-medium mr-1 sm:mr-2">✓ Usuária Verificada</span>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
        
        <p className="text-gray-700 mb-3 sm:mb-4 italic text-sm sm:text-base">
          "{testimonial.text}"
        </p>
        
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-2 sm:p-3">
          <p className="text-center font-bold text-green-700 text-xs sm:text-sm">
            ✅ Resultado Verificado: {testimonial.result}
          </p>
        </div>
      </div>
    </div>
  );
};