import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../model/player';
const httpOptions={
  headers:new HttpHeaders({
    "Accept":"*/*"
  })
};

@Injectable({
    providedIn: 'root'
  })
  export class playerStatsService {
  
    private userUrl = 'http://localhost:2000/cricapi/addRecommended';
  
    constructor(private http: HttpClient) { }
  
    // getUser(id: number): Observable<Object> {
    //   return this.http.get('http://localhost:9090/api/addUser');
    // }
  
   
    // public getUsers() {
    //   return this.http.get<Player[]>(this.userUrl);
    // }

    public addRecommended(player: Object): Observable<Object> {
        console.log(this.userUrl);
      return this.http.post(`${this.userUrl}`, player);
    }
    
    /*public createUser(user : User) {
      return this.http.post<User>(this.userUrl, user);
    }*/

  
    
  }