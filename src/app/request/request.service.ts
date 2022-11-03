import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  
  baseurl: string = "http://localhost:5555/api/requests";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Request[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Request[]>
  }
  get(id: number): Observable<Request> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Request>;
  }
  create(requ: Request): Observable<Request> {
    return this.http.post(`${this.baseurl}`, requ) as Observable<Request>;
  } 
  edit(requ: Request): Observable<any> {
    return this.http.put(`${this.baseurl}/${requ.id}`, requ) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
}
