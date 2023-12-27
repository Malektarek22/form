import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {


  constructor(private http: HttpClient) { }

  login(data: any) {
    const loginUrl = `http://41.65.11.55:8023/auth/login`;
    return this.http.post(loginUrl, data);
  }

  add(data: any) {
    const loginUrl = `http://41.65.11.55:8023/user`;
    return this.http.post(loginUrl, data);
  }

  otp(phoneNumber: any) {
    const loginUrl = `http://41.65.11.55:8023/user/generate_otp?phone=${phoneNumber}`;
    return this.http.post(loginUrl, '');
  }

}
