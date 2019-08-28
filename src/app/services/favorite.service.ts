import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../model/player';
const httpOptions={
 headers:new HttpHeaders({
   "Accept":"/"
 })
};
@Injectable({
   providedIn: 'root'
 })
 export class FavouriteService {
   private userUrl = 'http://localhost:1000/cricapi/addFavorite';
   constructor(private http: HttpClient) { }
   public addFavourite(player: Object): Observable<Object> {
       console.log(this.userUrl);
     return this.http.post(`${this.userUrl}`, player);
   }
   /*public createUser(user : User) {
     return this.http.post<User>(this.userUrl, user);
   }*/
 }