import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  toggling = 'true';

  constructor() {
  }

  ngOnInit() {
  }

  toggleClick() {
    if (this.toggling === 'true') {
      this.toggling = 'false';
    } else {
      this.toggling = 'true';
    }
  }

}
