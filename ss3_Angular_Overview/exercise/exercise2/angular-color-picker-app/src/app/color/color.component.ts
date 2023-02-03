import { Component, OnInit } from '@angular/core';
import {TextColor} from "../text-color";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  text:TextColor= {
    color: "black"
  }
  constructor() { }

  ngOnInit(): void {
  }
  changeColor(target: any){
    this.text.color = target.value;
  }
}
