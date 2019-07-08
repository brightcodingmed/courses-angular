import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {


  @Input('mylike') like = 0;
  @Input('mydislike') disLike = 0;

  @Output('voteChildToParent') voteChildToParent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incLike() {
    this.like++;
    this.voteChildToParent.emit({type: 'like', value: this.like})
  }

  incDisLike() {
    this.disLike++;
    this.voteChildToParent.emit({type: 'disLike', value: this.disLike})
  }
}
