import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '../../../node_modules/@angular/core';
import { Inject } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { User } from '../_models/user.interface';
import { AppConfig } from '../app.config';
@Injectable()

export class UsersService {

   baseUrl: string;

    constructor(private http: HttpClient,@Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    login(user: User): Observable<User> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.post<User>(this.baseUrl + 'api/Users/Login', JSON.stringify(user),{ headers: headers })
    }

    register(user: User): Observable<User>{
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.post<User>(this.baseUrl + 'api/Users', JSON.stringify(user),{ headers: headers })
    }

    getAll (): Observable<User[]> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.get<User[]>(this.baseUrl + 'api/Users', { headers: headers })
      }
}