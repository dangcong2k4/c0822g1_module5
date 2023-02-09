import { Component, OnInit } from '@angular/core';
import {IWord} from "../interface/iword";
import {ActivatedRoute} from "@angular/router";
import {DictionaryServiceService} from "../service/dictionary-service.service";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionary: IWord= {};
  dictionaryList: IWord[]=[];
  constructor(private activatedRoute: ActivatedRoute, private dictionaryService: DictionaryServiceService ) {
    this.activatedRoute.paramMap.subscribe(next=>{
      const word = next.get("word");
      this.dictionary.mean = this.dictionaryService.findByWord(word);
    })
  }

  ngOnInit(): void {
  }

}
