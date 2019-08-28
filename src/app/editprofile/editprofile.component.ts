import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UpdateProfileService } from '../services/updateprofile.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
id : any;
  user:User = new User();
  constructor( private service: UpdateProfileService) { }
  ngOnInit() {
  }
  updateUser(): void {
    // localStorage.setItem('userName',this.user.userName);
this.id= localStorage.getItem('id');

    this.service.updateUser(this.user,this.id)
         .subscribe(data => console.log(data), error => console.log(error));
       // this.user = new User();
        console.log(this.user.userName,this.user.userPassword,this.id);
       
        }

}
