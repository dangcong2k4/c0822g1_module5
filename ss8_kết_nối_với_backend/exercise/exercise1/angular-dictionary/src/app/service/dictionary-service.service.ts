import { Injectable } from '@angular/core';
import {IWord} from "../interface/iword";



@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  dictionaryList: IWord[]=[
    {word: "name",mean: "tên"},
    {word: "apple",mean: "quả táo"},
    {word: "red",mean: "đỏ"},
    {word: "mice",mean: "chuột"},
    {word: "book",mean: "sách"},
  ]

  constructor() { }
  getAll(){
    return this.dictionaryList;
  }
  findByWord(name: string){
    for(let i of this.dictionaryList){
      if(i.word == name){
        return i.mean;
      }
    }
  }
}
