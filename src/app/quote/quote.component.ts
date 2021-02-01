import { NoopAnimationPlayer } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('go outside its nice and hot','Nimo','Rupi Kaur',0,0, new Date(2020,9,12)),
   new Quote ('go outside its nice and hot','Nimo','Ainstein',0,0,new Date (2020,9,8)),
   new Quote ('go outside its nice and hot','Nimo','Nimo',0,0, new Date (2020,8,9)),
  new Quote('go outside its nice and hot','Nimo','Nims',0,0,new Date (2020,6,7)),
  ];

  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  
  readQuote(isRead, index){
    if (isRead){
      this.quotes.splice(index,1);
    }
  }
  addNewQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
