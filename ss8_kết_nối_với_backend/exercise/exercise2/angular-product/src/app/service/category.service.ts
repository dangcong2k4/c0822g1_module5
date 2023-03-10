import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../category";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>("http://localhost:3000/category");
  }
}
