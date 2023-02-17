import { Component, OnInit } from '@angular/core';
import {BenhAnService} from "../../service/benh-an.service";
import {MedicalRecord} from "../../model/MedicalRecord";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  benhAn: MedicalRecord[] = [];
  item: MedicalRecord = {};

  constructor (private benhAnService: BenhAnService) {
    this.benhAnService.getAll().subscribe(next => {
      console.log(next);
      this.benhAn = next
    }, error => {
    }, () => {
    });
  }

  ngOnInit (): void {
  }

  delete(id: number) {
    if (id != null) {
      this.benhAnService.delete(this.item.id).subscribe(next => {
        alert("xóa thành công")
        this.getAll()
      }, error => {
      }, () => {
      });
    }
  }

  private getAll() {
    this.benhAnService.getAll().subscribe(data => {
      console.log(data)
      this.benhAn = data;
    })
  }
}

