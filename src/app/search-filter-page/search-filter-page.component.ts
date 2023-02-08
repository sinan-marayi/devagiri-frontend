import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search-filter-page',
  templateUrl: './search-filter-page.component.html',
  styleUrls: ['./search-filter-page.component.css'],
})
export class SearchFilterPageComponent implements OnInit {
  datas: any;
  constructor(private data: DataService,private router:Router) {
    data.getWorkers().subscribe((res) => {
      this.datas = res.data;
      console.log(res);
    });
  }

  ngOnInit(): void {}

toPdp(id:any){
this.router.navigate(['pdpView',id])
}
}
