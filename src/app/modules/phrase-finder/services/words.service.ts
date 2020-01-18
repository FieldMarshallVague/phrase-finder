import { Injectable } from '@angular/core';

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

}
