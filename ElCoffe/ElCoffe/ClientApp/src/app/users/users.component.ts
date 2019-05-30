import { User } from './../_models/user.interface';
import { UsersService } from './../_services/users.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { NotificationService } from '../_services/notification.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  selectedUser: User;
  users: User[];

  displayedColumns: string[] = ['id', 'username', 'firstName', 'lastName', 'phoneNumber', 'email', 'isAdmin', 'isEmployee', 'isCourier'];

  constructor(private modalService: NgbModal,
    private userService: UsersService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAll().subscribe((users: User[]) => {
      this.users = users;
      
      console.log(this.users)
    },
      error => {
        this.notificationService.handleError(error);
      });
  }
  
  getUserById(id){
    this.userService.getById(id).subscribe((user: User) => {
      this.selectedUser = user;
    },
      error => {
        this.notificationService.handleError(error);
      });
  }

  updateUser(user) {
    console.log("up")
    this.userService.update(user).subscribe((result) => {
      console.log(result);
      this.getAllUsers();
    },
      error => {
        this.notificationService.handleError(error);
      });
  }
}
