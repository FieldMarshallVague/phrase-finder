import { Injectable } from '@angular/core';
import { Phrase } from '../models/phrase';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  // say 20%? for names, references, links etc.
  illegalCharacterTolerance = 0.2;
  totalWords: number;


  constructor() { }

  /**
   *
   * @param text Checks for english-ness by looking at characters in words.
   * Pass this the raw text string before converting to base64.
   */
  checkEnglish(text: string) {

    const words = text.split(" ");
    const r = /^[a-zA-Z0-9\s\?\(\)\[\]\,\.\;\:'!"]+$/;
    let i = words.length;
    this.totalWords = words.length;
    let nonEnglishCount = 0;

    while (--i) {
      if (r.test(words[i])) {
        nonEnglishCount++;
      }
    }

    if (nonEnglishCount > (this.totalWords * this.illegalCharacterTolerance)) return false;

    return true;
  }

  getRecurringPhrases(text: string): Array<Phrase> {

    let phrases = this.getPhrases(text);

    return this.getPhraseMatches(phrases, text);
  }

  private getPhrases(text: string): Set<string> {
    // let text = "This is a test, so is this. But this is a test, too.  Is this a test? No, but this is a test.  This is not a test. 1 person said this is a test.";

    // normalise the text, since phrases can turn up mid-sentence.
    text = text.toLowerCase();

    // split text on punctuation
    const sentences = text.replace(/([.?!])\s*(?=[A-Z0-9])/g, "$1|").split("|");

    // console.log(`sentences: ${sentences}`);

    // find matches based on some letters (or letter-number combos, like 'a11y') followed by some punctuation
    let regx = /([A-Za-z0-9]+[ \.,;:()?!]+){4,4}/g;
    let phrases = new Set<string>();
    let phrase;

    // loop through sentences looking for 4-word phrases
    for (let sentence of sentences) {
      // console.log(`sentence: ${sentence}`);

      while ((phrase = regx.exec(sentence)) != null) {

        // found a match, now trim whitespace and punctuation
        let trimmedPhrase = phrase[0].trim().replace(/^([ \.,;:()?!]+)|([ \.,;:()?!]+)$/gm, '');
        // store outer-trimmed phrase (saving internal punctuation)
        phrases.add(trimmedPhrase);

        // find the first word in the match
        let firstWordEnd = /[ \.,;:()?!]+/.exec(phrase[0]);
        // reset the search position to just after the first word in the most recent match
        regx.lastIndex -= (phrase[0].length - firstWordEnd.index);
      }

      // break;  //do once for testing
    }

    console.log(phrases);

    return phrases;

  }

  private getPhraseMatches(phrases: Set<string>, text: string): Array<Phrase>{

    let counter = 0;
    let results = new Array<Phrase>();

    // find number of occurrences of each 4-word phrase
    for (let phrase of phrases) {
      let regx = new RegExp(`${phrase}`, 'g');
      let matches = text.match(regx);
      // console.log(matches);
      if (matches) {
        let output: Phrase = {
          Id: counter++,
          Phrase: phrase,
          Count: matches.length
        }

        results.push(output);
      }
    }

    console.log(results);

    return results;
  }

}
