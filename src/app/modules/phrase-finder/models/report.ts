import { Phrase } from './phrase';

export interface Report {
  IsEnglish: boolean;
  WordCount: number;
  Phrases: Array<Phrase>;
}
