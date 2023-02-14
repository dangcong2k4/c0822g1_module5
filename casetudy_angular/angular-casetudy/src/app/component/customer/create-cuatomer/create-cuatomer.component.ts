import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../../../model/customer/customer-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../service/customer/customer.service";
import {Router} from "@angular/router";
import {CustomerTypeService} from "../../../service/customer/customer-type.service";
import {Customer} from "../../../model/customer/customer";

@Component({
  selector: 'app-create-cuatomer',
  templateUrl: './create-cuatomer.component.html',
  styleUrls: ['./create-cuatomer.component.css']
})
export class CreateCuatomerComponent implements OnInit {

  customerType: CustomerType[] = [];
  customer:Customer={};

  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl("",[Validators.required, Validators.minLength(10)]),
    dateOfBirth: new FormControl("",[Validators.required]),
    gender: new FormControl(""),
    idCard: new FormControl("",[Validators.required, Validators.minLength(12)]),
    phoneNumber: new FormControl("",[Validators.required, Validators.minLength(10)]),
    email: new FormControl("",[Validators.required, Validators.minLength(10),Validators.pattern('^(.+)@(\\S+)$')]),
    address: new FormControl("",[Validators.required, Validators.minLength(10)]),
    customerType: new FormControl(),
  })

  constructor(private customerService: CustomerService,private route: Router, private customerTypeService: CustomerTypeService) {
    this.customerTypeService.getAll().subscribe(next=>{
      this.customerType = next
    })
  }

  ngOnInit(): void {
  }

  add() {
    if(this.customerForm.valid){
      this.customerForm.value.gender = parseInt(this.customerForm.value.gender);
      this.customer=this.customerForm.value;
      this.customerService.save(this.customer).subscribe( next => {
        alert("Thêm mới thành công")
        this.route.navigateByUrl("/customer")
      }, error => {
      }, () => {
      });
    }

  }

}
