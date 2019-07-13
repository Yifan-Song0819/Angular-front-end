import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Navigation to other components
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';

// import {title_in_app} from './app';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {

  @Input() title_in_app: string;
  @Input() showMenu: boolean;
  @Input() showCreate: boolean;

  @Output() new_menu = new EventEmitter<boolean>();
  @Output() new_create = new EventEmitter<boolean>();

  userForm:FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void{
    this.userForm = this.fb.group({
      userName: ["", [Validators.required, Validators.minLength(2)]], //initilize ob not using =
      passWord: ["", [Validators.required, Validators.minLength(6)]], //comma
    });
  }


  login(){
    // alert("Log in!");
  }

  test(){
      console.log(this.title_in_app);
  }
}
