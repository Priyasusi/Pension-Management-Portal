import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authToken:string;
  
  constructor(private httpClient:HttpClient) { }

  authenticate(username,password){

    console.log('START - authenticate() of AuthenticationService');

    console.log('END - authenticate() of AuthenticationService');
    return this.httpClient.post<any>('http://localhost:8010/Authenticate',{username,password});
  }

  saveToken(token:string){

    console.log('START - saveToken() of AuthenticationService');
    console.log('Token in saveToken(): ',token);
    sessionStorage.setItem('token', token);
    console.log('END - saveToken() of AuthenticationService');
  }

  getToken():string{
    console.log('START - getToken() of AuthenticationService');
    this.authToken = sessionStorage.getItem('token');
    console.log('Token in getToken(): ', this.authToken);
    console.log('END - getToken() of AuthenticationService');
    return this.authToken;
    
  }

  isUserLoggedIn(){
    console.log('START - isUserLoggedIn() of AuthenticationService');
    let user = sessionStorage.getItem('username');
    console.log('isUserLoggedIn : ',!(user === null));
    console.log('END - isUserLoggedIn() of AuthenticationService');
    return !(user === null);
  }

  logout(){
    console.log('START - logout() of AuthenticationService');
    sessionStorage.removeItem('username');
    console.log('END - logout() of AuthenticationService');
  }
}
