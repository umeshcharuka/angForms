import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './Process/dashboard/dashboard.component';
import {LayoutComponent} from './layout/layout.component';




const routes: Routes = [
  
  {path:"",
  component:LayoutComponent,
  data: {
    title: 'Home'
  },
  children: [
    {
      path: 'Process',
      loadChildren: './Process/process.module#ProcessModule'
      
    },
  ]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


 


}
