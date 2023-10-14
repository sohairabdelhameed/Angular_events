import { Routes } from "@angular/router";
import{
    EventListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouterActivator,
    EventListResolver
  } from './events/index'
  
import { Error404Component } from "./Errors/404.components";

export const appRoutes: Routes =[
{path:'events/new',component:CreateEventComponent,
canDeactivate:['canDeactivateCreatedEvent']},
{path:'events',component:EventListComponent,
resolve:{events:EventListResolver}},
{path:'events/:id',component:EventDetailsComponent,
canActivate:[EventRouterActivator]},
{path:'404',component:Error404Component},
{path:'',redirectTo:'/events',pathMatch:'full'},
{
    path:'user',
    loadChildren:() => import('./user/user.module').then(m=>m.UserModel)}
]