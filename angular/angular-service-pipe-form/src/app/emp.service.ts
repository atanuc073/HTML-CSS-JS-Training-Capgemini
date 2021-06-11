import { Injectable } from '@angular/core';
import { Empdto } from './empdto';

// injected at root module lavel
// alternate way from applicationCache.mudule.ts
// injecting means referencing
@Injectable({
  providedIn: 'root'
})
export class EmpService {
  emps:Empdto[] = [];
  constructor() {
    console.log("empServiceConstructor");
    this.emps.push({empId:1001,empName:"Atanu",empSal:500000,empdept:"pr"});
    this.emps.push({empId:1005,empName:"Sayan",empSal:400000,empdept:"hr"});
    this.emps.push({empId:1017,empName:"Ram",empSal:800000,empdept:"hr"});
    this.emps.push({empId:1009,empName:"Atanu",empSal:450000,empdept:"pr"});
    this.emps.push({empId:1019,empName:"Ravan",empSal:700000,empdept:"hr"});
    this.emps.push({empId:1012,empName:"Mohit",empSal:300000,empdept:"pr"});
   }

}
