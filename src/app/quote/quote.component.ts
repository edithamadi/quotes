import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quotes = [
      new Quote(1,'get busy living,or get busy dying','Stephen King',0,0,new Date(2018,11,31)),
      new Quote(2,'get busy living,or get busy dying','Stephen King',0,0,new Date(2018,11,31)),
      new Quote(3,'get busy living,or get busy dying','Stephen King',0,0,new Date(2018,11,31)),
      new Quote(4,'get busy living,or get busy dying','Stephen King',0,0,new Date(2018,11,31)),
      new Quote(5,'get busy living,or get busy dying','Stephen King',0,0,new Date(2018,11,31)),
    ]

  constructor() { }

  ngOnInit() {
  }

}
