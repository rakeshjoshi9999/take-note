import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loggedIn;
  constructor(private  authService:  AuthService, private router:Router) { }
  ngOnInit() {
    if(localStorage.getItem('loggedIn')){
      this.router.navigate(['/notes']);
    }
  }

 async onClickLogin(){
   try{
     await this.authService.GoogleAuth();
     this.loggedIn = true;
     localStorage.setItem('loggedIn',this.loggedIn);
    this.router.navigate(['/notes']);
  }catch(e){
  console.log(e);
  }
}
}
