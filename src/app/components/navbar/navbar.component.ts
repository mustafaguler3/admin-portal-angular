import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  loggedIn!: boolean;

  constructor(private loginService:LoginService,
              private router: Router){
          if(localStorage.getItem("portalAdminHasLoggedIn") == ''){
            this.loggedIn = false;
          }else {
            this.loggedIn = true;
          }
  }

  getDisplay(){
    if(!this.loggedIn){
      return "none";
    }else {
      return ""
    }
  }

  logout(){
    this.loginService.logout().subscribe(
      res => {
        localStorage.setItem("portalAdminHasLoggedIn","");
      },
      err => console.log(err)
    );
    location.reload();

    this.router.navigate(["/login"]);
  }

}
