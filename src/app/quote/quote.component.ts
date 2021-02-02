 
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('Tough times never last but tough people do','Susan','Robert H. Schiuller',new Date(2020,9,12)),
   new Quote ('Have enough courage to start and enough heart to finish.','Racheal','Jessica N. S. Yourko',new Date (2020,9,8)),
   new Quote ('Hate comes from intimidation, love comes from appreciation','Wendy','Tyga', new Date (2020,8,9)),
  new Quote('Reality is wrong, dreams are for real.','Mell','Tupac',new Date (2020,6,7)),
  new Quote('There is no substitute for hard work.','Rose','Thomas Edison',new Date (2020,6,7)),
  new Quote('What consumes your mind controls your life','Leah','Maya Angelou',new Date (2020,6,7)),
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
    quote.datePosted = new Date(quote.datePosted)
    this.quotes.push(quote)
  }

  upVote(val,index){
 if (val === 1 ){
   this.quotes[index].upvote + val;
  }
  }
  
  
 downVote(val,index){
    if (val === 1 ){
      this.quotes[index].downvote + val 
    }
        
     }


  constructor() { }

  ngOnInit() {
  }

}
