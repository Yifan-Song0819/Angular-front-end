import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  userForm:FormGroup;
  constructor(private fb: FormBuilder) {}


  ngOnInit(): void{
    this.userForm = this.fb.group({
      userName: ["", [Validators.required]], //initilize ob not using =
      passwd: ["", [Validators.required, Validators.minLength(6)]], //comma
      email: ["", [Validators.required, Validators.pattern('[a-zA-z0-9]*@[a-zA-z0-9]*')]],
    });
  }

}
