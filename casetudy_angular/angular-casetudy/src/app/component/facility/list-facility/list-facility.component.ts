import { Component, OnInit } from '@angular/core';
import {FacilityService} from "../../../service/facility.service";
import {Facility} from "../../../model/facility/facility";

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  facility: Facility[] = [];
  constructor(private facilityService: FacilityService) {
    this.facilityService.getAll().subscribe(next => {
      console.log(next);
      this.facility = next;
    }, error => {

    }, () => {

    });

  }



  ngOnInit(): void {
  }

}
