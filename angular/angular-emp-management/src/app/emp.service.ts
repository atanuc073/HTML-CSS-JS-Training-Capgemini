import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empdto } from './empdto';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(public http:HttpClient) { }

  viewbyemployeeid(eid:number):Observable<any>{
    return this.http.get("http://localhost:8082/empapp/viewempbyid/"+eid);
    
  }
  addEmployee(emp:Empdto):Observable<any>{
    return this.http.post("http://localhost:8082/empapp/addemployee",emp)

  }
}
