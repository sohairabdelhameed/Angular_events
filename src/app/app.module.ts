import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import {FormsModule ,ReactiveFormsModule} from '@angular/forms'
import{
  EventListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  EventRouterActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpVoteComponent,
  VoterService
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.components';
import{JQ_Token,CollapsibleWellComponent,SimpleModelComponent,ModalTriggerDirective,SearchResultsComponent} from './common/index'
import { appRoutes } from './route';
import { Error404Component } from './Errors/404.components';
import { AuthService } from './user/auth.service';
 //let toastr : Toastr = window ['toaster']
 let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
 

  ],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModelComponent,
    ModalTriggerDirective,
    SearchResultsComponent,
    UpVoteComponent,

  
  ],
 
  providers: [
    EventService,
    EventRouterActivator,
    EventListResolver,
    {provide:'canDeactivateCreatedEvent',useValue:checkBadState},
  AuthService,
 // {provide: Toaster_Token , useValue:toastr },
 {provide: JQ_Token, useValue:jQuery },
 VoterService
 
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
export function checkBadState(component:CreateEventComponent){
  if (component.isBad)
  return window.confirm('You have not saved this event,Do you really want to cancel?')
return true
}