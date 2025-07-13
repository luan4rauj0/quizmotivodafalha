import React, { useState, useCallback } from 'react';
import { UserAnswer, LeadData, QuizResult } from '../types/quiz';
import { quizQuestions, quizResults } from '../data/quizConfig';

export const useQuiz = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'quiz' | 'diagnosis' | 'offer' | 'form' | 'result'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [leadData, setLeadData] = useState<LeadData | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [showMicroFeedback, setShowMicroFeedback] = useState(false);
  const [showTestimonial, setShowTestimonial] = useState(false);
  const [eventToAttend, setEventToAttend] = useState<string | undefined>(undefined);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isDiagnosisPoint = currentQuestionIndex === 19; // After question 20
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
  const isLastOfferQuestion = currentQuestionIndex === 24; // Question 25

  const startQuiz = useCallback(() => {
    setCurrentStep('quiz');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedOptions([]);
  }, []);

  const selectOption = useCallback((optionId: string) => {
    const question = quizQuestions[currentQuestionIndex];
    
    if (question.type === 'single') {
      setSelectedOptions([optionId]);
      // Show micro-feedback after selection
      setTimeout(() => setShowMicroFeedback(true), 300);
    } else {
      setSelectedOptions((prev: string[]) => 
        prev.includes(optionId) 
          ? prev.filter((id: string) => id !== optionId)
          : [...prev, optionId]
      );
    }
  }, [currentQuestionIndex]);

  const nextQuestion = useCallback(() => {
    const question = quizQuestions[currentQuestionIndex];
    const points = selectedOptions.reduce((total: number, optionId: string) => {
      const option = question.options.find(opt => opt.id === optionId);
      return total + (option?.points || 0);
    }, 0);

    // Se for a pergunta do evento, salva o evento selecionado
    if (question.id === 'q19_event' && selectedOptions.length > 0) {
      const selectedOption = question.options.find(opt => opt.id === selectedOptions[0]);
      setEventToAttend(selectedOption?.text || undefined);
    }

    const newAnswer: UserAnswer = {
      questionId: question.id,
      selectedOptions,
      points,
      eventToAttend: question.id === 'q19_event' && selectedOptions.length > 0 ? question.options.find(opt => opt.id === selectedOptions[0])?.value : undefined,
    };

    setUserAnswers((prev: UserAnswer[]) => [...prev, newAnswer]);

    // Show testimonial every 5 questions
    if ((currentQuestionIndex + 1) % 5 === 0 && !isLastQuestion) {
      setTimeout(() => setShowTestimonial(true), 1000);
    }

    if (isDiagnosisPoint) {
      setCurrentStep('diagnosis');
    } else if (isLastOfferQuestion) {
      setCurrentStep('form');
    } else {
      setCurrentQuestionIndex((prev: number) => prev + 1);
      setSelectedOptions([]);
      setShowMicroFeedback(false);
    }
  }, [currentQuestionIndex, selectedOptions, isDiagnosisPoint, isLastOfferQuestion]);

  const continueToDiagnosis = useCallback(() => {
    setCurrentStep('offer');
    setCurrentQuestionIndex(23); // Start offer questions (after 3 initial + 20 diagnosis)
    setSelectedOptions([]);
    setShowMicroFeedback(false);
  }, []);

  const previousQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev: number) => prev - 1);
      setUserAnswers((prev: UserAnswer[]) => prev.slice(0, -1));
      setSelectedOptions([]);
      setShowMicroFeedback(false);
    }
  }, [currentQuestionIndex]);

  const submitLeadData = useCallback((data: LeadData) => {
    setLeadData({ ...data, eventToAttend });
    setCurrentStep('result');
  }, [eventToAttend]);

  const getResult = useCallback((): QuizResult => {
    const totalPoints = userAnswers.reduce((total: number, answer: UserAnswer) => total + answer.points, 0);
    
    const result = quizResults.find(
      r => totalPoints >= r.minPoints && totalPoints <= r.maxPoints
    );

    return result || quizResults[0];
  }, [userAnswers]);

  const getTotalPoints = useCallback(() => {
    return userAnswers.reduce((total: number, answer: UserAnswer) => total + answer.points, 0);
  }, [userAnswers]);

  const restart = useCallback(() => {
    setCurrentStep('intro');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setLeadData(null);
    setSelectedOptions([]);
    setShowMicroFeedback(false);
  }, []);

  const closeTestimonial = useCallback(() => {
    setShowTestimonial(false);
  }, []);

  return {
    currentStep,
    currentQuestion,
    currentQuestionIndex,
    userAnswers,
    selectedOptions,
    showMicroFeedback,
    showTestimonial,
    leadData,
    startQuiz,
    selectOption,
    nextQuestion,
    previousQuestion,
    submitLeadData,
    getResult,
    getTotalPoints,
    restart,
    closeTestimonial,
    continueToDiagnosis,
    eventToAttend,
  };
};