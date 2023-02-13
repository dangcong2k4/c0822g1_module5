import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListFacilityComponent} from "./component/facility/list-facility/list-facility.component";
import {BodyComponent} from "./component/body/body.component";
import {CreateFacilityComponent} from "./component/facility/create-facility/create-facility.component";
import {EditFacilityComponent} from "./component/facility/edit-facility/edit-facility.component";
import {ListCustomerComponent} from "./component/customer/list-customer/list-customer.component";
import {ContractListComponent} from "./component/contract/contract-list/contract-list.component";


const routes: Routes = [
  {path: '',pathMatch: 'full',redirectTo: 'home'},
  {path: '',component: BodyComponent},
  {path: 'home',component: BodyComponent},
  {path: 'facility',component: ListFacilityComponent},
  {path: 'createFacility',component: CreateFacilityComponent},
  {path: 'editFacility',component: EditFacilityComponent},
  {path: 'customer',component: ListCustomerComponent},
  {path: 'contract',component: ContractListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

