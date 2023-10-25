import {Component} from '@angular/core'
import { AuthService } from './auth.service';
import {Router} from '@angular/router'
import { Observable } from "rxjs";
@Component({
templateUrl:'./login.components.html',
styles:[
    `
    em{float:right; color:#E05C65; padding-left:10px}
    `
]
})

export class LoginComponents{
    userName
    password
    mouseoverLogin
    loginInvalid = false
    constructor(private authservice:AuthService , private router:Router){

    }
    login(formValue) {
    this.authservice.loginUser(formValue.userName,
        formValue.password).subscribe(rep=>{
            if(!rep){
                this.loginInvalid = true;

            }
         else{
            this.router.navigate(['events'])
    }}
    
    )

        
    }
    cancel(){
        this.router.navigate(['events'])
    }
}