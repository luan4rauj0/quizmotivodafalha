import React from 'react';
import { BarChart3, Users, TrendingUp, Target } from 'lucide-react';

interface AnalyticsData {
  totalUsers: number;
  completionRate: number;
  averageScore: number;
  conversionRate: number;
  popularAnswers: { question: string; answer: string; percentage: number }[];
}

interface AnalyticsDashboardProps {
  data: AnalyticsData;
  isDarkMode: boolean;
}

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ 
  data, 
  isDarkMode 
}) => {
  return (
    <div className={`p-6 rounded-xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } shadow-lg`}>
      <div className="flex items-center mb-6">
        <BarChart3 className={`w-6 h-6 mr-2 ${
          isDarkMode ? 'text-blue-400' : 'text-blue-600'
        }`} />
        <h2 className={`text-xl font-bold ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        }`}>
          📊 Dashboard de Analytics
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className={`p-4 rounded-lg ${
          isDarkMode ? 'bg-gray-700' : 'bg-blue-50'
        }`}>
          <div className="flex items-center mb-2">
            <Users className="w-5 h-5 text-blue-600 mr-2" />
            <span className={`text-sm font-medium ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Total de Usuários
            </span>
          </div>
          <p className={`text-2xl font-bold ${
            isDarkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            {data.totalUsers.toLocaleString()}
          </p>
        </div>

        <div className={`p-4 rounded-lg ${
          isDarkMode ? 'bg-gray-700' : 'bg-green-50'
        }`}>
          <div className="flex items-center mb-2">
            <Target className="w-5 h-5 text-green-600 mr-2" />
            <span className={`text-sm font-medium ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Taxa de Conclusão
            </span>
          </div>
          <p className={`text-2xl font-bold ${
            isDarkMode ? 'text-green-400' : 'text-green-600'
          }`}>
            {data.completionRate}%
          </p>
        </div>

        <div className={`p-4 rounded-lg ${
          isDarkMode ? 'bg-gray-700' : 'bg-purple-50'
        }`}>
          <div className="flex items-center mb-2">
            <TrendingUp className="w-5 h-5 text-purple-600 mr-2" />
            <span className={`text-sm font-medium ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Pontuação Média
            </span>
          </div>
          <p className={`text-2xl font-bold ${
            isDarkMode ? 'text-purple-400' : 'text-purple-600'
          }`}>
            {data.averageScore}
          </p>
        </div>

        <div className={`p-4 rounded-lg ${
          isDarkMode ? 'bg-gray-700' : 'bg-orange-50'
        }`}>
          <div className="flex items-center mb-2">
            <Target className="w-5 h-5 text-orange-600 mr-2" />
            <span className={`text-sm font-medium ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Taxa de Conversão
            </span>
          </div>
          <p className={`text-2xl font-bold ${
            isDarkMode ? 'text-orange-400' : 'text-orange-600'
          }`}>
            {data.conversionRate}%
          </p>
        </div>
      </div>

      <div>
        <h3 className={`text-lg font-semibold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        }`}>
          🔥 Respostas Mais Populares
        </h3>
        
        <div className="space-y-3">
          {data.popularAnswers.map((item, index) => (
            <div key={index} className={`p-3 rounded-lg ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <div className="flex justify-between items-start mb-2">
                <p className={`font-medium text-sm ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  {item.question}
                </p>
                <span className={`text-sm font-bold ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {item.percentage}%
                </span>
              </div>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                "{item.answer}"
              </p>
              <div className={`w-full bg-gray-300 rounded-full h-2 mt-2`}>
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};