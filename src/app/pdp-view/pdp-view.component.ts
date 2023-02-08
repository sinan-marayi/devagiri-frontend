import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pdp-view',
  templateUrl: './pdp-view.component.html',
  styleUrls: ['./pdp-view.component.css']
})
export class PdpViewComponent implements OnInit {
id:any
profile:any
  constructor(private _Activatedroute:ActivatedRoute , private data:DataService) { }

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
console.log(this.id);

this.data.getProfile({id:this.id}).subscribe(res=>{
this.profile= res.data
console.log(res);

})


  }

}
