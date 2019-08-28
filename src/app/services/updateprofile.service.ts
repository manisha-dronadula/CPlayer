import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
const httpOptions={
  headers:new HttpHeaders({
    "Accept":"*/*"
  })
};

@Injectable({
    providedIn: 'root'
  })
  export class UpdateProfileService {
  
    private userUrl = 'http://localhost:9090/api/updateuser';
  
    constructor(private http: HttpClient) { }
  
    // getUser(id: number): Observable<Object> {
    //   return this.http.get('http://localhost:9090/api/addUser');
    // }
  
   
    // public getUsers() {
    //   return this.http.get<User[]>(this.userUrl);
    // }

    public updateUser(user: Object,id :any): Observable<Object> {
      return this.http.put(this.userUrl+'/'+id, user);
    }
    
    /*public createUser(user : User) {
      return this.http.post<User>(this.userUrl, user);
    }*/

  
    
  }