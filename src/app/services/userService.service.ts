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
  export class UserService {
  
    private userUrl = 'http://localhost:9090/api/addUser';
  
    constructor(private http: HttpClient) { }
  
    // getUser(id: number): Observable<Object> {
    //   return this.http.get('http://localhost:9090/api/addUser');
    // }
  
   
    // public getUsers() {
    //   return this.http.get<User[]>(this.userUrl);
    // }

    public createUser(user: Object): Observable<Object> {
      return this.http.post(`${this.userUrl}`, user);
    }
    
    /*public createUser(user : User) {
      return this.http.post<User>(this.userUrl, user);
    }*/

  
    
  }