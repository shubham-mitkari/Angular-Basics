import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


 
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  username ="";
  address="";
  city="";
  gender="";

  submit(login: NgForm) {

    
    console.log("Success",login);
    console.log(login.value);

    this.username= login.value.username;
    this.address= login.value.address;
    this.city= login.value.city;
    this.gender= login.value.gender;
    

  }
}
