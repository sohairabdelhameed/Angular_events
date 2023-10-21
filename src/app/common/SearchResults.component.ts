import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService, ISession } from '../events/index';

@Component({
  selector: 'app-search-results',
  templateUrl: './SearchResults.component.html',
})
export class SearchResultsComponent implements OnInit {
  foundSession: ISession[];
  
  selectedSession: ISession; // Add this property

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

  navigateToSession(sessionId: number) {
    // Navigate to the event detail page with the session ID as a route parameter
    this.router.navigate(['event', sessionId]);
  }
  
  
  
  
}
