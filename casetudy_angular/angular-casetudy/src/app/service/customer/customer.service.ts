import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../../model/customer/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>("http://localhost:3000/customer");
  }

  save(customer: any) {
    return this.httpClient.post("http://localhost:3000/customer", customer);
  }

  delete(id: string) {
      return this.httpClient.delete("http://localhost:3000/customer/"+id)
  }

  edit(customer: any) {
    return this.httpClient.put("http://localhost:3000/customer/"+customer.id , customer);
  }

  findById(id: number) {
    return this.httpClient.get("http://localhost:3000/customer/"+ id);
  }
}
