import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/events.service';

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}

  resolve() {
    // Return the observable directly, and the resolver will subscribe to it.
    return this.eventService.getEvents();
  }
}
