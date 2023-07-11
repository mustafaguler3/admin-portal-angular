import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private httpClient: HttpClient) { }

  sendCredential(username: string, password: string) {
    let url = "http://localhost:8080/index";
    let params = 'username='+username+"&password="+password;
    let headers = new Headers({
      "Content-Type:":"application/x-www-form-urlencoded"
    })

    return this.httpClient.post(url,{headers:headers,username,withCredentials:true,params:params})
  }

  logout(){
    let url = "http://localhost:8080/logout";
    return this.httpClient.get(url,{withCredentials:true})
  }

  
}
