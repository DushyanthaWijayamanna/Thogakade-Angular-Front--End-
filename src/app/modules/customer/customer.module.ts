import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { SaveCustomerComponent } from './components/save-customer/save-customer.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { GetCustomerComponent } from './components/get-customer/get-customer.component';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    CustomerComponent,
    SaveCustomerComponent,
    DeleteCustomerComponent,
    GetCustomerComponent,
    GetAllCustomersComponent,
    UpdateCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule
  ]
})
export class CustomerModule { }
