import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
authStatus:boolean;
  constructor(private authService:AuthService , private router:Router) { }

  ngOnInit(): void {
    this.authStatus=this.authService.isAuth
  }
  Connection()
  {
    this.authService.signIn();
    this.authStatus=this.authService.isAuth;
    this.router.navigate(['article']);//router agis sur la route active 
    //pour faire naviguer l'utilisateur vers la route des appareil apres la connection
  }
  Deconnection(){
    this.authService.signOut();
    this.authStatus=this.authService.isAuth;
    console.log(this.authStatus)
  }

}
