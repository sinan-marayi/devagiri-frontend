import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-worker-dashboard',
  templateUrl: './worker-dashboard.component.html',
  styleUrls: ['./worker-dashboard.component.css'],
})
export class WorkerDashboardComponent implements OnInit {
  constructor(
    public auth: AuthService,
    private data: DataService,
    private router: Router
  ) {

  }

  ngOnInit(): void {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
