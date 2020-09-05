import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  menuOpened: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    console.log("Toggling Menu")
    this.menuOpened = !this.menuOpened;
  }

}
