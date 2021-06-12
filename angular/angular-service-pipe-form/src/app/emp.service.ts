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
    this.emps.push({empId:1001,empName:"atanu",empSal:500000,empdept:"pr"});
    this.emps.push({empId:1005,empName:"sayan",empSal:400000,empdept:"hr"});
    this.emps.push({empId:1017,empName:"ram",empSal:800000,empdept:"hr"});
    this.emps.push({empId:1009,empName:"ahan",empSal:450000,empdept:"pr"});
    this.emps.push({empId:1019,empName:"ravan",empSal:700000,empdept:"hr"});
    this.emps.push({empId:1012,empName:"mohit",empSal:300000,empdept:"pr"});
   }

}
