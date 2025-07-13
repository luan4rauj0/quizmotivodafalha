export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  type: 'single' | 'multiple';
  microFeedback?: string;
}

export interface QuizOption {
  id: string;
  text: string;
  value: string;
  points?: number;
}

export interface QuizResult {
  id: string;
  title: string;
  description: string;
  minPoints: number;
  maxPoints: number;
  recommendation: string;
}

export interface UserAnswer {
  questionId: string;
  selectedOptions: string[];
  points: number;
  eventToAttend?: string; // Novo campo para armazenar o evento, se aplicável
}

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  eventToAttend?: string; // Novo campo para passar o evento para o resultado
}

export interface DiagnosisResult {
  title: string;
  severity: string;
  description: string;
  symptoms: string[];
  consequences: string[];
  urgency: string;
}
export interface Testimonial {
  name: string;
  text: string;
  result: string;
}