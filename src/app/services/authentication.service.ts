import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'  
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {
  }
  // public isAuthenticated(): boolean {
  //   const token = localStorage.getItem('authToken');
  //   if (token === null) {
  //     return false;
  //   }
  //   else {
  //     return true;
  //   }
  //  }  
  authenticateUser(data) {
    return this.httpClient.post('http://localhost:9090/api/login', data);
  }
  setBearerToken(token) {
    localStorage.setItem('bearerToken', token);
  }
  getBearerToken() {
    return localStorage.getItem('bearerToken');
  }
  // logout() {
  //   localStorage.clear();
  // }

  }
