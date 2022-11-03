import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requestline } from './requestline.class';

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  baseurl: string = "http://localhost:5555/api/requestlines";

  constructor(
    private http: HttpClient
  ) { }

  get(id: number): Observable<Requestline> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Requestline>;
  }
  create(reql: Requestline): Observable<Requestline> {
    return this.http.post(`${this.baseurl}`, reql) as Observable<Requestline>;
  } 
  edit(reql: Requestline): Observable<any> {
    return this.http.put(`${this.baseurl}/${reql.id}`, reql) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
}
