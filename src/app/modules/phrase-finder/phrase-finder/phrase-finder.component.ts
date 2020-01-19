import { Component, OnInit } from '@angular/core';
import { PerfectItService } from '../services/perfect-it.service';
import { DraftModel } from '../models/draft';

@Component({
  selector: 'app-phrase-finder',
  templateUrl: './phrase-finder.component.html',
  styleUrls: ['./phrase-finder.component.scss']
})
export class PhraseFinderComponent implements OnInit {

  file: any;
  base64Text: string;

  draftModel: DraftModel;

  constructor(
    private apiService: PerfectItService,
    ) { }

  ngOnInit() {
  }

  async readFile(e) {
    this.file = e.target.files[0];  // because it supports multi-select inputs

    let tmpString = await this.apiService.convertFileToBase64(this.file) as string; // needs real error handling

    this.base64Text = tmpString.replace("data:text/plain;base64,", "");
    console.log(this.base64Text);

  }

  analyseText(){

    this.apiService.postDraft(this.base64Text).subscribe(
      (data: DraftModel) => {
         console.log(data);
         this.draftModel = data;
      }, (err) => {
        console.log(err);
      }
    );
  }

  getDraft(id: number = 1){

    this.apiService.getDraft(id).subscribe(
      (data: DraftModel) => {
         console.log(data);
         this.draftModel = data;
      }, (err) => {
        console.log(err);
      }
    );
  }

}
