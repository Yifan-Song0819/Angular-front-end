import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Website';
  showit: boolean = true;

  showMenu: boolean = true;


  title_in_app = "title from parent";

  c(){
      this.showit = !this.showit;

      console.log(this.title);
      console.log(this.showMenu);
  }

  home(){
      this.showMenu = true;
  }

  create(){
      this.showMenu = false;
  }



}
