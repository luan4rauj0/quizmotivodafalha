import React from 'react';
import { AlertTriangle, Heart, Brain, Zap } from 'lucide-react';
import { UserAnswer } from '../types/quiz';

interface IntermediateDiagnosisProps {
  userAnswers: UserAnswer[];
  onContinue: () => void;
  isDarkMode: boolean;
}

export const IntermediateDiagnosis: React.FC<IntermediateDiagnosisProps> = ({
  userAnswers,
  onContinue,
  isDarkMode
}) => {
  const totalPoints = userAnswers.reduce((sum, answer) => sum + answer.points, 0);
  
  const getDiagnosis = () => {
    // Todos os diagnósticos são preocupantes para criar urgência
    if (totalPoints <= 120) {
      return {
        title: "🚨 DIAGNÓSTICO: Síndrome Metabólica Severa",
        icon: <AlertTriangle className="w-12 h-12 text-red-500" />,
        severity: "CRÍTICO",
        severityColor: "text-red-600 bg-red-100",
        description: "Seu metabolismo está em colapso total. Múltiplos sistemas hormonais estão desregulados.",
        symptoms: [
          "GLP-1 completamente inativo (hormônio da saciedade)",
          "Resistência à insulina severa",
          "Inflamação intestinal crônica bloqueando nutrientes",
          "Cortisol desregulado causando acúmulo de gordura abdominal",
          "Tireoide funcionando em modo de sobrevivência"
        ],
        consequences: [
          "Risco de diabetes tipo 2 em 6-12 meses",
          "Possível síndrome do ovário policístico",
          "Fadiga crônica e depressão",
          "Ganho de peso acelerado (2-3kg por mês)",
          "Problemas cardiovasculares iminentes"
        ],
        urgency: "Intervenção necessária IMEDIATAMENTE"
      };
    } else if (totalPoints <= 160) {
      return {
        title: "⚠️ DIAGNÓSTICO: Disrupção Hormonal Avançada",
        icon: <Brain className="w-12 h-12 text-orange-500" />,
        severity: "SEVERO",
        severityColor: "text-orange-600 bg-orange-100",
        description: "Seus hormônios estão em guerra contra seu corpo. O sistema está falhando.",
        symptoms: [
          "GLP-1 funcionando apenas 20% da capacidade normal",
          "Leptina (hormônio da fome) completamente desregulada",
          "Microbioma intestinal destruído",
          "Metabolismo 40% mais lento que deveria ser",
          "Vício em açúcar controlando suas decisões"
        ],
        consequences: [
          "Compulsão alimentar descontrolada",
          "Ganho de peso mesmo comendo pouco",
          "Ansiedade e mudanças de humor extremas",
          "Insônia e problemas de concentração",
          "Envelhecimento acelerado da pele"
        ],
        urgency: "Janela de reversão: 30-60 dias"
      };
    } else {
      return {
        title: "🔥 DIAGNÓSTICO: Inflamação Metabólica Crônica",
        icon: <Heart className="w-12 h-12 text-yellow-500" />,
        severity: "MODERADO-ALTO",
        severityColor: "text-yellow-600 bg-yellow-100",
        description: "Seu corpo está em estado inflamatório constante, sabotando todos os seus esforços.",
        symptoms: [
          "GLP-1 funcionando 50% abaixo do normal",
          "Inflamação silenciosa bloqueando queima de gordura",
          "Intestino permeável causando toxicidade",
          "Hormônios da tireoide sendo bloqueados",
          "Cortisol elevado mantendo gordura abdominal"
        ],
        consequences: [
          "Efeito platô permanente no peso",
          "Fadiga constante após as refeições",
          "Retenção de líquido e inchaço",
          "Dificuldade para dormir profundamente",
          "Pele opaca e cabelo sem brilho"
        ],
        urgency: "Reversível com protocolo específico"
      };
    }
  };

  const diagnosis = getDiagnosis();

  return (
    <div className={`w-full max-w-3xl mx-auto rounded-2xl shadow-2xl p-6 sm:p-8 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      {/* Header com alerta */}
      <div className="text-center mb-6">
        <div className="mx-auto mb-4 animate-pulse">
          {diagnosis.icon}
        </div>
        <div className={`inline-block px-4 py-2 rounded-full font-bold text-sm mb-3 ${diagnosis.severityColor}`}>
          NÍVEL: {diagnosis.severity}
        </div>
        <h1 className={`text-2xl sm:text-3xl font-bold mb-3 ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        }`}>
          {diagnosis.title}
        </h1>
        <p className={`text-lg ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {diagnosis.description}
        </p>
      </div>

      {/* Pontuação */}
      <div className={`text-center mb-6 p-4 rounded-xl ${
        isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
      }`}>
        <div className="flex items-center justify-center mb-2">
          <Zap className="w-5 h-5 text-blue-500 mr-2" />
          <span className={`font-semibold ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Sua Pontuação Metabólica
          </span>
        </div>
        <div className="text-3xl font-bold text-red-600 mb-1">
          {totalPoints}/300 pontos
        </div>
        <p className="text-sm text-red-600 font-medium">
          ⚠️ Abaixo do limite saudável (250+ pontos)
        </p>
      </div>

      {/* Sintomas identificados */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className={`p-4 rounded-xl ${
          isDarkMode ? 'bg-red-900/20 border border-red-800' : 'bg-red-50 border border-red-200'
        }`}>
          <h3 className="font-bold text-red-700 mb-3 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Sintomas Identificados
          </h3>
          <ul className="space-y-2">
            {diagnosis.symptoms.map((symptom, index) => (
              <li key={index} className="text-sm text-red-600 flex items-start">
                <span className="text-red-500 mr-2">•</span>
                {symptom}
              </li>
            ))}
          </ul>
        </div>

        <div className={`p-4 rounded-xl ${
          isDarkMode ? 'bg-orange-900/20 border border-orange-800' : 'bg-orange-50 border border-orange-200'
        }`}>
          <h3 className="font-bold text-orange-700 mb-3 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Consequências se Não Tratar
          </h3>
          <ul className="space-y-2">
            {diagnosis.consequences.map((consequence, index) => (
              <li key={index} className="text-sm text-orange-600 flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                {consequence}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Urgência */}
      <div className={`p-4 rounded-xl mb-6 border-2 border-red-400 ${
        isDarkMode ? 'bg-red-900/30' : 'bg-red-50'
      }`}>
        <div className="text-center">
          <h3 className="font-bold text-red-700 mb-2 text-lg">
            ⏰ JANELA DE OPORTUNIDADE
          </h3>
          <p className="text-red-600 font-medium">
            {diagnosis.urgency}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <div className={`p-4 rounded-xl mb-4 ${
          isDarkMode ? 'bg-green-900/20' : 'bg-green-50'
        }`}>
          <h3 className="font-bold text-green-700 mb-2">
            ✅ A BOA NOTÍCIA
          </h3>
          <p className="text-green-600 text-sm">
            Existe um protocolo natural específico que pode reverter esse quadro em 30-60 dias.
            Responda mais 5 perguntas para descobrir se você se qualifica para o tratamento.
          </p>
        </div>

        <button
          onClick={onContinue}
          className="w-full bg-gradient-to-r from-red-500 to-orange-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 hover:from-red-600 hover:to-orange-700 transform hover:scale-105 animate-pulse"
        >
          🚨 DESCOBRIR PROTOCOLO DE REVERSÃO AGORA
        </button>

        <p className="text-xs text-gray-500 mt-3">
          ⚠️ Apenas 5 perguntas restantes para acessar o protocolo personalizado
        </p>
      </div>
    </div>
  );
};