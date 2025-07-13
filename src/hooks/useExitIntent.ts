import { useState, useEffect, useCallback } from 'react';

export const useExitIntent = (currentQuestionIndex: number = 0) => {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Only trigger if mouse leaves from the top of the page AND we're in final stages (question 20+)
    if (e.clientY <= 0 && !hasShownPopup && currentQuestionIndex >= 22) {
      setShowExitPopup(true);
      setHasShownPopup(true);
    }
  }, [hasShownPopup, currentQuestionIndex]);

  useEffect(() => {
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const closeExitPopup = useCallback(() => {
    setShowExitPopup(false);
  }, []);

  return {
    showExitPopup,
    closeExitPopup
  };
};