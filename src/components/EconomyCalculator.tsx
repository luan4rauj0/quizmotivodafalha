import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingDown } from 'lucide-react';

interface EconomyCalculatorProps {
  isDarkMode: boolean;
}

interface Treatment {
  name: string;
  monthly: number;
  annual: number;
  isOneTime?: boolean;
}

export const EconomyCalculator: React.FC<EconomyCalculatorProps> = ({ isDarkMode }) => {
  const [selectedTreatment, setSelectedTreatment] = useState('ozempic');

  const treatments: Record<string, Treatment> = {
    ozempic: { name: 'Ozempic (Semaglutida)', monthly: 900, annual: 10800 },
    mounjaro: { name: 'Mounjaro (Tirzepatida)', monthly: 2200, annual: 26400 },
    saxenda: { name: 'Saxenda (Liraglutida)', monthly: 1400, annual: 16800 },
    bariatrica: { name: 'Cirurgia Bariátrica', monthly: 0, annual: 32500, isOneTime: true },
    lipo: { name: 'Lipoaspiração / Lipo HD', monthly: 0, annual: 25000, isOneTime: true },
    criolipolise: { name: 'Criolipólise', monthly: 1500, annual: 9000 },
    radiofrequencia: { name: 'Ultrassom / Radiofrequência', monthly: 900, annual: 10800 },
    termogenicos: { name: 'Termogênicos / Inibidores', monthly: 300, annual: 3600 },
    medicos: { name: 'Endocrinologista + Nutricionista', monthly: 850, annual: 10200 }
  };

  const currentTreatment = treatments[selectedTreatment];
  const protocolCost = 97; // One-time cost of our protocol
  
  const yearlySavings = currentTreatment.annual - protocolCost;

  return (
    <div className={`p-4 rounded-xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } shadow-lg border-2 border-green-200`}>
      <div className="flex items-center mb-4">
        <Calculator className="w-6 h-6 text-green-600 mr-2" />
        <h3 className={`text-lg font-semibold ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        }`}>
          💰 Calculadora de Economia
        </h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className={`block text-sm font-medium mb-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            💡 Clique em um tratamento para simular sua economia:
          </label>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
            {Object.entries(treatments).map(([key, treatment]) => (
              <button
                key={key}
                onClick={() => {
                  console.log('Clicou em:', key);
                  setSelectedTreatment(key);
                }}
                type="button"
                className={`p-3 rounded-lg border-2 text-left cursor-pointer ${
                  selectedTreatment === key
                    ? 'border-green-500 bg-green-50'
                    : isDarkMode
                      ? 'border-gray-600 bg-gray-700'
                      : 'border-gray-300 bg-white'
                }`}
                style={{ 
                  pointerEvents: 'auto',
                  zIndex: 1000,
                  position: 'relative'
                }}
              >
                <div className={`font-semibold text-sm mb-1 ${
                  selectedTreatment === key
                    ? 'text-green-700'
                    : isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {treatment.name}
                </div>
                <div className={`text-xs ${
                  selectedTreatment === key
                    ? 'text-green-600'
                    : isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  R$ {treatment.isOneTime ? treatment.annual.toLocaleString() + ' (único)' : treatment.monthly + '/mês'}
                </div>
                {selectedTreatment === key && (
                  <div className="text-green-600 text-xs mt-1 font-medium">
                    ✓ Selecionado
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className={`p-3 rounded-lg text-sm ${
          isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-blue-50 text-blue-700'
        }`}>
          <div className="flex items-center mb-1">
            <span className="font-semibold">💡 Informações sobre {currentTreatment.name}:</span>
          </div>
          {selectedTreatment === 'ozempic' && (
            <p>1 caneta por mês (injeção semanal). Alguns pacientes usam por tempo indeterminado.</p>
          )}
          {selectedTreatment === 'mounjaro' && (
            <p>Efeito similar ao Ozempic, mas mais caro e potente.</p>
          )}
          {selectedTreatment === 'saxenda' && (
            <p>Injeção diária. Menos eficaz que Mounjaro/Ozempic.</p>
          )}
          {selectedTreatment === 'bariatrica' && (
            <p>Custo inclui hospital, equipe médica e exames. Exige acompanhamento contínuo.</p>
          )}
          {selectedTreatment === 'lipo' && (
            <p>Não trata obesidade — apenas modela gordura localizada.</p>
          )}
          {selectedTreatment === 'criolipolise' && (
            <p>Recomendado em áreas específicas. Resultados graduais.</p>
          )}
          {selectedTreatment === 'radiofrequencia' && (
            <p>Complementar ao emagrecimento; combate flacidez.</p>
          )}
          {selectedTreatment === 'termogenicos' && (
            <p>Pode ser usado junto com acompanhamento médico.</p>
          )}
          {selectedTreatment === 'medicos' && (
            <p>Essencial para qualquer abordagem segura.</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className={`p-3 rounded-lg ${
            isDarkMode ? 'bg-gray-700' : 'bg-red-50'
          }`}>
            <h4 className={`font-semibold text-sm mb-1 ${
              isDarkMode ? 'text-red-400' : 'text-red-700'
            }`}>
              {currentTreatment.name}
            </h4>
            <p className={`text-lg font-bold ${
              isDarkMode ? 'text-red-300' : 'text-red-600'
            }`}>
              R$ {currentTreatment.annual.toLocaleString()}{currentTreatment.isOneTime ? ' (único)' : '/ano'}
            </p>
          </div>

          <div className={`p-3 rounded-lg ${
            isDarkMode ? 'bg-gray-700' : 'bg-green-50'
          }`}>
            <h4 className={`font-semibold text-sm mb-1 ${
              isDarkMode ? 'text-green-400' : 'text-green-700'
            }`}>
              Nosso Protocolo
            </h4>
            <p className={`text-lg font-bold ${
              isDarkMode ? 'text-green-300' : 'text-green-600'
            }`}>
              R$ 97 (único)
            </p>
          </div>
        </div>

        <div className={`p-4 rounded-lg border-2 border-green-300 ${
          isDarkMode ? 'bg-green-900' : 'bg-green-50'
        }`}>
          <div className="flex items-center mb-2">
            <TrendingDown className="w-5 h-5 text-green-600 mr-2" />
            <h4 className={`font-bold ${
              isDarkMode ? 'text-green-300' : 'text-green-700'
            }`}>
              Sua Economia Total
            </h4>
          </div>
          <p className={`text-2xl font-bold ${
            isDarkMode ? 'text-green-200' : 'text-green-600'
          }`}>
            R$ {(yearlySavings).toLocaleString()}
          </p>
          <p className={`text-sm ${
            isDarkMode ? 'text-green-400' : 'text-green-600'
          }`}>
            {currentTreatment.isOneTime ? 'comparado ao procedimento' : 'no primeiro ano'}
          </p>
        </div>

        <div className={`text-center text-sm ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          💡 <strong>Dica:</strong> Com nossa solução natural, você economiza mais de 90% 
          e ainda evita efeitos colaterais!
        </div>
      </div>
    </div>
  );
};