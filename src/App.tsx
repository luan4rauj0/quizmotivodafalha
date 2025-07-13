import React, { Suspense, useEffect } from 'react';
import { AdvancedProgressBar } from './components/AdvancedProgressBar';
import { DarkModeToggle } from './components/DarkModeToggle';
import { ScoreDisplay } from './components/ScoreDisplay';
import { ConfettiCelebration } from './components/ConfettiCelebration';
import { QuestionHistory } from './components/QuestionHistory';
import { SocialSharing } from './components/SocialSharing';
import { BadgeSystem } from './components/BadgeSystem';
import { ExitIntentPopup } from './components/ExitIntentPopup';
import { EconomyCalculator } from './components/EconomyCalculator';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { EnhancedQuizQuestion } from './components/EnhancedQuizQuestion';
import { QuizIntro } from './components/QuizIntro';
import { IntermediateDiagnosis } from './components/IntermediateDiagnosis';
import { LeadForm } from './components/LeadForm';
import { QuizResult } from './components/QuizResult';
import { TestimonialPopup } from './components/TestimonialPopup';
import { LiveUserCounter } from './components/LiveUserCounter';
import { DiscountWheel } from './components/DiscountWheel';
import { useQuiz } from './hooks/useQuiz';
import { useDarkMode } from './hooks/useDarkMode';
import { useExitIntent } from './hooks/useExitIntent';
import { useQuizAnalytics } from './hooks/useQuizAnalytics';
import { quizConfig, quizQuestions } from './data/quizConfig';

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { analytics, trackQuizStart, trackQuizCompletion, trackConversion } = useQuizAnalytics();
  
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [hasShared, setHasShared] = React.useState(false);
  const [showAnalytics, setShowAnalytics] = React.useState(false);
  const [showEconomyCalc, setShowEconomyCalc] = React.useState(false);

  // Proteção contra clique direito e seleção de texto - TEMPORARIAMENTE DESABILITADA PARA TESTE
  /*
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const handleSelectStart = (e: Event) => {
      // Permitir seleção em inputs e textareas
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.contentEditable === 'true') {
        return true;
      }
      e.preventDefault();
      return false;
    };

    const handleDragStart = (e: DragEvent) => {
      // Permitir drag em elementos interativos
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        return true;
      }
      e.preventDefault();
      return false;
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);
  */

  const {
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
    setUserAnswers, // agora disponível
  } = useQuiz();

  const { showExitPopup, closeExitPopup } = useExitIntent(currentQuestionIndex);

  const getCurrentStage = () => {
    if (currentQuestionIndex < 3) return 0;
    if (currentQuestionIndex < 6) return 1;
    if (currentQuestionIndex < 10) return 2;
    if (currentQuestionIndex < 15) return 3;
    if (currentQuestionIndex < 20) return 4;
    return 5;
  };

  const handleStartQuiz = () => {
    startQuiz();
    trackQuizStart();
  };

  const handleQuizComplete = () => {
    setShowConfetti(true);
    trackQuizCompletion(userAnswers);
  };

  const handleConversion = () => {
    trackConversion();
  };

  // Faixas de pontuação dos diagnósticos
  const DIAGNOSIS_RANGES = {
    critico: { min: 0, max: 99 },
    severo: { min: 100, max: 149 },
    moderado: { min: 150, max: 249 },
    otimo: { min: 250, max: 9999 },
  };

  function getOptionByRank(question: any, rank: 'min' | 'second' | 'middle' | 'max') {
    if (question.type === 'slider') {
      if (rank === 'min') return question.min;
      if (rank === 'second') return Math.round(question.min + (question.max - question.min) * 0.25);
      if (rank === 'middle') return Math.round(question.min + (question.max - question.min) * 0.5);
      if (rank === 'max') return question.max;
    }
    let sorted = [...question.options].sort((a, b) => (a.points || 0) - (b.points || 0));
    if (rank === 'min') return [sorted[0].id];
    if (rank === 'second') return [sorted[1]?.id || sorted[0].id];
    if (rank === 'middle') return [sorted[Math.floor(sorted.length / 2)].id];
    if (rank === 'max') return [sorted[sorted.length - 1].id];
    return [sorted[0].id];
  }

  async function autoFillQuiz(diagnosis: string) {
    let points = 0;
    if (diagnosis === 'critico') points = 50;
    else if (diagnosis === 'severo') points = 120;
    else if (diagnosis === 'moderado') points = 200;
    else if (diagnosis === 'otimo') points = 300;
    // Simula um array de respostas com a pontuação desejada
    setUserAnswers([
      { questionId: 'simulado', selectedOptions: ['sim'], points }
    ]);
    await sleep(100);
    submitLeadData({ name: diagnosis + ' Teste', email: diagnosis + '@test.com', phone: '0000-0000' });
  }

  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 relative ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${isDarkMode ? 'ffffff' : '000000'}' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
      
      {currentStep === 'quiz' && (
        <ScoreDisplay 
          currentScore={getTotalPoints()} 
          maxPossibleScore={300} 
          isDarkMode={isDarkMode}
        />
      )}
      
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4">
        
        {currentStep === 'intro' && (
          <>
            <QuizIntro
              title={quizConfig.title}
              subtitle={quizConfig.subtitle}
              totalQuestions={quizConfig.totalQuestions}
              onStart={handleStartQuiz}
            />
            {/* Botões de teste para cada diagnóstico REMOVIDOS */}
          </>
        )}

        {(currentStep === 'quiz' || currentStep === 'offer') && (
          <div>
            <LiveUserCounter />
            <AdvancedProgressBar 
              current={currentQuestionIndex + 1}
              total={quizQuestions.length}
              currentStage={getCurrentStage()}
              isDarkMode={isDarkMode}
            />
            
            <EnhancedQuizQuestion
              question={currentQuestion}
              selectedOptions={selectedOptions}
              onOptionSelect={selectOption}
              onNext={currentStep === 'offer' && currentQuestionIndex === quizQuestions.length - 1 ? handleQuizComplete : nextQuestion}
              onPrevious={currentQuestionIndex > 0 ? previousQuestion : undefined}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={quizQuestions.length}
              showMicroFeedback={showMicroFeedback}
              isDarkMode={isDarkMode}
              canGoBack={currentQuestionIndex > 0}
            />
          </div>
        )}

        {currentStep === 'diagnosis' && (
          <div className="space-y-6">
            <IntermediateDiagnosis
              userAnswers={userAnswers}
              onContinue={continueToDiagnosis}
              isDarkMode={isDarkMode}
            />
          </div>
        )}
        {currentStep === 'form' && (
          <LeadForm onSubmit={submitLeadData} />
        )}

        {currentStep === 'result' && leadData && (
          <div className="space-y-6">
            <Suspense fallback={<div>Carregando badges...</div>}>
              <BadgeSystem 
                userAnswers={userAnswers}
                quizCompleted={true}
                shared={hasShared}
                isDarkMode={isDarkMode}
              />
            </Suspense>
            
            <QuizResult
              result={getResult()}
              totalPoints={getTotalPoints()}
              userName={leadData.name}
              onRestart={restart}
              eventToAttend={leadData.eventToAttend}
              isDarkMode={isDarkMode}
              userAnswers={userAnswers}
            />
            
            <Suspense fallback={<div>Carregando social...</div>}>
              <SocialSharing 
                result={getResult()}
                userName={leadData.name}
                totalPoints={getTotalPoints()}
                isDarkMode={isDarkMode}
              />
            </Suspense>
            
            <div className="space-y-4">
                <button
                  onClick={() => setShowAnalytics(!showAnalytics)}
                  className={`w-full p-3 rounded-xl font-semibold transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-700 text-white hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  📊 {showAnalytics ? 'Ocultar' : 'Ver'} Analytics
                </button>
                
                {showAnalytics && (
                  <Suspense fallback={<div>Carregando analytics...</div>}>
                    <AnalyticsDashboard data={analytics} isDarkMode={isDarkMode} />
                  </Suspense>
                )}
              </div>
          </div>
        )}
        
        <Suspense fallback={null}>
          <TestimonialPopup 
            isVisible={showTestimonial} 
            onClose={closeTestimonial} 
          />
        </Suspense>
        
        <Suspense fallback={null}>
          <ConfettiCelebration 
            isVisible={showConfetti}
            onComplete={() => setShowConfetti(false)}
          />
        </Suspense>
        
        {showExitPopup && currentStep !== 'result' && (
          <ExitIntentPopup 
            onClose={closeExitPopup}
            onAccept={handleConversion}
            isDarkMode={isDarkMode}
          />
        )}
      </div>
    </div>
  );
}

export default App;