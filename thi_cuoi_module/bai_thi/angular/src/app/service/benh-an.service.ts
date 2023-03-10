import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MedicalRecord} from "../model/MedicalRecord";

@Injectable({
  providedIn: 'root'
})
export class BenhAnService {

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<MedicalRecord[]> {
    return this.httpClient.get<MedicalRecord[]>("http://localhost:8080/list")
  }

  delete(id: number) {
    return this.httpClient.delete<any>("http://localhost:8080/"+ id)
  }

  findById(id: number) {
    return this.httpClient.get("http://localhost:8080/"+ id);
  }

  edit( benhAn: any) {
    return this.httpClient.put("http://localhost:8080/edit/"+benhAn.id , benhAn);
  }

  save(benhAn: any) {
    return this.httpClient.post("http://localhost:8080/add", benhAn);
  }
}
