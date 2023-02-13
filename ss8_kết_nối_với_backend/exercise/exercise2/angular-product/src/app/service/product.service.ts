import { Injectable } from '@angular/core';
import {Product} from "../product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:3000/product");
  }
  saveProduct(product: any) {
    return this.httpClient.post("http://localhost:3000/product", product);
  }
  delete(id: number) {
    return this.httpClient.delete("http://localhost:3000/product/"+ id)
  }

  editProduct( product: any) {
    return this.httpClient.put("http://localhost:3000/product/"+product.id , product);
  }

  findById(id: number) {
    return this.httpClient.get("http://localhost:3000/product/"+ id);
  }

  searchName(value: string):Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:3000/product/?name_like="+ value);
  }
}
