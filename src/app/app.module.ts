import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import {FormsModule ,ReactiveFormsModule} from '@angular/forms'
import { CollapsibleWellComponent } from './common/collapsible-well.component';
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
  DurationPipe
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.components';
//import { ToastrService } from './common/toaster.service';
import { appRoutes } from './route';
import { Error404Component } from './Errors/404.components';
import { AuthService } from './user/auth.service';

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
    DurationPipe
  
  ],
 
  providers: [
    EventService,
    EventRouterActivator,
    EventListResolver,
    {provide:'canDeactivateCreatedEvent',useValue:checkBadState},
  AuthService,
 
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
export function checkBadState(component:CreateEventComponent){
  if (component.isBad)
  return window.confirm('You have not saved this event,Do you really want to cancel?')
return true
}