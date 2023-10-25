import { Routes } from "@angular/router";
import{
    EventListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventResolver,

    EventListResolver,
    CreateSessionComponent,
    SessionListComponent
  } from './events/index'
 
import { Error404Component } from "./Errors/404.components";
import{SearchResultsComponent} from './common/index'

export const appRoutes: Routes =[
{path:'events/new',component:CreateEventComponent,
canDeactivate:['canDeactivateCreatedEvent']},
{path:'events',component:EventListComponent,
resolve:{events:EventListResolver}},
{path:'events/:id',component:EventDetailsComponent,
resolve:{event:EventResolver}},
{path:'404',component:Error404Component},
{path:'',redirectTo:'/events',pathMatch:'full'},
{path:'events/session/new', component: CreateSessionComponent},
{ path: 'search-results', component: SearchResultsComponent},
{ path: 'events/:eventId/sessions/:sessionId', component: SessionListComponent },
{
    path:'user',
    loadChildren:() => import('./user/user.module').then(m=>m.UserModel)},

]