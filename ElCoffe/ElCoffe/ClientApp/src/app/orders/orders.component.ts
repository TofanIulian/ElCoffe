import { Component, OnInit } from '@angular/core';
import { Order } from '../_models/order.interface';
import { OrdersService } from '../_services/orders.service';
import { NotificationService } from '../_services/notification.service';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { User } from '../_models/user.interface';
import { UsersService } from '../_services/users.service';
import { Status } from '../_models/status.interface';
import { StatusesService } from '../_services/status.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[];

  orderXUser: OrderXUser[] = []
  newOrderXUser: OrderXUser;
  showTable = false;

  statuses: Status[] = []
  statusesNames: string[] = []

  updatedOrder: Order = new Order()



  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'phoneNumber', 'email', 'address', 'details', 'statusId'];
  // displayedColumns: string[] = ['id', 'address', 'details'];
  constructor(private modalService: NgbModal,
    private orderService: OrdersService,
    private userService: UsersService,
    private notificationService: NotificationService,
    private statusService: StatusesService, ) { }

  ngOnInit() {
    this.getAllStatuses()
  }

  getAllStatuses() {
    this.statusService.getAll().subscribe((statuses: Status[]) => {
      this.statuses = statuses;
      console.log(this.statuses)
      this.getAllOrders()
    },
      error => {
        this.notificationService.handleError(error);
      });
  }


  getAllOrders() {
    this.orderXUser = [];
    this.orderService.getAll().subscribe((orders: Order[]) => {
      this.showTable = false;
      this.orders = orders;
      var i = 0
      this.orders.forEach(order => {

        this.userService.getById(order.userId).subscribe((user: User) => {
          
        i++;
          this.newOrderXUser = new OrderXUser();
          this.newOrderXUser.id = order.id
          this.newOrderXUser.address = order.address
          this.newOrderXUser.details = order.details
          this.statuses.forEach(element => {
            if (order.statusId == element.id)
              this.newOrderXUser.status = element
          });
          this.newOrderXUser.firstName = user.firstName
          this.newOrderXUser.lastName = user.lastName
          this.newOrderXUser.phoneNumber = user.phoneNumber
          this.newOrderXUser.email = user.email
          this.newOrderXUser.userId = user.id

          this.orderXUser.push(this.newOrderXUser)
          console.log(this.orderXUser)
          if (i == this.orders.length)
            this.showTable = true;
        },
          error => {
            this.notificationService.handleError(error);
          });

      });
    },
      error => {
        this.notificationService.handleError(error);
      });
  }

  // getOrderById(id){
  //   this.userService.getById(id).subscribe((user: User) => {
  //     this.selectedUser = user;
  //   },
  //     error => {
  //       this.notificationService.handleError(error);
  //     });
  // }

  updateOrder(orderXUser) {
    console.log(orderXUser)
    this.updatedOrder.id = orderXUser.id
    this.updatedOrder.statusId = orderXUser.status.id
    this.updatedOrder.userId = orderXUser.userId
    this.updatedOrder.details = orderXUser.details
    this.updatedOrder.address = orderXUser.address
    console.log(this.updatedOrder)
    this.orderService.update(this.updatedOrder).subscribe((result) => {
      console.log(result);
      this.getAllOrders();
    },
      error => {
        this.notificationService.handleError(error);
      });
  }

}

class OrderXUser {
  id: number;
  address: string;
  details: string;
  firstName: string
  lastName: string;
  phoneNumber: string;
  email: string;
  status: Status;
  userId: number;
}