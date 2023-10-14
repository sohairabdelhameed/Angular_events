import {Component} from '@angular/core'
import { AuthService } from './auth.service';
import {Router} from '@angular/router'
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
    constructor(private authservice:AuthService , private router:Router){

    }
    login(formValue) {
    this.authservice.loginUser(formValue.userName,
        formValue.password)
        this.router.navigate(['events'])
    }
    cancel(){
        this.router.navigate(['events'])
    }
}