import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../../app.constants'
import { Router, NavigationStart, NavigationEnd,ActivatedRoute} from '@angular/router';
import { DepartmentsService } from '../../../departments.service';

@Component({
    selector:'notice',
    templateUrl:'./notice.component.html',
    styleUrls:['./notice.component.scss']
})

export class DnoticeComponent{
    serveUrl:any;
    Data:any;
    loader:boolean=false;
    url:any;
  constructor(
        private http:HttpClient,
        private con:Configuration,
        private router:Router,
        private ds:DepartmentsService
  ) {
    this.serveUrl=this.con.url;
    console.log(this.serveUrl);
    this.url = this.router.url;
    console.log(this.url);
    this.url=this.url.split("/").splice(0,4).join("/");
    console.log(this.url);


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
