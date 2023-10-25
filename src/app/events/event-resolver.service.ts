import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { EventService } from './shared/events.service';

@Injectable()
export class EventResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}

  resolve(route:ActivatedRouteSnapshot) {
    // Return the observable directly, and the resolver will subscribe to it.
    return this.eventService.getEvent(route.params['id']);
  }
}
