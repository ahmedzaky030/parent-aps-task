import { ApiResponse } from './../models/httpResponse.model';
import { USER_URL } from './../constants/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserJob } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user: UserJob){
    return this.http.post(`${environment.endPoint}${USER_URL}`, user)
  }

  updateUser(user: UserJob){
    return this.http.put(`${environment.endPoint}${USER_URL}`, user)
  }

  listUsers(){
    return this.http.get(`${environment.endPoint}${USER_URL}`);
  }

  getUser(userId: number){
    return this.http.get(`${environment.endPoint}${USER_URL}/${userId}`)
  }

  deleteUser(userId: number){
    return this.http.delete(`${environment.endPoint}${USER_URL}/${userId}`)
  }
}
