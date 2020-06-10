import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../app.constants';

@Component({
  selector: 'app-s-events',
  templateUrl: './s-events.component.html',
  styleUrls: ['./s-events.component.scss','../../../home/home.component.scss']
})
export class SEventsComponent implements OnInit {

  serveUrl:string="";
  events:any;
  loader:boolean=false;
  newsLoader:boolean=false;
  news:any;
  constructor(
    private con:Configuration,
    private http:HttpClient
  ) {
    this.serveUrl=this.con.server;
   }

  ngOnInit() {
    this.getEvents();
    this.getNews();
  }

  getEvents(){
    this.loader=true;
    this.http.get(this.serveUrl + 'events').subscribe(res=>{
      this.loader=false;      
      this.events=res;
    },err=>{
      this.loader=false;      
    })
    
  }

    getNews(){
    this.newsLoader=true;
    this.http.get(this.serveUrl + 'news').subscribe(res=>{
      this.newsLoader=false;      
      this.news=res;
    },err=>{
      this.newsLoader=false;      
    })
    
  }
}
