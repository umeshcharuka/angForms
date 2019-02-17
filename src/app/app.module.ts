import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutComponent } from './layout/layout.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {GlobalService} from './global.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    NgbModule
   
  ],
  exports:[FormsModule,
    ReactiveFormsModule],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { 



  
}
