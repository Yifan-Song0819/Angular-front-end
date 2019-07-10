import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Website';
  showit: boolean = true;
  show2: boolean = false;

  showMenu: boolean = true;
  showCreate: boolean = false;

  title_in_app = "title from parent";

  c(){
      this.showit = !this.showit;
      this.show2 = !this.show2;
      console.log(this.title);
  }

  // Click(){
  //     this.showMenu = !this.showMenu;
  //     this.showCreate = !this.showCreate;
  // }
}
