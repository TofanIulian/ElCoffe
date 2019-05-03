import { HttpClient } from '@angular/common/http';
import { Injectable } from '../../../node_modules/@angular/core';
import { Inject } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { User } from '../_models/user.interface';
@Injectable()

export class UsersService {

  @Inject('BASE_URL') baseUrl: string;

    constructor(private http: HttpClient) {}

    getByUsername(username:String): Observable<User[]> {
        return this.http.get<User[]>(this.baseUrl + 'api/Users/GetByUsername'+username)
    }  

}
