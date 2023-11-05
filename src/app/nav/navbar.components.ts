import {Component , AfterViewInit} from '@angular/core'
import { AuthService } from '../user/auth.service'
import { IEvent, ISession } from '../events/shared/event.model';
import { EventService } from '../events';
import { Router } from '@angular/router';
import * as $ from 'jquery'
//import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';



@Component({
    selector:'nav-bar',
    templateUrl:'./nav-bar.component.html',
    styles:[
        `
        .nav.navbar-nav{font-size:15px;}
        #searchForm{margin-right:100px;}
        @media (max-width:1200px) {#searchForm{display:none}}
        .navbar-nav > .nav-item > a.active { color:#d35e59; }
        
    

        `
    ]
})
export class NavBarComponent {
    searchTerm : string="";
    foundSession:ISession[];
    events:IEvent;
constructor(public auth:AuthService  ,private eventService: EventService, private router : Router){

}


searchSession(searchTerm){
this.eventService.searchSession(searchTerm)
.subscribe(sessions=>{
    this.foundSession = sessions;
    console.log(this.foundSession);
    this.router.navigate(['/search-results', { searchTerm: searchTerm }]);
})
}
}

