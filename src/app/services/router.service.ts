import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class RouterService {
  constructor(private router: Router) { }
  routeToHeader() {
    this.router.navigate(['header']);
  }
  routeToLogin() {
    this.router.navigate(['login']);
  }
}
