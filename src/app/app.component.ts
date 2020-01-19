import { Component } from '@angular/core';
import { Item, PerfectItService } from './modules/phrase-finder/services/perfect-it.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private apiService: PerfectItService) {}

  ngOnInit() {
  }

}
