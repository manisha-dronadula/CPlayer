import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private routerService:RouterService) { }

  ngOnInit() {
    console.log()
  }
logout(){
  localStorage.clear();
  this.routerService.routeToLogin();

}
}

