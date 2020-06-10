import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../../app.constants'
import { Router, NavigationStart, NavigationEnd,ActivatedRoute} from '@angular/router';
import { DepartmentsService } from '../../../departments.service';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class DEventsComponent implements OnInit {
    serveUrl:any;
    Data:any;
    loader:boolean=false;
    url:any;
    pubs: number;
    order: "order";
    ascending = true;

  constructor(
        private http:HttpClient,
        private con:Configuration,
        private router:Router,
        private ds:DepartmentsService
  ) { 
    this.serveUrl=this.con.url;
    this.url = this.router.url;
    this.url=this.url.split("/").splice(0,4).join("/");
         

  }

    ngOnInit(){
        this.getData();
    }

    getData(){
        this.loader=true;
        this.ds.GetData(this.url).subscribe(res=>{
            this.loader=false;
            this.Data=res;
        },err=>{})
    }

}

