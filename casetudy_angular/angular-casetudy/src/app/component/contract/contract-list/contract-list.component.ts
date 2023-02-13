import { Component, OnInit } from '@angular/core';
import {ContractService} from "../../../service/contract.service";
import {Contract} from "../../../model/contract/contract";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contract: Contract[] =[];
  constructor(private contractService:ContractService) {
    this.contractService.getAll().subscribe(next => {
      console.log(next);
      this.contract = next;
    }, error => {

    }, () => {

    });
  }

  ngOnInit(): void {
  }

}
