import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

export interface userResponse {
    token: string
}

@Injectable()
export class AuthService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private router: Router){}

  public isLoggedIn() {
      let user: any = this.getCurrentUser() ? this.getCurrentUser() : {};
      let token = user.token ? user.token : null;
      if(user.token) return true;

      return false;
  }

  public login() {
      let user: userResponse = {
          'token': '83746582-setUserAPIToken-1930472'
      }
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/dashboard']); // move to guard
  }

  public getCurrentUser(): userResponse{
      return JSON.parse(localStorage.getItem('user'));
  }

  public logout() {
      localStorage.removeItem('user');
      this.router.navigate(['/']);
      console.log('You have been signed out');
  }
}
