import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../_services/users.service';
import { User } from '../_models/user.interface';
import { NotificationService } from '../_services/notification.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent implements OnInit {
  isNavbarCollapsed = true;
  user: User = new User();
  register = false;
  currentUser: User;

  constructor(private router: Router,
    private modalService: NgbModal,
    private userService: UsersService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  users: User[]
  getall() {
    this.userService.getAll().subscribe((users: User[]) => {
      this.users = users;
      console.log(this.users)
      this.notificationService.success("tofi");
    },
      error => {
        this.notificationService.handleError(error);
      });
  }

  login(modal) {
    console.log(this.user)
    this.user.id = 0;
    this.user.address = "";
    this.user.email = "";
    this.user.firstName = "";
    this.user.lastName = "";
    this.user.phoneNumber = "";
    this.user.isAdmin = false;
    this.user.isCourier = false;
    this.user.isEmployee = false;
    this.userService.login(this.user).subscribe((user: User) => {
      this.currentUser = user;
      this.goToMenu()
      this.notificationService.success("loged In");
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      modal.close('Close click'); 
    },
      error => {
        this.notificationService.handleError(error);
      });

  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/home']);
    this.currentUser = null;
  }

  registerFunc() {
    this.userService.register(this.user).subscribe((user: User) => {
      this.user = user;
      console.log(this.user)
      this.notificationService.success("tofi");
      this.register = false;
    },
      error => {
        this.notificationService.handleError(error);
      });;

  }

  goToMenu(){
    this.router.navigate(['/menu']);
  }

  goToListOfUsers(){
    this.router.navigate(['/users']);
  }

  goToListOfStatuses(){
    this.router.navigate(['/statuses']);
  }

  goToListOfOrders(){
    this.router.navigate(['/orders']);
  }

  goToMyOrder(){
    this.router.navigate(['/order']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }
}



