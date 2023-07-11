import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loggedIn!: boolean;
  username: string | any;
  password!: string;

  constructor(private loginService: LoginService){
    if(localStorage.getItem("portalAdminHasLoggedIn") == '' && localStorage.getItem("portalAdminHasLoggedIn") == null){
      this.loggedIn = false;
    }else {
      this.loggedIn = true;
    }
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.loginService.sendCredential(this.username,this.password).subscribe(
      res => {
        this.loggedIn = true;
        localStorage.setItem("portalAdminHasLoggedIn","true");
        location.reload();
      },
      err => {console.log(err)}
    )
  }

}
