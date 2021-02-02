import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, Input, OnInit ,Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isRead = new EventEmitter<boolean>();
  @Output() upVote = new EventEmitter<number>();
  @Output() downVote = new EventEmitter<number>();

  quoteRead(Read:boolean){
    this.isRead.emit(Read);
  }

  upvote(val:number){
    this.upVote.emit(val);
  }

  downvote(val:number){
    this.downVote.emit(val);
  }

  constructor() { }

  ngOnInit() {
  }

}
