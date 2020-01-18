import { Component, OnInit } from '@angular/core';
import { PerfectItService } from '../services/perfect-it.service';

@Component({
  selector: 'app-phrase-finder',
  templateUrl: './phrase-finder.component.html',
  styleUrls: ['./phrase-finder.component.scss']
})
export class PhraseFinderComponent implements OnInit {

  file: any;
  base64Text: string;

  constructor(
    private apiService: PerfectItService,
    ) { }

  ngOnInit() {
  }

  async readFile(e) {
    this.file = e.target.files[0];  // because it supports multi-select inputs

    this.base64Text = await this.apiService.convertFileToBase64(this.file) as string; // needs real error handling

    console.log(this.base64Text);

  }

}
