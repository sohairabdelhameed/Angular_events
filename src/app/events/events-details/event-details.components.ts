import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/events.service";
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from "../shared/index";
import { AuthService} from '../../user/auth.service'

@Component({
  templateUrl: './event-details.components.html',
  styles: [`
    .container {padding-left: 20px; padding-right: 20px;}
    .event-image {height: 100px;}
    a {cursor: pointer;}
    .btn.button-transparent {color: #f58a43;}
    .bgc{
      background-color:#535353;"
    }
    .cl{
      color:#e5e5e5;
    }
  `]
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'votes';
 

  constructor(public auth:AuthService, private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.forEach((data) => {
      
     this.event = data['event'];
     this.addMode = false;
      });
    
}

  addSession() {
    if (this.auth.isAuthenticated()) {
      this.addMode = true;
    } else {
   this.addMode=false;
  }
}

  saveNewSession(session: ISession) {
    const nextId = Math.max(...this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
