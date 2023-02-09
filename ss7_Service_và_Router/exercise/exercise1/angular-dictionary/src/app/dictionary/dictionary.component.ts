import { Component, OnInit } from '@angular/core';
import {IWord} from "../interface/iword";
import {DictionaryServiceService} from "../service/dictionary-service.service";
import {Route, Router} from "@angular/router";


@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  article: IWord = {};
  dictionaryList: IWord[]=[];



  constructor(private dictionaryService: DictionaryServiceService, private router:Router) {}

  ngOnInit(): void {
    this.getAll()
  }

  changePageToInfo() {
    for (let i = 0; i <this.dictionaryService.getAll().length ; i++) {
      if(this.dictionaryService.getAll()[i].word == this.article.word){
          this.router.navigate(["/detail",this.article.word])
      }
    }
  }

  getAll(){
    return this.dictionaryList =this.dictionaryService.getAll();
  }
}
