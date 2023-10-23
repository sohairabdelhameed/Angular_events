import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'upvote',
  styleUrls:['./UpVotes-components.css'],
   template: `
  
   <div class="votingWidgetContainer pointable " (click)="onClick()">
      <div class="well votingWidget">
        <div class="votingButton">
        <i class="fas fa-heart mr-3"
        [style.color]="iconColor" ></i> <!-- For a solid heart -->
        <div class="badge badge-inverse votingCount">{{count}}</div>
        </div>
        </div>
      </div>
    
  `
})
export class UpVoteComponent {
  @Input() count: number;
  @Input()set voted(val){
this.iconColor = val ? 'red' : 'white';
  } 

  @Output() vote = new EventEmitter();
  iconColor:string;

  onClick() {
    this.vote.emit({});
  }
}
