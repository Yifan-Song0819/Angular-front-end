import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showit: boolean = true;
  showMenu: boolean = true;
  title_in_app = "title from parent";

  
  values="";
  onKey(event: any) { // without type info
    this.values = event.target.value;
  }

  c(){
      this.showit = !this.showit;
      console.log(this.showMenu);
  }

  home(){
      this.showMenu = true;
  }
  create(){
      this.showMenu = false;
  }
}
