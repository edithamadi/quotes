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
          ];
    completeQuote(isComplete,index){
        if (isComplete){
            this.quotes.splice(index,1);
            }
            }
            upvote(index){
              this.quotes[index].upvotes++
            }
            downvote(index){
              this.quotes[index].downvotes++
            }

            constructor() { }

             ngOnInit() {
             }
           }
