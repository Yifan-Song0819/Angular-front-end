import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showHome: boolean = true;
  showMenu: boolean = false;
  showContact: boolean = false;
  title_in_app = "title from parent";




  c(){
      console.log(this.showMenu);
  }

  home(){
      this.showHome = true;
      this.showMenu = false;
      this.showContact = false;
  }
  create(){
      this.showHome = false;
      this.showMenu = true;
      this.showContact = false;
  }

  contact(){
      this.showHome = false;
      this.showMenu = false;
      this.showContact = true;
  }
}
