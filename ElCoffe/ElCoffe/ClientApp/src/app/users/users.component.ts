import { User } from './../_models/user.interface';
import { UsersService } from './../_services/users.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { NotificationService } from '../_services/notification.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

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
