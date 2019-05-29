
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '../../../node_modules/@angular/core';
import { Inject } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { AppConfig } from '../app.config';
import { Status } from '../_models/status.interface';

@Injectable()

export class StatusesService {

   baseUrl: string;

    constructor(private http: HttpClient,@Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    getAll (): Observable<Status[]> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.get<Status[]>(this.baseUrl + 'api/Statuses', { headers: headers })
    }

    getAllByCategoryId (categoryId): Observable<Status[]> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.get<Status[]>(this.baseUrl + 'api/Statuses/ByCategory/'+ categoryId, { headers: headers })
    }

    getById (id: number): Observable<Status> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.get<Status>(this.baseUrl + 'api/Statuses/' + id, { headers: headers })
    }
    
    create (status: Status): Observable<Status> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.post<Status>(this.baseUrl + 'api/Statuses', JSON.stringify(status), { headers: headers })
    }
    
    delete (id): Observable<any> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.delete<any>(this.baseUrl + 'api/Statuses/' + id, { headers: headers })
    }

    update (status: Status): Observable<any> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.put<any>(this.baseUrl + 'api/Statuses', JSON.stringify(status), { headers: headers })
        console.log("update")
    }


}