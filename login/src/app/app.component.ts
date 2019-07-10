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

  onClick(){
      this.showit = !this.showit;
      this.show2 = !this.show2;
  }
}
