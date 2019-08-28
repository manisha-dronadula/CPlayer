import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Searchitems } from './search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient:HttpClient) { }

  getall(bsearch:string)
 {
   return this.httpClient.get('https://cricapi.com/api/playerFinder?apikey=NmrikVuzYChb3nOBM5gFJbDS7os1&name='+ bsearch + '');
 }
 }


