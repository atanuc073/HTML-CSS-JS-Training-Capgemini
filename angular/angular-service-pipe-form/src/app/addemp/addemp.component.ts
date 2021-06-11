import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css'],
  // providers: [EmpService]
  // providing service at component level
})
export class AddempComponent implements OnInit {

  constructor(public empservice:EmpService) { }

  ngOnInit() {
  }

}
