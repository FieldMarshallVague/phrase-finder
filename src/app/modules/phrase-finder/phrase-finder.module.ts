import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule, MatCardModule, MatButtonModule } from  '@angular/material';

import { PhraseFinderRoutingModule } from './phrase-finder-routing.module';
import { PhraseFinderComponent } from './phrase-finder/phrase-finder.component';


@NgModule({
  declarations: [PhraseFinderComponent],
  imports: [
    CommonModule,
    PhraseFinderRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class PhraseFinderModule { }
