import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../service/customer/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerTypeService} from "../../../service/customer/customer-type.service";
import {CustomerType} from "../../../model/customer/customer-type";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerType: CustomerType[] =[]
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

  public compareWith(object1: CustomerType, object2: CustomerType): boolean {
    return object1 && object2 ? object1.id === object2.id : object1 === object2;
  }

  constructor(private customerService: CustomerService,
              private  activatedRoute: ActivatedRoute,
              private router: Router,
              private customerTypeService: CustomerTypeService) {
    this.activatedRoute.paramMap.subscribe(next => {
      let id = parseInt(next.get("id"));
      if(id != null){
        customerService.findById(id).subscribe(next=>{
          this.customerForm.patchValue(next)
        })
      }
    })
    customerTypeService.getAll().subscribe(next=>{
      this.customerType = next;
    })
  }

  ngOnInit(): void {
  }

  edit() {
    const customer = this.customerForm.value;
    this.customerService.edit(customer).subscribe(next=>{
      alert('Chỉnh sủa thành công');
      this.router.navigate(['']);
    })
  }
}
