import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
profile:any;
  constructor(private data:DataService) {
    data.getProfile({id:localStorage.getItem('user_id')}).subscribe(res=>{
      this.profile=res.data
      console.log(res);

          });
  }

  ngOnInit(): void {
  }

}
