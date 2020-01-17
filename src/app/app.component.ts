import { Component } from '@angular/core';
import { Item, PerfectItService } from './modules/phrase-finder/services/perfect-it.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tech-test';
  items: Array<Item> = [];

  constructor(private apiService: PerfectItService) {}

  ngOnInit() {
    // this.fetchData();
  }

  fetchData() {
    this.apiService.fetch().subscribe(
      (data: Array<Item>) => {
         console.log(data);
         this.items = data;
      }, (err) => {
        console.log(err);
      }
    );
  }

}
