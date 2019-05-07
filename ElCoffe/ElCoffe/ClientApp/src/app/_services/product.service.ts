import { Product } from './../_models/product.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '../../../node_modules/@angular/core';
import { Inject } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { AppConfig } from '../app.config';
@Injectable()

export class ProductsService {

   baseUrl: string;

    constructor(private http: HttpClient,@Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    getAll (): Observable<Product[]> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.get<Product[]>(this.baseUrl + 'api/Products', { headers: headers })
    }

    getById (id: number): Observable<Product> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.get<Product>(this.baseUrl + 'api/Products/' + id, { headers: headers })
    }

    getByCategoryId (id: number): Observable<Product[]> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.get<Product[]>(this.baseUrl + 'api/Products/Category/' + id, { headers: headers })
    }
    
    create (product: Product): Observable<Product> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.post<Product>(this.baseUrl + 'api/Products', JSON.stringify(product), { headers: headers })
    }
    
    delete (id): Observable<boolean> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.put<boolean>(this.baseUrl + 'api/Products/' + id, { headers: headers })
    }

    update (product: Product): Observable<Product> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.put<Product>(this.baseUrl + 'api/Products', JSON.stringify(product), { headers: headers })
    }


}