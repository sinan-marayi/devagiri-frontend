import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private auth: AuthService,private router:Router) {}
  name = '';
  email = '';
  phone = '';
  experience = '';
  location = '';
  password = '';
  work = '';
  about = '';
  ngOnInit(): void {}

  registerWorker() {
    let user = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      experience: this.experience,
      location: this.location,
      password: this.password,
      work: this.work,
      about: this.about,
    };

console.log(user)

    this.auth.register(user).subscribe((res) => {
this.router.navigate(['/login'])
    });
  }
}
