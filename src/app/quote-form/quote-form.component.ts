import { Quote } from '@angular/compiler';
import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  quoted = new Quote("","","","",0,0,new Date());
  @Output() add = new EventEmitter<Quote>();

  addQuote(){
this.add.emit(this.quoted);
this.quoted = new Quote("","","",0,0,new Date());
  }
  constructor() { }

  ngOnInit() {
  }

}

}
