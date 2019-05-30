import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '../../../node_modules/@angular/core';
import { Inject } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Order } from '../_models/order.interface';
@Injectable()

export class OrdersService {

    baseUrl: string;

    constructor(private http: HttpClient,@Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    getAll (): Observable<Order[]> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.get<Order[]>(this.baseUrl + 'api/Orders', { headers: headers })
    }

    getAllByCategoryId (categoryId): Observable<Order[]> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.get<Order[]>(this.baseUrl + 'api/Orders/ByCategory/'+ categoryId, { headers: headers })
    }

    getById (id: number): Observable<Order> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.get<Order>(this.baseUrl + 'api/Orders/' + id, { headers: headers })
    }

    getByCategoryId (id: number): Observable<Order[]> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.get<Order[]>(this.baseUrl + 'api/Orders/Category/' + id, { headers: headers })
    }
    
    create (order: Order): Observable<Order> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.post<Order>(this.baseUrl + 'api/Orders', JSON.stringify(order), { headers: headers })
    }
    
    delete (id): Observable<any> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.delete<any>(this.baseUrl + 'api/Orders/' + id, { headers: headers })
    }

    update (order: Order): Observable<any> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.put<any>(this.baseUrl + 'api/Orders', JSON.stringify(order), { headers: headers })
        console.log("update")
    }

}
