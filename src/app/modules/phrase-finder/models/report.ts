import { Phrase } from './phrase';

export interface Report {
  isEnglish: boolean;
  wordCount: number;
  phrases: Array<Phrase>;
}
