import { Component, OnInit } from '@angular/core';
import { PerfectItService } from '../services/perfect-it.service';
import { DraftModel } from '../models/draft';
import { WordsService } from '../services/words.service';
import { DraftTextModel } from '../models/draft-text';
import { Phrase } from '../models/phrase';

@Component({
  selector: 'app-phrase-finder',
  templateUrl: './phrase-finder.component.html',
  styleUrls: ['./phrase-finder.component.scss']
})
export class PhraseFinderComponent implements OnInit {

  file: any;
  base64Text: string;

  draftModel: DraftModel;
  draftText: DraftTextModel;

  englishCheck: any;

  phrases: Array<Phrase>;

  constructor(
    private apiService: PerfectItService,
    private wordService: WordsService
  ) { }

  ngOnInit() {
  }

  clearVars() {
    this.base64Text = null;
    this.draftModel = null;
    this.draftText = null;
    this.englishCheck = null;
    this.phrases = null;
  }

  async readFile(e) {
    this.file = e.target.files[0];  // because it supports multi-select inputs

    this.clearVars();

    let tmpString = await this.apiService.convertFileToBase64(this.file) as string; // needs real error handling

    this.base64Text = tmpString.replace("data:text/plain;base64,", "");
    console.log(this.base64Text);

  }

  analyseText() {

    this.apiService.postDraft(this.base64Text).subscribe(
      (data: DraftModel) => {
        console.log(data);
        this.draftModel = data;
      }, (err) => {
        console.log(err);
      }
    );
  }

  getDraft(id: number = 1) {

    this.apiService.getDraft(id).subscribe(
      (data: DraftModel) => {
        console.log(data);
        this.draftModel = data;
      }, (err) => {
        console.log(err);
      }
    );
  }

  checkIsEnglish() {
    console.log(this.draftModel);
    this.apiService.getDraftText(this.draftModel.id).subscribe(
      (data: DraftTextModel) => {
        console.log(data);
        this.draftText = data;
        this.englishCheck = this.wordService.checkEnglish(this.draftText.text);


      }, (err) => {
        console.log(err);
      }
    );
  }

  getRecurringPhrases() {

    this.wordService.getRecurringPhrases(this.draftText.text).subscribe(
      (data: Array<Phrase>) => {
        console.log(data);
        this.phrases = data;
      }, (err) => {
        // todo: throw actual errors from observables
        console.log(err);
      }
    );

  }

}
