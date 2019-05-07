import { Component, OnInit } from '@angular/core';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { ProductsService } from '../_services/product.service';
import { Product } from '../_models/product.interface';
import { NotificationService } from '../_services/notification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;
  newProduct: Product;
  constructor(private modalService: NgbModal,
    private productService: ProductsService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAll().subscribe((products: Product[]) => {
      this.products = products;
    },
      error => {
        this.notificationService.handleError(error);
      });
  }

  getProductById(id){
    this.productService.getById(id).subscribe((product: Product) => {
      this.selectedProduct = product;
    },
      error => {
        this.notificationService.handleError(error);
      });
  }

  updateProduct() {
    this.productService.update(this.selectedProduct).subscribe((result) => {
      console.log(result);
      this.getAllProducts();
    },
      error => {
        this.notificationService.handleError(error);
      });
  }

  createProduct() {
    this.productService.update(this.newProduct).subscribe((product: Product) => {
      this.selectedProduct = product;
      this.getAllProducts();
    },
      error => {
        this.notificationService.handleError(error);
      });
  }

  deleteProduct(){
    this.productService.delete(this.selectedProduct.id).subscribe((result) => {
        console.log(result);
      this.getAllProducts();
    },
      error => {
        this.notificationService.handleError(error);
      });
  }
  
  openModal(content) {
    this.modalService.open(content, { centered: true });
  }
}
