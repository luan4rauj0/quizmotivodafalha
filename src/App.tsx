import React, { Suspense } from 'react';
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
          <QuizIntro
            title={quizConfig.title}
            subtitle={quizConfig.subtitle}
            totalQuestions={quizConfig.totalQuestions}
            onStart={handleStartQuiz}
          />
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