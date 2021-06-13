import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CgService {

  constructor(public http:HttpClient) { }
  getBooks():Observable<any>{
    return this.http.get("http://localhost:4200/assets/booklist.json");
  }
  getusers(userid:number):Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userid}`);
  }
}
