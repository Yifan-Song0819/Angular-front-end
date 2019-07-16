import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  userForm : FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void{
    this.userForm = this.fb.group({
      name: ["", [Validators.required]], //initilize ob not using =
      email: ["", [Validators.required, Validators.pattern('[a-zA-z0-9\.]*@[a-zA-z0-9\.]*')]],
    });
  }


  Confirm(){
    console.log(this.userForm.value);
  }
}
