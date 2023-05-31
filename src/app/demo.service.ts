import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  apiUrl = 'https://blog-api-django-rest-framework-production.up.railway.app/api/v1';

  accessToken: string = '';

  constructor(private http: HttpClient) {


  const auth_token =localStorage.getItem('accessToken') ?? '';





  // this.accessToken = auth_token.access;
  // console.log('access token', this.accessToken);
  }


  getHeader() {
    let headers = {
      'Authorization': 'Bearer' + this.accessToken,
    };
    return headers;
  }

  login(username: string, password: string){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json',
    'Referrer Policy':'same-origin'})
    };
    return this.http.post(`${this.apiUrl}/login/`, {username, password}, httpOptions).pipe(map((response) => {
      if(response){
        return response;
    }
    return null;
  }));

}



  getBlogList(){
let headers = this.getHeader();
return this.http.get(`${this.apiUrl}/list/`, { headers });
  }


}
