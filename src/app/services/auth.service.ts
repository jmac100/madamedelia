import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

declare var Auth0Lock: any;

@Injectable()
export class AuthService {

  lock = new Auth0Lock('IAhCDwQyyKwBDkcVKeepqLRuuSlmV2kd','jmac100.auth0.com', {});

  constructor(private router: Router) { 
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
    });
  }

  public login() {
    this.lock.show();
  }

  public authenticated() {
    return tokenNotExpired();
  }

  public logout() {
    localStorage.removeItem("id_token");
    this.router.navigate(['home']);
  }

}
