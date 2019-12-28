import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProviderUsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProviderUsersProvider {
  baseUrl: string;
  constructor(public http: HttpClient) {
    console.log('Hello ProviderUsersProvider Provider');
    this.baseUrl = 'https://jsonplaceholder.typicode.com/users'
  }

  getAllUsers(){
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl).subscribe(data => resolve(data), err => reject(err))
    })
  }

  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteUser() {
    return new Promise((resolve, reject) => {
      this.http.delete(this.baseUrl).subscribe(data => resolve(data), err => reject(err))
    })
  }

}
