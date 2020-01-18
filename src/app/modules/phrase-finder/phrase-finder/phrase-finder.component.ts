import { Component, OnInit } from '@angular/core';
import { PerfectItService } from '../services/perfect-it.service';

@Component({
  selector: 'app-phrase-finder',
  templateUrl: './phrase-finder.component.html',
  styleUrls: ['./phrase-finder.component.scss']
})
export class PhraseFinderComponent implements OnInit {

  file: any;

  constructor(
    private apiService: PerfectItService,
    ) { }

  ngOnInit() {
  }

  readFile(e) {
    this.file = e.target.files[0];  // handle multi-select inputs

    // Example call:
    this.apiService.convertFileToBase64(this.file).then(result => {
      console.log(result);
    });

    // let reader = new FileReader();

    // reader.readAsText(file);

    // reader.onload = () => {
    //   console.log(reader.result);
    //   this.apiService.convertFileToBase64(reader.result);
    // };

    // reader.onerror = function() {
    //   console.log(reader.error);
    // };

  }

}
