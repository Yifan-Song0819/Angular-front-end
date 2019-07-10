import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'; // Navigation to other components

// import {title_in_app} from './app';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {

  @Input() title_in_app: string;

  showMenu: boolean = true;
  showCreate: boolean = false;

  Click(){
      this.showMenu = !this.showMenu;
      this.showCreate = !this.showCreate;
  }

  test(){
      console.log(this.title_in_app);
  }
}
