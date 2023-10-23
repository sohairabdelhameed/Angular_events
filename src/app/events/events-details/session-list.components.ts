import { Component, Input , OnChanges, SimpleChanges,ElementRef, ViewChild , AfterViewInit} from "@angular/core";
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
VisibleSessions: ISession[] = [];

constructor(private auth:AuthService , private voterService: VoterService  ){

}

@ViewChild('selectedSession') selectedSessionElement: ElementRef; // Add this property



ngOnChanges() {
    if(this.sessions){
        this.filterSessions(this.filterBy)
        this.sortBy==='name'? this.VisibleSessions.sort(sortByName): this.VisibleSessions.sort(sortByVotesDesc)
    }
}
toggleVote(session:ISession){
if(this.userHasVoted(session)){
    this.voterService.deleteVoter(session,this.auth.currentUser.userName)
}else{
    this.voterService.addVoter(session,this.auth.currentUser.userName)
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
scrollToSelectedSession() {
    if (this.selectedSessionElement && this.selectedSessionElement.nativeElement) {
      this.selectedSessionElement.nativeElement.scrollIntoView({ behavior: "smooth" });
    }
  }
  ngAfterViewInit() {
    this.scrollToSelectedSession();
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