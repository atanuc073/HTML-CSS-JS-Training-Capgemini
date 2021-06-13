import { Pipe, PipeTransform } from '@angular/core';
import { Empdto } from './empdto';

@Pipe({
  name: 'searchby'
})
export class SearchbyPipe implements PipeTransform {

  transform(emps: Empdto[],searchstr:string): any {
    // return emps.filter(e=>e.empName.includes(searchstr.toLowerCase()));
    
    // if(searchstr!=null)
    return emps.filter(e=>e.empName.includes(searchstr.toLowerCase()));
    // else
    //   searchstr="";
    //   console.log(searchstr);
  }

}
