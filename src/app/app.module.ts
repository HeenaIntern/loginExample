import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrivateComponent } from './private.component';
import { LoginComponent } from './login.component';
import {AuthenticationService} from './authentication.service'

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// const appRoutes: Routes = [
//   { path: 'localhost:4200/home', component: PrivateComponent },
//   { path: 'localhost4200/login', component: LoginComponent }
// ];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrivateComponent,
  ],
  imports: [
   // BrowserModule, FormsModule, RouterModule.forRoot(appRoutes,{ enableTracing: true})
    BrowserModule, FormsModule, RouterModule.forRoot([{ path: 'home', component: LoginComponent },{path: 'login', component: PrivateComponent}])
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
