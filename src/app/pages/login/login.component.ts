import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showLogin: boolean = false;
  credentials: any = {};

  constructor(
    private authService: AuthService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.loginService.login(this.credentials).subscribe(
      response => {
        this.router.navigate(['/start']);
        this.authService.save(response['token']);
      },
      error => {
        if (error['status'] != 401) this.showLogin = false;
        else this.showLogin = true;
      }
    );
    console.log('datos', this.credentials);
  }
}
