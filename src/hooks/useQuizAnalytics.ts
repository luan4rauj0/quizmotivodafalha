import { useState, useCallback } from 'react';
import { UserAnswer } from '../types/quiz';

interface AnalyticsData {
  totalUsers: number;
  completionRate: number;
  averageScore: number;
  conversionRate: number;
  popularAnswers: { question: string; answer: string; percentage: number }[];
}

export const useQuizAnalytics = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalUsers: 15847,
    completionRate: 78.5,
    averageScore: 245,
    conversionRate: 23.4,
    popularAnswers: [
      {
        question: "Qual ciclo mais parece te aprisionar?",
        answer: "Eu faço tudo certo mas nada muda e me sinto estagnada",
        percentage: 67
      },
      {
        question: "O que mais te irrita em relação à fome?",
        answer: "Eu nunca me sinto cheia de verdade",
        percentage: 54
      },
      {
        question: "Como estão seus níveis de energia ao longo do dia?",
        answer: "Eu despenco depois das refeições",
        percentage: 71
      }
    ]
  });

  const trackQuizStart = useCallback(() => {
    setAnalytics(prev => ({
      ...prev,
      totalUsers: prev.totalUsers + 1
    }));
  }, []);

  const trackQuizCompletion = useCallback((userAnswers: UserAnswer[]) => {
    const totalScore = userAnswers.reduce((sum, answer) => sum + answer.points, 0);
    
    setAnalytics(prev => ({
      ...prev,
      averageScore: Math.round((prev.averageScore + totalScore) / 2)
    }));
  }, []);

  const trackConversion = useCallback(() => {
    setAnalytics(prev => ({
      ...prev,
      conversionRate: prev.conversionRate + 0.1
    }));
  }, []);

  return {
    analytics,
    trackQuizStart,
    trackQuizCompletion,
    trackConversion
  };
};