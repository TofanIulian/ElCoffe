import { Component, OnInit } from '@angular/core';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { ProductsService } from '../_services/product.service';
import { Product } from '../_models/product.interface';
import { NotificationService } from '../_services/notification.service';
import { User } from '../_models/user.interface';
import { CategoriesService } from '../_services/category.service';
import { Category } from '../_models/category.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  products: Product[];
  categories: Category[];
  selectedCategory: Category;
  selectedProduct: Product;
  newProduct: Product =new Product();
  newCategory: Category =new Category();
  currentUser: User;
  currentProducts: Product[] = [];
  constructor(private modalService: NgbModal,
    private productService: ProductsService,
    private categoryService: CategoriesService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.getAllCategories();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  getAllProductsByCategoryId() {
    this.productService.getAllByCategoryId(this.selectedCategory.id).subscribe((products: Product[]) => {
      this.products = products;
      console.log(this.products)
    },
      error => {
        this.notificationService.handleError(error);
      });
  }

  getAllCategories() {
    this.categoryService.getAll().subscribe((categories: Product[]) => {
      this.categories = categories;
      if(categories.length > 0){
        this.selectedCategory = categories[0];
        this.getAllProductsByCategoryId()
      }
      
      console.log(this.categories)
    },
      error => {
        this.notificationService.handleError(error);
      });
  }

  selectCategory(category) {
    this.selectedCategory = category;
    this.getAllProductsByCategoryId()
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
      this.getAllProductsByCategoryId();
    },
      error => {
        this.notificationService.handleError(error);
      });
  }

  createProduct() {
    console.log(this.newProduct)
    this.newProduct.categoryId = this.selectedCategory.id;
    this.productService.create(this.newProduct).subscribe((product: Product) => {
      this.selectedProduct = product;
      this.getAllProductsByCategoryId();
    },
      error => {
        this.notificationService.handleError(error);
      });
  }

  createCategory() {
    console.log(this.newCategory)
    this.categoryService.create(this.newCategory).subscribe((category: Product) => {
      console.log(category)
      this.getAllCategories();
    },
      error => {
        this.notificationService.handleError(error);
      });
  }

  deleteProduct(){
    this.productService.delete(this.selectedProduct.id).subscribe((result) => {
        console.log(result);
      this.getAllProductsByCategoryId();
    },
      error => {
        this.notificationService.handleError(error);
      });
  }
  
  openModal(content) {
    this.modalService.open(content, { centered: true });
  }

  pickProduct(product) {
    console.log(product)
    this.currentProducts = JSON.parse(localStorage.getItem('currentProducts'));
    console.log(this.currentProducts)
    if(!this.currentProducts)
      this.currentProducts = []
    this.currentProducts.push(product);
    localStorage.setItem('currentProducts', JSON.stringify(this.currentProducts));
  }
}
