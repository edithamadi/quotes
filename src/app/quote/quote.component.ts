import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes = [
    new Quote(1,"Get busy living,or get busy dying","Stephen King","Edith Amadi",0,0,new Date(2018,7,14)),
  ];
  
  toogleDetails(index){
    this.quotes[index].showAuthor =!this.quotes[index].showAuthor;
    this.quotes[index].showPerson= !this.quotes[index].showPerson;
  }
  upvote(index){
    this.quotes[index].upvotes++
  }
  downvote(index){
    this.quotes[index].downvotes++
  }
  
  deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      
      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    this.quotes.push(quote)
    
  }
  
  constructor() { }
  
  ngOnInit() {
  }
}
