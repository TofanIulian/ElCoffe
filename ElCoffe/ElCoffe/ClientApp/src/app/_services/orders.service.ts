import { HttpClient } from '@angular/common/http';
import { Injectable } from '../../../node_modules/@angular/core';
import { Inject } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Order } from '../_models/order.interface';
@Injectable()

export class OrdersService {

    @Inject('BASE_URL') baseUrl: string

    constructor(private http: HttpClient) {}

    getAll(): Observable<Order[]> {
        return this.http.get<Order[]>(this.baseUrl + 'api/Order/GetAll')
    }  

}