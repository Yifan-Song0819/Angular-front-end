import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'; // Navigation to other components

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

  Click(){
      this.showMenu = !this.showMenu;
      this.showCreate = !this.showCreate;
      console.log("menu gogogo");
      // console.log(this.showMenu);
      // console.log(this.showCreate);
      this.new_menu.emit(this.showMenu);
      // this.new_create.emit(this.new_create);
  }

  test(){
      console.log(this.title_in_app);
  }
}
