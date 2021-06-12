import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pf'
})
export class PfPipe implements PipeTransform {

  transform(empsal: any, args?: any): any {
    return empsal*0.12;
  }

}
