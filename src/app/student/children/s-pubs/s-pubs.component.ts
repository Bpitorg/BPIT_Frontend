import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../app.constants';

@Component({
  selector: 'app-s-pubs',
  templateUrl: './s-pubs.component.html',
  styleUrls: ['./s-pubs.component.scss']
})
export class SPubsComponent implements OnInit {

  publications:any;
  serveUrl:any;
  loader:boolean=false;
  constructor(
    private http:HttpClient,
    private con:Configuration,
  ) {
      this.serveUrl=this.con.server;
   }

  ngOnInit() {
    this.getPublications();
  }

  getPublications(){
    this.loader=true;
    this.http.get( this.serveUrl + 'student-publications').subscribe(res=>{
      this.loader=false;      
      this.publications=res;
    },err=>{
      this.loader=false;            
    })

  }
}
