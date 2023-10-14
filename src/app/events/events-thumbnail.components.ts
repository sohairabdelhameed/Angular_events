import { Component , Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector:'events-thumbnail',
    template:`
    <div class =" container well hoverwell thumbnail bg ">
    <h2>{{event?.name}}</h2>
    
    <div> Date: {{event?.date}}</div>
    <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time"> 
    Time: {{event?.time}}
    <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
    <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
    <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div> Price: \${{event?.price}}</div>
    <div *ngIf="event?.location"> 
    <span> Location : {{event?.location?.address}}</span>
   
    <span class ="pad-left"> {{event?.location?.city}} ,{{event?.location?.country}} </span>
    
    </div>
  <div *ngIf="event?.onlineUrl">OnlineUrl:{{event.onlineUrl}}</div>
    </div>
    <hr>
    `,
    styles:[
        `
        
        .thumbnail{min-height:210px;}
        .pad-left={margin-left:10px;}
        .well div{color:#bbb;
        
        }
        .bg{background: #485563}
    
        `
    ]
    
})
export class EventThumbnailComponent {
@Input() event:any

getStartTimeStyle():any{
    if(this.event && this.event.time ==='8:00 am')
    return {color:'#003300','font-weight':'bold'}
return{}
}



}
/*@Output() eventClick = new EventEmitter();
   handleClickMe(){
    this.eventClick.emit(this.event.name);
   } */