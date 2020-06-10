import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../../app.constants'
import { Router, NavigationStart, NavigationEnd,ActivatedRoute} from '@angular/router';
import { DepartmentsService } from '../../../departments.service';

@Component({
  selector: 'faculty-publication',
  templateUrl: './fpubs.component.html',
  styleUrls: ['./fpubs.component.scss']
})
export class DfpubsComponent implements OnInit {

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
