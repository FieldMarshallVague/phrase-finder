import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhraseFinderComponent } from './phrase-finder/phrase-finder.component';


const routes: Routes = [
  { path: '', component: PhraseFinderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhraseFinderRoutingModule { }
