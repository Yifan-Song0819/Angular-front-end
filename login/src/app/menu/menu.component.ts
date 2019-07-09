import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Navigation to other components


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoCreate(){
      this.router.navigate(['/create']);
  }
}
