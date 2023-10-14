import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/events-list.components';
import { EventThumbnailComponent } from './events/events-thumbnail.components';
import { NavBarComponent } from './nav/navbar.components';
import { EventService } from './events/shared/events.service';
//import { ToastrService } from './common/toaster.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
  
  ],
 
  providers: [EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
