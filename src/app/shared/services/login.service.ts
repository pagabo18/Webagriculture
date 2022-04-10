import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

    login(credentials: Object): Observable<any>{
      const Url = "http://localhost:3000/api/users/login"
      console.log(credentials);
      return this.httpClient.put(Url,credentials);
    }
  
}
