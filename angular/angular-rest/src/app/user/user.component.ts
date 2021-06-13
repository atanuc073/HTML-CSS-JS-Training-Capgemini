import { Component, OnInit } from '@angular/core';
import { CgService } from '../cg.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userid:number;
  msg:string;
  users:any;

  constructor(public cgservice:CgService) { }

  ngOnInit() {
  }
  getusers():void{
    this.cgservice.getusers(this.userid).subscribe(data=>{console.log(data);this.users=data;this.msg=undefined;},
                                                  error=>{this.users=undefined;this.msg="no row form"});


  }

}
