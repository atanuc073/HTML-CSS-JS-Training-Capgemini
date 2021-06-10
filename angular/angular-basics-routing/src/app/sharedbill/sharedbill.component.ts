import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sharedbill',
  templateUrl: './sharedbill.component.html',
  styleUrls: ['./sharedbill.component.css']
})
export class SharedbillComponent implements OnInit {
  totalcost:number;
  tipper:number;
  noofpersons:number;
  tipsperperson:string;
  totalperperson:string;

  constructor() { }

  ngOnInit() {
  }
  calcTipPercentage():number{
    return this.totalcost*this.tipper/100.0;
  }
  calcTotalCostPerPerson():void{
    this.tipsperperson=(this.calcTipPercentage()/this.noofpersons).toFixed(2);
    this.totalperperson=((this.totalcost+this.calcTipPercentage())/this.noofpersons).toFixed(2);
  }

}
