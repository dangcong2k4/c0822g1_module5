import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {Caculater} from "../model/caculater";


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  cal:Caculater = {
    num1 : 0,
    num2 : 0,
    result : 0};
   newResult: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  simpleCalculator(element1: string, element2: string, operator: string) {
    switch (operator) {
      case '+':
        this.newResult  = "Kết quả là " +  (parseFloat(element1) + parseFloat(element2));
        break;
      case '-':
        this.newResult  = "Kết quả là " + (parseFloat(element1) - parseFloat(element2));
        break;
      case 'x':
        this.newResult = "Kết quả là " + parseFloat(element1) * parseFloat(element2);
        break;
      case '/':
        if(parseFloat(element2) == 0) {
          this.newResult = "Lỗi Không Được Chia Cho 0"
        } else {
          this.newResult = "Kết quả là " + parseFloat(element1) / parseFloat(element2);
        }
        break
    }
  }
}
