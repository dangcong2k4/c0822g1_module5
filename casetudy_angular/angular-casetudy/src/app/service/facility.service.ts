import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facility} from "../model/facility/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>("http://localhost:3000/facility");
  }

}
