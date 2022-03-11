import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient: HttpClient) { }

  addUser(user: any): Observable<any> {
    return this.httpClient.post("http://localhost:3000/users", user)
  }

  authentication(user: any): Observable<any> {
    return this.httpClient.post("http://localhost:3000/login", user)
  }

  sendOTP(user: any): Observable<any> {
    return this.httpClient.post("http://localhost:3000/sendotp", user)
  }
  otpVerification(user:any):Observable<any>{
    return this.httpClient.post("http://localhost:3000/otpVerification",user)
  }

}