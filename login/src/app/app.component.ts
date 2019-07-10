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
  showCreate: boolean = false;

  title_in_app = "title from parent";

  c(){
      this.showit = !this.showit;
      
      console.log(this.title);
      console.log(this.showMenu);
      console.log(this.showCreate);
  }

  receiveEvent($event){
      this.showMenu = $event;
  }

}
