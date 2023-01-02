import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {

    console.log('START - ngOnInit() of LogoutComponent');

    this.authService.logout();


    console.log('END - ngOnInit() of LogoutComponent');

  }

  onLogin() {
    this.router.navigate(['login']);
  }

}
