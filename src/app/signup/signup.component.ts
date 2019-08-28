import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/userService.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:User = new User();
  constructor( private userService: UserService) { }

  ngOnInit() {
  }
  createUser(): void {
    this.userService.createUser(this.user)
         .subscribe(data => console.log(data), error => console.log(error));
        this.user = new User();
        }
        
}
