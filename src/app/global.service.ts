import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer } from './Process/Customer';



@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(public http:HttpClient ) { }



  PrimaryAPI="http://localhost:9999/";

  

  GetALLCustomer():Observable<any>{
 
    var time = new Date();
 
    let url=`${this.PrimaryAPI}/Customer/Get?&tsp=${time}`;
    return this.http.get<any>(url);




  }


  saveAllCustomer(data:Customer):Observable<any>{
  return  this.http.post(`${this.PrimaryAPI}Customer/Save`,data);




  }
}
