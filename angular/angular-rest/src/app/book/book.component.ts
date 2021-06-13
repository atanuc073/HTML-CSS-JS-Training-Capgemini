import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { CgService } from '../cg.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books:Book[]=[];
  constructor(public cgservice:CgService) { }

  ngOnInit() {
    this.cgservice.getBooks().subscribe(data=>{console.log("First Line");this.books=data});
    console.log("Second Line")
  }

}
