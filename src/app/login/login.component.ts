import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/userService.service';
import { User } from '../model/user';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';
import { Router } from '@angular/router';
@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id: string;
 constructor(private service:UserService,private authService: AuthenticationService,
   private routerService:RouterService,private router:Router
   ) { }
 user: User = new User();
 ngOnInit() {
 }
 username:any
 password:any
 public bearerToken: any;
   public submitMessage: string;
 userlogin(): void {
// this.username=this.user.userName;
// this.password=this.user.userPassword;
localStorage.setItem('id',this.user.userName);
this.id= localStorage.getItem('id');

 console.log(this.user.userName,this.user.userPassword,this.id);
     // const user: any = { username: this.username.value, password: this.password.value };
     //  if (this.username.hasError('required') || this.password.hasError('required')) {
     //    this.submitMessage = 'Username and Password required';
     //  } else {
      // this.service.userlogin(this.user)
     this.authService.authenticateUser(this.user)
       .subscribe( data => {
         alert("successfully Logged in.");
         this.bearerToken =data["token"];
         console.log(data);
         this.authService.setBearerToken(this.bearerToken);
         console.log(this.bearerToken);
           this.routerService.routeToHeader();
           console.log("to header");
        // this.router.navigate(['/header']);

        //  this.routerService.routeToDashboard();
       },
       err => {
         console.log("notfound");
                   if (err.status === 404) {
           this.submitMessage = err.message;
         } else {
           this.submitMessage = err.error.message;
         }
         } 
         );
 // getUserDetails(){
 //   var iddata = "?username=" + this.loginForm.get('email').value + "&password=" + this.loginForm.get('password').value;
 // this.service.getUserDetails(iddata).subscribe(data => {
 //   this.service.setUserId(data['id'])
 // }
}
}