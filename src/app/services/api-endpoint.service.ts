import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ApiEndpointService {
  
  // live-server
  public endpoint: string = ''


  passport={
    access_token:''
  }
  constructor(public http: HttpClient) {
  }
  

  //  index method
  index(url) {
    return this.http.get(this.endpoint + url, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.passport.access_token)
    });
  }
  //logout
  login(payload) {
    return this.http.post(this.endpoint,payload,{
      headers: new HttpHeaders().set('Content-Type','text/plain')
    });
  }
  // show method
  show(id) {
    return this.http.get(this.endpoint + "/" + id, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.passport.access_token)
    });
  }
  // edit method
  edit(url, id) {
    return this.http.get(this.endpoint + url + "/" + id + "/edit", {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.passport.access_token)
    });
  }

  // store method
  store(url, payload) {
    return this.http.post(this.endpoint + url, payload, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.passport.access_token)
    });
  }

  // update method
  update(url, payload, id) {
    return this.http.put(this.endpoint + url + "/" + id, payload, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.passport.access_token)
    });
  }

  // delete method
  destroy(url, id) {
    return this.http.delete(this.endpoint + url + "/" + id, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.passport.access_token)
    });
  }

  


}
