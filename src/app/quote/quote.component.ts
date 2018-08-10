import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quotes = [
      new Quote(1,'"Get busy living,or get busy dying"','Stephen King','upvote', 'downvote',new Date(2018,11,31)),
      new Quote(2,'"The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself."','Mark Caine','upvote', 'downvote',new Date(2018,11,31)),
      new Quote(3,'“A successful man is one who can lay a firm foundation with the bricks others have thrown at him.”','David Brinkley','upvote', 'downvote',new Date(2018,11,31)),
      new Quote(4,'“Those who dare to fail miserably can achieve greatly.”','John F. Kennedy','upvote', 'downvote',new Date(2018,11,31)),
      new Quote(5,'“It is hard to fail, but it is worse never to have tried to succeed.”','Theodore Roosevelt','upvote', 'downvote',new Date(2018,11,31)),
    ]

  constructor() { }

  ngOnInit() {
  }

}
