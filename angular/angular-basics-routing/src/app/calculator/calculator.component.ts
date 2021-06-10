import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  amt:number;
  years:number;
  rate:number;
  res:string;
  constructor() { }

  ngOnInit() {
  }
  calcSimple():void{
    this.res=(this.amt*this.years*this.rate/100.0).toFixed(2);

  }
  calcCompound():void{
    this.res=(this.amt*Math.pow(1+(this.rate/100.0),this.years)-this.amt).toFixed(2);

  }


}
