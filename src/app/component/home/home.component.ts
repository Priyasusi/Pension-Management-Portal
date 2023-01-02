import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedIn = false

  constructor(private authService:AuthenticationService, private router:Router){}

  ngOnInit(): void {

    console.log('START - ngOnInit() of HomeComponent');

    this.loggedIn = this.authService.isUserLoggedIn();
    
    console.log('END - ngOnInit() of HomeComponent');
  }

  onLogin(){
    this.router.navigate(['login']);
  }

}
