import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/events.service";
//import { ToastrService } from "../common/toaster.service";

@Component({ 
    selector:'events-list',
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
    events:any[]
   constructor(private eventService : EventService){
    
   }
   ngOnInit(){
    this.events = this.eventService.getEvents()
   }
  
  
}

   //  handleThumbnailClick(eventName) {
  //   this.toaster.sucess(eventName)
  // } 

// handleEventClicked(data){
//     console.log('recieved:',data) //data came from child
// }