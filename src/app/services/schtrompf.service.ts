import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class SchtrompfService {

  private baseUrl = 'http://localhost:8080/api/schtrompf';

  constructor(private http: HttpClient) { }

 create(data: {login: string, password: string, age: number; famille: string; race: string; nourriture: string; }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/update/${id}`, data);
  }

  addOneSchtrompfTo(id: any, data : any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addOneSchtrompfTo/${id}`, {_id : data});
  }


  removeOneSchtrompfFrom(id: any, data : any) : Observable<any> {
    return this.http.post(`${this.baseUrl}/removeOneSchtrompfFrom/${id}`, {_id : data})
  }

  findFriendList(id: any) : Observable<any> {
    return this.http.get(`${this.baseUrl}/findFriendList/${id}`)
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  logout() : Observable<any> { 
    return this.http.get(`${this.baseUrl}/auth/logout`);
  }

}
