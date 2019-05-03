import { Component, OnInit } from '@angular/core';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../_services/users.service';
import { User } from '../_models/user.interface';

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

  getall(){
    this.userService.getAll();
  }

  login() {
    console.log(this.user)
    this.user.id = 0;
    this.user.address = "";
    this.user.email = "";
    this.user.firstName = "";
    this.user.lastName = "";
    this.user.phoneNumber = "";
    this.user.admin = false;
    this.user = this.userService.login(this.user);
    console.log(this.user)
  }

  registerFunc() {
    alert("guci socks coc");
  }
}



