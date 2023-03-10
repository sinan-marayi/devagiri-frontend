import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProfile(id: any) {
    return this.http.post<any>('http://localhost:3000/admin/getProfile', id);
  }
  getWorkers(){
    return this.http.get<any>('http://localhost:3000/admin/getWorkers');

  }
}
