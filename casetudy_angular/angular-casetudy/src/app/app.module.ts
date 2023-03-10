import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { BodyComponent } from './component/body/body.component';
import { CreateFacilityComponent } from './component/facility/create-facility/create-facility.component';
import {ListFacilityComponent} from "./component/facility/list-facility/list-facility.component";
import { EditFacilityComponent } from './component/facility/edit-facility/edit-facility.component';
import { ListCustomerComponent } from './component/customer/list-customer/list-customer.component';
import { EditCustomerComponent } from './component/customer/edit-customer/edit-customer.component';
import { CreateCuatomerComponent } from './component/customer/create-cuatomer/create-cuatomer.component';
import { ContractListComponent } from './component/contract/contract-list/contract-list.component';
import { ContractCreateComponent } from './component/contract/contract-create/contract-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    CreateFacilityComponent,
    ListFacilityComponent,
    EditFacilityComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    CreateCuatomerComponent,
    ContractListComponent,
    ContractCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
