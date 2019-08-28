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
  export class UnrecommendService {
  
    private userUrl = 'http://localhost:8000/cricapi/deleteRecommended';
  
    constructor(private http: HttpClient) { }

    public deleteUser(id :any): Observable<Object> {
      return this.http.delete(this.userUrl+'/'+id);
    }
    
    

  
    
  }