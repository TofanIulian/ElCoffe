import { Category } from './../_models/category.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '../../../node_modules/@angular/core';
import { Inject } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { AppConfig } from '../app.config';
@Injectable()

export class CategoriesService {

   baseUrl: string;

    constructor(private http: HttpClient,@Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    getAll (): Observable<Category[]> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.get<Category[]>(this.baseUrl + 'api/Categories', { headers: headers })
    }

    getById (id: number): Observable<Category> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.get<Category>(this.baseUrl + 'api/Categories/' + id, { headers: headers })
    }

    getByCategoryId (id: number): Observable<Category[]> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.get<Category[]>(this.baseUrl + 'api/Categories/Category/' + id, { headers: headers })
    }
    
    create (category: Category): Observable<Category> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.post<Category>(this.baseUrl + 'api/Categories', JSON.stringify(category), { headers: headers })
    }
    
    delete (id): Observable<any> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.delete<any>(this.baseUrl + 'api/Categories/' + id, { headers: headers })
    }

    update (category: Category): Observable<any> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.put<any>(this.baseUrl + 'api/Categories', JSON.stringify(category), { headers: headers })
        console.log("update")
    }


}