import { OrdersService } from './../_services/orders.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product.interface';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { ProductsService } from '../_services/product.service';
import { NotificationService } from '../_services/notification.service';
import { Order } from '../_models/order.interface';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products: Product[] = [];
  newOrder: Order = new Order()
  totalPrice: number = 0

  // newOrderXProduct: OrderXProduct = new OrderXProduct()
  
  displayedColumns: string[] = ['price', 'name'];

  constructor(private router: Router,
    private modalService: NgbModal,
    private productService: ProductsService,
    private orderService: OrdersService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem('currentProducts'));
    console.log(this.products)
    this.totalPrice = 0
    this.products.forEach(element => {
      this.totalPrice += Number(element.price);
    });
    console.log(this.totalPrice)
  }

  sendOrder() {
    this.newOrder.userId = JSON.parse(localStorage.getItem('currentUser')).id;
    if(this.newOrder.address == null)
      this.newOrder.address = JSON.parse(localStorage.getItem('currentUser')).address;

    console.log(this.newOrder)
    this.orderService.create(this.newOrder).subscribe((order: Order) => {
      this.newOrder = order;

      localStorage.removeItem('currentProducts')
      // this.products.forEach(element => {
        
      //   this.orderService.create(this.newOrder).subscribe((order: Order) => {
      //     this.newOrder = order;
      //   },
      //     error => {
      //       this.notificationService.handleError(error);
      //     });
        
      // });

      this.goToHome
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


  goToHome(){
    this.router.navigate(['/home']);
  }
  
  openModal(content) {
    this.modalService.open(content, { centered: true });
  }
}
