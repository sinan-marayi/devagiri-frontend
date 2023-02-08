import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  email = '';
  password = '';

  msg = '';

  loginClicked() {
    let user = {
      email: this.email,
      password: this.password,
    };
    this.auth.login(user).subscribe((res) => {
      console.log(res);

      if (res.success) {
        localStorage.setItem('token_id', res.token);
        localStorage.setItem('user_id', res.user.id);
        localStorage.setItem('isAdmin', res.isAdmin);
        this.router.navigate(['/']);
      } else {
        this.msg = 'sorry...unable to login';
      }
    });
  }
}
