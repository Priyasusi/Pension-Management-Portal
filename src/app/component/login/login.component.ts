import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidlogin = false;
  authResponse: any;
  authToken: string;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {

    console.log('START - ngOnInit() of LoginComponent');

    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })

    console.log('END - ngOnInit() of LoginComponent');

  }

  onLogin() {

    console.log('START - onLogin() of LoginComponent');

    let username = this.loginForm.get('username').value;
    console.log('Username : ', username);
    let password = this.loginForm.get('password').value;
    console.log('Password : ', password);

    if (username === 'priya'  || username === 'admin') {
      console.log('User logged in successfully.');
      this.authResponse = this.authService.authenticate(username, password).subscribe(
        authResponse => {
          this.authToken = authResponse.token;
          this.authService.saveToken(this.authToken);
          console.log('Token in onLogin() : ', this.authToken);
          this.authService.getToken();
        }
      );

      this.router.navigate(['calculatePension']);
      this.invalidlogin = false;
    }
    else {

      this.invalidlogin = true;
    }
    this.loginForm.reset();

    console.log('END - onLogin() of LoginComponent');
  }

}
