import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quotes = [
      new Quote(1,'"Get busy living,or get busy dying"','Stephen King','Edith Amadi',0, 0,new Date(2018,11,31)),
      new Quote(2,'"The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself."','Mark Caine','Andrew Waweru',0, 0,new Date(2018,11,31)),

    ]
    completeQuote(isComplete,index){
        if (isComplete){
            this.quotes.splice(index,1);
            }
            }
