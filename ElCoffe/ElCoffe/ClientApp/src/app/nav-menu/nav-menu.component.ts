import { Component, OnInit } from '@angular/core';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent implements OnInit {
  isNavbarCollapsed=true;
  user: User = new User();
  register = false;

  constructor(private modalService: NgbModal,
    private userService: UsersService) {}

  ngOnInit() {
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  login() {

    this.userService.getByUsername(this.user.username);
    alert("guci socks coc");
    console.log(this.user.username)
  }

  registerFunc() {
    alert("guci socks coc");
  }
}

class User {
  username?: String;
  password?: String;
}
