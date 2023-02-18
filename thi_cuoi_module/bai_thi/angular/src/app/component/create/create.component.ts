import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {BenhAnService} from "../../service/benh-an.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  medicalForm: FormGroup = new FormGroup({})

  constructor(private router: Router,private benhAnService: BenhAnService) { }

  ngOnInit(): void {
  }
  submit() {
    
      this.benhAnService.save(this.medicalForm.value).subscribe( next => {
        alert("Thêm mới thành công")
        this.router.navigateByUrl("")
      }, error => {
      }, () => {
      });


  }
}
