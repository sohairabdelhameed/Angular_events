import {Component} from '@angular/core'
import{Router} from '@angular/router'
@Component({
    template:`
    <h1>New Element</h1>
    <div class="col-md-6">
        <h3>[Create Event form will go here] </h3>
        <br/>
        <br/>
        <button type="submit" class="btn btn-primary"> Save  </button>
        <span style="margin: 0 5px;"></span> <!-- Add some spacing between the buttons -->
        <button type="button" class="btn btn-secondary"
        (click)="cancel()">Cancel</button>
    </div>
    
    `
})
     export class CreateEventComponent{
        isBad:boolean=true
        constructor(private router:Router){

        }
        cancel(){
           this.router.navigate(['/events'])

     }
    }