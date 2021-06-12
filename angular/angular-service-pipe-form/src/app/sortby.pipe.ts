import { Pipe, PipeTransform } from '@angular/core';
import { Empdto } from './empdto';

@Pipe({
  name: 'sortby'
})
export class SortbyPipe implements PipeTransform {

  transform(emps: any, field?: string): any {
    emps=emps.sort((e1: { [x: string]: number; },e2: { [x: string]: number; })=>{if (e1[field]>=e2[field]) return 1; else return -1;});


    return emps;
  }

}
