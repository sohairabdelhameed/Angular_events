import { Component } from "@angular/core";
import { EventService } from "../shared/events.service";
import {ActivatedRoute} from '@angular/router'
import { IEvent, ISession } from "../shared/index";
@Component({
    templateUrl:'./event-details.components.html',
    styles:[`
    .container {padding-left:20px; padding-right:20px;}
    .event-image {height:100px;}
    a{cursor:pointer}
    .btn.button-transparent{color: #f58a43;  }
   
    `
    ]

})
export class EventDetailsComponent{
    event:IEvent
    addMode:boolean
    filterBy:string ='all';
    sortBy: string='votes'
constructor(private eventService:EventService,
    private route:ActivatedRoute){

}
    ngOnInit(){
        this.event = this.eventService.getEvent
        (+this.route.snapshot.params['id']);

}
addsession(){
    this.addMode =true
}
saveNewSession(session:ISession){
    const nextId = Math.max.apply(null,this.event.sessions.map(s=>
        s.id));
        session.id = nextId + 1
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event)
        this.addMode=false


    }
    cancelAddSession(){
        this.addMode = false;
    }
}