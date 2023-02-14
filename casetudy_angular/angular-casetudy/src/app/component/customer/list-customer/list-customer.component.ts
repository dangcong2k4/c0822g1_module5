import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../service/customer/customer.service";
import {Facility} from "../../../model/facility/facility";
import {Customer} from "../../../model/customer/customer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customer: Customer[] = [];
  item: Customer = {};
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



  delete(id: string) {
    if (id != null) {
      // console.log(this.item.id);
      this.customerService.delete(this.item.id).subscribe(next => {
        alert("xóa thành công")
        this.getAll()
      }, error => {
      }, () => {
      });
    }
  }

  private getAll() {
    this.customerService.getAll().subscribe(data => {
      console.log(data)
      this.customer = data;
    })
  }
}
