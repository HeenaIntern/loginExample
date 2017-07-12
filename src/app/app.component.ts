/**
 * Created by Heena Patel on 7/11/2017.
 */
import {Component} from '@angular/core';
import {LoginComponent} from './login.component';
import {PrivateComponent} from './private.component';
//import {directive} from '@angular/core';
import {} from '@angular/router';


@Component({
  selector: 'my-app',
  //directives: [LoginComponent],
  template: `
    <router-outlet></router-outlet>
  `
})

//@directive({selector:''})

export class AppComponent {}
