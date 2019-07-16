import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  string_passwd1 = "";
  string_passwd2 = "";
  userForm : FormGroup;



  constructor(private fb: FormBuilder) {}


  ngOnInit(): void{
    this.userForm = this.fb.group({
      userName: ["", [Validators.required]], //initilize ob not using =
      passwd: ["", [Validators.required, Validators.minLength(6)]], //comma
      rePasswd: ["", [Validators.required, Validators.minLength(6)]],
      email: ["", [Validators.required, Validators.pattern('[a-zA-z0-9\.]*@[a-zA-z0-9\.]*')]],
    });
  }



  passwd1(event: any){
    this.string_passwd1 = event.target.value;
  }

  passwd2(event: any){
    this.string_passwd2 = event.target.value;
  }
  //  so the logic of *ngIf:
  // when returns true, it shows the wrong message;
  // when returns false, its not showing;


  // being used for ngIf passwords must be same
  compare() : boolean{
      // console.log(this.string_passwd1 == this.string_passwd2);
      return this.string_passwd1 != this.string_passwd2;
  }



  check_passwds() : boolean{
    return this.string_passwd1 != "" && this.string_passwd2 != "";
  }


  create_account(){
    // if (!this.compare()){
    //     // alert("hahaha");
    // }
    let user: boolean = this.userForm.controls.userName.invalid;
    // let ps1: boolean = this.userForm.controls.passwd.invalid;
    // let ps2: boolean = this.userForm.controls.rePasswd.invalid;
    let em: boolean = this.userForm.controls.email.invalid;


    //check username, passwds same and not empty, email
    if (!user && !this.compare() && !em && this.check_passwds()){
        alert("Account created successful!");
    }
  }
}
