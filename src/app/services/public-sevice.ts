import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceRequest } from '../models/service-request';
import { environment } from '../../environments/environment.prod';

// const API_URL = 'http://localhost:8080/sistema/api/v1/public';

@Injectable({
  providedIn: 'root',
})
export class PublicSevice {
  
  constructor(private http: HttpClient) {}

  sendServiceRequest(request: ServiceRequest): Observable<string> {
    return this.http.post(`${environment.apiUrl}/public/service-request`, request, { responseType: 'text' });
  }

}
