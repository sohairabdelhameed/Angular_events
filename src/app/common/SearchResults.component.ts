import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService, ISession } from '../events/index';


@Component({
  selector: 'app-search-results',
  templateUrl: './SearchResults.component.html',
})
export class SearchResultsComponent implements OnInit {
  foundSession: ISession[];
  
  selectedSession: ISession; 

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const searchTerm = params.get('searchTerm');

      if (searchTerm) {
        this.eventService.searchSession(searchTerm).subscribe((sessions) => {
          this.foundSession = sessions;
        });
      }
    });
  }

  navigateToSession(eventId: number, sessionId: number) {
    // Navigate to the session details page with the event and session IDs as route parameters
    this.router.navigate(['events', eventId, sessionId]);
  }
  
  
  
  
  
}
