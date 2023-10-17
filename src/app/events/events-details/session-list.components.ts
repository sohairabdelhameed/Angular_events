import { Component, Input , OnChanges, SimpleChanges} from "@angular/core";
import { ISession } from "../shared/index";
@Component({
    selector:'session-list',
    templateUrl:'./session-list.components.html',
  
})

export class SessionListComponent implements OnChanges{
@Input() sessions:ISession[];
@Input() filterBy:string;
@Input() sortBy:string;
VisibleSessions: ISession[] = [];


ngOnChanges() {
    if(this.sessions){
        this.filterSessions(this.filterBy)
        this.sortBy==='name'? this.VisibleSessions.sort(sortByName): this.VisibleSessions.sort(sortByVotesDesc)
    }
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


}
function sortByName(s1:ISession,s2:ISession){
    if(s1.name>s2.name) return 1
    else if(s1.name===s2.name) return 0
    else return -1
}
 function sortByVotesDesc (s1:ISession,s2:ISession){
    return s2.voters.length - s1.voters.length
 }