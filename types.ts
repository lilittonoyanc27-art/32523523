export interface OptionItem {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
  hyText: string;
}

export interface Question {
  id: number;
  category: 'pasados' | 'pronombres';
  categoryTitleHy: string;
  categoryTitleEs: string;
  esQuestion: string;
  hyQuestion: string;
  options: OptionItem[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanationHy: string;
  explanationEs: string;
  ruleTag: string;
}

export interface PrizeLevel {
  level: number;
  amount: number;
  formattedAmount: string;
  isMilestone: boolean;
}

export type GameMode = 'classic15' | 'marathon50' | 'pasados' | 'pronombres';

export type LifelineType = 'fiftyFifty' | 'audience' | 'phone' | 'switch';

export interface LifelineState {
  fiftyFifty: boolean;
  audience: boolean;
  phone: boolean;
  switch: boolean;
}

export interface AudienceVote {
  A: number;
  B: number;
  C: number;
  D: number;
}
