import { Component, OnInit, ViewChild} from '@angular/core';
import { Configuration } from '../app.constants';
import { HttpClient } from '@angular/common/http';
// import { }
// import { OwlCarousel } from 'ngx-owl-carousel';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  marquee:any;
  notices:any = [];
  events:any = [];
  news:any=[];
  eventsLoader:boolean=false;
  noticesLoader:boolean=false;
  newsLoader:boolean=false;


  serveUrl:string="";
  constructor(
    private http: HttpClient,
    private con:Configuration
  ) {
    this.serveUrl=this.con.server;
  }



  ngOnInit() {
    this.getMarquee();
    this.getNotices();
    this.getEvents();
    this.getNews();
    }

  getMarquee(){
    this.http.get( this.serveUrl +'marquee/?format=json').subscribe(data => {
      this.marquee = data
    },err=>{});
  }

  getNotices(){
    this.noticesLoader=true;
    this.http.get( this.serveUrl + 'notice/home').subscribe(data => {
      this.noticesLoader=false;
      this.notices = data;
    },err=>{
      this.noticesLoader=false;
    });
  }

  getEvents(){
    this.eventsLoader=true;
    this.http.get( this.serveUrl + 'events/home').subscribe(data => {
    this.eventsLoader=false;
      this.events = data;
    },err=>{
      this.eventsLoader=false;
    });
  }

    getNews(){
    this.newsLoader=true;
    this.http.get( this.serveUrl + 'news/home').subscribe(data => {
    this.newsLoader=false;
      this.news = data;
    },err=>{
      this.newsLoader=false;
    });
  }


}
