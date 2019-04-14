import { Component, OnInit } from '@angular/core';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent implements OnInit {
  isNavbarCollapsed=true;
  user: User = new User();
  register = false;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  login() {
    alert("guci socks coc");
  }

  registerFunc() {
    alert("guci socks coc");
  }
}

class User {
  username?: String;
  password?: String;
}