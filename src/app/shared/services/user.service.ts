import { Injectable } from '@angular/core';

import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users:User[] = [
    { name: 'John Doe', email: 'john.doe@email.com' },
    { name: 'Jane Doe', email: 'jane.doe@email.com' }
  ];

  constructor() { }

  getUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.users);
      }, 1000);
    });
  }
}
