import { Component, Input , OnChanges, SimpleChanges,ElementRef, ViewChild , AfterViewInit} from "@angular/core";
import {ActivatedRoute} from '@angular/router'
import { ISession } from "../shared/index";
import { AuthService} from '../../user/auth.service'
import { VoterService } from "./voters.service";
@Component({
    selector:'session-list',
    templateUrl:'./session-list.components.html',
  
})

export class SessionListComponent implements OnChanges, AfterViewInit {
@Input() sessions:ISession[];
@Input() filterBy:string;
@Input() sortBy:string;
@Input() eventId:number;
VisibleSessions: ISession[] = [];

constructor(private auth:AuthService , private voterService: VoterService ,private route: ActivatedRoute ){

}

@ViewChild('selectedSession') selectedSessionElement: ElementRef; // Add this property

@ViewChild('sessionDiv') sessionDiv: ElementRef;

ngOnChanges() {
    if(this.sessions){
        this.filterSessions(this.filterBy)
        this.sortBy==='name'? this.VisibleSessions.sort(sortByName): this.VisibleSessions.sort(sortByVotesDesc)
    }
}
toggleVote(session:ISession){
if(this.userHasVoted(session)){
    this.voterService.deleteVoter(this.eventId ,session,this.auth.currentUser.userName)
}else{
    this.voterService.addVoter(this.eventId,session,this.auth.currentUser.userName)
}
if(this.sortBy === 'votes'){
    this.VisibleSessions.sort(sortByVotesDesc)
}

}
userHasVoted(session : ISession){
    return this.voterService.userHasVoted(session,this.auth.currentUser.userName)
}
filterSessions(filter){
    if(filter==='all'){
        this.VisibleSessions=this.sessions.slice(0);


    } else{
        this.VisibleSessions = 
                   this.sessions.filter(session => {
                    return session.level.toLowerCase() === filter;
                   })

    }
}
ngAfterViewInit() {
    this.route.params.subscribe(params => {
      const sessionId = +params['sessionId']; // Convert to a number

      // Check if a valid sessionId was provided
      if (!isNaN(sessionId)) {
        // Use JavaScript to scroll to the div element
        const element = this.sessionDiv.nativeElement;
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

}
function sortByName(s1:ISession,s2:ISession){
    if(s1.name>s2.name) return 1
    else if(s1.name===s2.name) return 0
    else return -1
}
 function sortByVotesDesc (s1:ISession,s2:ISession){
    return s2.voters.length - s1.voters.length
 }