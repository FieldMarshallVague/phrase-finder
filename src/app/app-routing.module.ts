import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';



const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'phrase-finder', loadChildren: () => import('./modules/phrase-finder/phrase-finder.module').then(m => m.PhraseFinderModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
