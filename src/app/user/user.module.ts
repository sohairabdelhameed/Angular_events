import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common'
import {RouterModule} from '@angular/router'
import { FormsModule , ReactiveFormsModule } from '@angular/forms'
import{userRoutes} from './user.routes'
import { ProfileComponent } from './profile.components'
import { LoginComponents } from './login.components'

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes),
        
       

    ],
    declarations:[
        ProfileComponent,
        LoginComponents

    ],
    providers:[
         

    ]
})
export class UserModel{

}