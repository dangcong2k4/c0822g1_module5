import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {BenhAnService} from "../../service/benh-an.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {



  benhAnForm: FormGroup = new FormGroup({
    id: new FormControl(),
    idCard: new FormControl(),
    benhNhan: new FormControl(),
    ngayNhapVien: new FormControl("",[Validators.required]),
    ngayRaVien: new FormControl("",[Validators.required]),
    lyDo: new  FormControl("",[Validators.required]),
    phuongPhap: new  FormControl("",[Validators.required]),
    bacSi: new  FormControl("",[Validators.required,Validators.minLength(5)]),
  })


  id: number;


  constructor(private benhanService: BenhAnService,
  private  activatedRoute: ActivatedRoute,
  private router: Router) {
    this.activatedRoute.paramMap.subscribe(next => {
      let id = parseInt(next.get("id"));
      if(id != null) {
        benhanService.findById(id).subscribe(next => {
          this.benhAnForm.patchValue(next)
        })
      }
    })

  }

  ngOnInit(): void {
  }

  submit() {

      const benhAn = this.benhAnForm.value;
      this.benhanService.edit(benhAn).subscribe(next => {
        alert('Chỉnh sủa thành công');
        this.router.navigate(['']);
      })


  }
}
