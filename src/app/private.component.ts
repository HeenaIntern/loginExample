/**
 * Created by Heena Patel on 7/11/2017.
 */
import {Component} from '@angular/core';
import {AuthenticationService} from './authentication.service'

@Component({
  selector: 'login-form',
  //selector: 'login',
  providers: [AuthenticationService],
  templateUrl: 'private.component.html'
  // template: `
  //   <div class="container" >
  //     <div class="content">
  //       <span>Congratulations, you have successfully logged in!!</span>
  //       <br />
  //       <a (click)="logout()" routerLink="/home">Click Here to logout</a>
  //     </div>
  //   </div>
  // `
})

export class PrivateComponent {

  constructor(
    private _service:AuthenticationService){}

  ngOnInit(){
    this._service.checkCredentials();
  }

  logout() {
    this._service.logout();
  }
}

