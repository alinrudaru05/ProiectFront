import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginUser } from '../AuthenticateUser';
import { User } from '../GetUserDetails';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl : string = environment.baseUrl;
  private publicHeaders = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'accept': '*/*',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    }),
  }

  constructor(private http: HttpClient) {
   }

   login(data: LoginUser){
     console.log("trimitem: ", data)
    const authPath = '/AuthenticateUser';
    return this.http.post(
      this.baseUrl + authPath,
      data,
      this.publicHeaders)
   }

   register(data: User){
    const registerPath = '/GetUserDetails';
    let url = this.baseUrl + registerPath;
    console.log("URL", url)
    console.log("trimitem: ", data)
    return this.http.post(
      url,
      data,
      this.publicHeaders)
   }
}
