/**
 * Created by Heena Patel on 7/11/2017.
 */
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
//import {Http} from '@angular/http';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

let users = [
  new User('admin@admin.com','adm9'),
  new User('user1@gmail.com','a23')
];

@Injectable()
export class AuthenticationService {

  constructor(
    private _router: Router,){}

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['home']);
  }

  login(user){
    let authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user",JSON.stringify(authenticatedUser));
      this._router.navigate(['login']);
      return true;
    }
    return false;

  }

  checkCredentials(){
    if (localStorage.getItem("user") === null){
      this._router.navigate(['login']);
    }
  }
}
