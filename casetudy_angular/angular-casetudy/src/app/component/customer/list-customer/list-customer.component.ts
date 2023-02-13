import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../service/customer.service";
import {Facility} from "../../../model/facility/facility";
import {Customer} from "../../../model/customer/customer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customer: Customer[] = [];

  constructor(private customerService: CustomerService) {
    this.customerService.getAll().subscribe(next => {
      console.log(next);
      this.customer = next;
    }, error => {

    }, () => {

    });
  }

  ngOnInit(): void {
  }

}
