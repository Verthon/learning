//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";


import { User } from '../model/user.interface';
import { USER_LIST } from '../mocks/user.mock';
 /*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

  constructor(/*public http: HttpClient*/) {
    console.log('Hello GithubServiceProvider Provider');
  }

  mockGetUserInfo(username: string): Observable<User>{
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }

}
