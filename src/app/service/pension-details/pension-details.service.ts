import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PensionDetailsService {
  
  constructor(private httpClient:HttpClient,private authService:AuthenticationService) { }

  getPensionDetails(aadhaarNumber:number){
    console.log('START - getPensionDetails() of PensionDetailsService');

    let authToken='Bearer ' + this.authService.getToken();
    const headers= new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Authorization',authToken);
    console.log('END - getPensionDetails() of PensionDetailsService');
    return this.httpClient.post<any>('http://localhost:8030/ProcessPension',aadhaarNumber,{ 'headers': headers });

  }
}
