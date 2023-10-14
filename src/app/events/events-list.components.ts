import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/events.service";
//import { ToastrService } from "../common/toaster.service";
import {ActivatedRoute} from '@angular/router'
import { IEvent } from "./shared/index";
@Component({ 
   
    template:`
    <div>
          <h1> Upcomming Angular Events </h1>
        <hr>
   <div class="row">
   <div *ngFor="let event of events" class="col-md-5">
        <events-thumbnail [event]="event"> </events-thumbnail>
       
</div>
</div>

    
    </div>
    `,
   
})
export class EventListComponent implements OnInit {
    events:IEvent[]
   constructor(private eventService : EventService,private route:ActivatedRoute){
    
   }
   ngOnInit(){
    this.events=this.route.snapshot.data['events']


 
   }
  
  
}

   //  handleThumbnailClick(eventName) {
  //   this.toaster.sucess(eventName)
  // } 

// handleEventClicked(data){
//     console.log('recieved:',data) //data came from child
// }