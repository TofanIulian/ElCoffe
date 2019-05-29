import { OrdersService } from './../_services/orders.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product.interface';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { ProductsService } from '../_services/product.service';
import { NotificationService } from '../_services/notification.service';
import { Order } from '../_models/order.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products: Product[] = [];
  newOrder: Order = new Order()

  // newOrderXProduct: OrderXProduct = new OrderXProduct()
  
  displayedColumns: string[] = ['price', 'name'];

  constructor(private modalService: NgbModal,
    private productService: ProductsService,
    private orderService: OrdersService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem('currentProducts'));
  }

  sendOrder() {
    this.newOrder.userId = JSON.parse(localStorage.getItem('currentUser')).id;
    if(this.newOrder.address == '')
      this.newOrder.address = JSON.parse(localStorage.getItem('currentUser')).address;

    this.orderService.create(this.newOrder).subscribe((order: Order) => {
      this.newOrder = order;
      this.products.forEach(element => {
        
        this.orderService.create(this.newOrder).subscribe((order: Order) => {
          this.newOrder = order;
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

  // getProductById(id){
  //   this.productService.getById(id).subscribe((product: Product) => {
  //     this.selectedProduct = product;
  //   },
  //     error => {
  //       this.notificationService.handleError(error);
  //     });
  // }

  // updateProduct() {
  //   this.productService.update(this.selectedProduct).subscribe((result) => {
  //     console.log(result);
  //     this.getAllProductsByCategoryId();
  //   },
  //     error => {
  //       this.notificationService.handleError(error);
  //     });
  // }


}
