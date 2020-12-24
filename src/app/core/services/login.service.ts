import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { LOGIN_URL } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(loginData: Login){
    return this.http.post(`${environment.endPoint}${LOGIN_URL}`, loginData)
  }
}
