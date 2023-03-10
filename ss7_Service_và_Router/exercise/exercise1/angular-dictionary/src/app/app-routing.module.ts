import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryComponent} from "./dictionary/dictionary.component";
import {DictionaryDetailComponent} from "./dictionary-detail/dictionary-detail.component";
import {ErrorComponent} from "./error/error.component";


const routes: Routes = [
  {path:"", component: DictionaryComponent},
  {path:"detail/:word", component: DictionaryDetailComponent},
  {path:"*", component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
