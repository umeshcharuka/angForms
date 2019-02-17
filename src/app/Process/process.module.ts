import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessRoutingModule } from './process-routing.module';
import { CustomerComponent } from '../Process/customer/customer.component';
import { DashboardComponent } from '../Process/dashboard/dashboard.component';

import { FormsModule,ReactiveFormsModule }   from '@angular/forms';


@NgModule({
  declarations: [CustomerComponent, DashboardComponent],
  imports: [
    CommonModule,
    ProcessRoutingModule,
    FormsModule,ReactiveFormsModule

    
  ]
})
export class ProcessModule { }
