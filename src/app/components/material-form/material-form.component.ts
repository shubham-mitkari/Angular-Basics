import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.scss']
})
export class MaterialFormComponent {
  isShown: boolean = false;
  username="";
  address="";
  city="";
  gender="";
  genderselected=""

  submit(login: NgForm) {

    
    console.log("Success",login);
    console.log(login.value);

    this.username= login.value.username;
    this.address= login.value.address;
    this.city= login.value.city;
    this.gender= login.value.gender;
    

  }
  
}
