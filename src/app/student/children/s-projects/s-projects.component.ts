import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../app.constants';

@Component({
  selector: 'app-s-projects',
  templateUrl: './s-projects.component.html',
  styleUrls: ['./s-projects.component.scss']
})
export class SProjectsComponent implements OnInit {

  projects:any;
  serveUrl:string="";
  loader:boolean=false;

  constructor(
    private http:HttpClient,
    private con:Configuration
  ) { 
    this.serveUrl=this.con.server;
  }

  ngOnInit() {
    this.getProject();
  }

  getProject(){
    this.loader=true;
    this.http.get( this.serveUrl + 'student-projects').subscribe(res=>{
    this.loader=false;      
      this.projects=res;
    },err=>{
    this.loader=false;      
    })
  }
}
