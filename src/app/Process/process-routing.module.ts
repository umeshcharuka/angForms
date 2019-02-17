import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { CustomerComponent } from '../Process/customer/customer.component';



const routes: Routes = [
  { path:"",

  data: {
      title: "ProcessData"
  },
  
  children: [

    {
      path:"Customer",
      component:CustomerComponent

    }
  ] }
  


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessRoutingModule { }
