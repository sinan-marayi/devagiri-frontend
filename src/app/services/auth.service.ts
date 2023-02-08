import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private http:HttpClient) {

   }

  login(user: any) {
    return this.http.post<any>('http://localhost:3000/users/login', user);
  }
  register(user: any) {
    return this.http.post<any>('http://localhost:3000/admin/registerWorker', user);
  }
isLogin(){
return    !!localStorage.getItem('user_id')
}
}
