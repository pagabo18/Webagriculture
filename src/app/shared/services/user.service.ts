import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  logflag: boolean = true;
  constructor(private httpClient: HttpClient) {}


  getUsers(): Observable<any> {
    const url = 'http://loclahost:3000/api/users';
    return this.httpClient.get(url);
  }

  postUsers(body: object): Observable<any> {
    console.log('el body', body);
    const url = 'http://loclahost:3000/api/users/login';
    return this.httpClient.post(url, body);
  }
}