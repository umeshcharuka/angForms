import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../global.service';

import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { Customer } from '../Customer';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(public GB:GlobalService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getALLdata();

    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      Gender: ['', Validators.required],
      address: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]]
  });
  }


  registerForm: FormGroup;



  getALLdata(){
   
   this.GB.GetALLCustomer().subscribe(

    data=>{
      console.log("data here ",data);
      this.dataarray=data;
      
    },
    err=>{
      window.alert("error occured");
    }
    ,
    ()=>{
      console.log("dataf");

    }

   );


  }

data:Customer;
dataarray=new Array<Customer>();
  onSubmit(myform){
this.data=new Customer();

    console.log("Myformvalue",myform);
    this.data.Id=-1;
    this.data.name=myform.value.name;
    this.data.Gender=myform.value.Gender;
    this.data.Email=myform.value.Email;
    this.data.address=myform.value.address;

    this.GB.saveAllCustomer(this.data).subscribe(

      data=>{
        if(data!=null){
          window.alert("Successfully added");
          this.getALLdata();
        }
      },
      error=>{window.alert("error occured"

      )},
    
    );
    

  }

}
