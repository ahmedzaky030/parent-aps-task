import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { LOGIN_URL } from '../constants/api';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedIn:BehaviorSubject<boolean>;
  constructor(private http:HttpClient) { 
    this.loggedIn = new BehaviorSubject(false);
  }

  login(loginData: Login){
    return this.http.post(`${environment.endPoint}${LOGIN_URL}`, loginData)
  }
}
