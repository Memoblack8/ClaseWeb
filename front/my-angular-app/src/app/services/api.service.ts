import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<any> {
    return this.http.get(`${this.apiUrl}/people`);
  }

  getPersonById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/people/1`);  }
}