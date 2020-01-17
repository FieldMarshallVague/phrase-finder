import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

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

    // say 20%? for names, references, links etc.
    if (nonEnglishCount > (this.totalWords * 0.2)) return false;

    return true;
  }

}
