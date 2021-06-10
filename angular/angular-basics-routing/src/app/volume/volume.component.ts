import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.css']
})
export class VolumeComponent implements OnInit {
  radius:number;
  height:number;
  res:string;

  constructor() { }

  ngOnInit() {
  }
  calcVolumeOfCone():void{
    this.res=(Math.PI*this.radius*this.radius*this.height).toFixed(2);
  }
  calcVolumeOfCylinder():void{
    this.res=((Math.PI*this.radius*this.radius*this.height)/3.0).toFixed(2);
  }

}
