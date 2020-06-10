import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../app.constants';

@Component({
  selector: 'app-s-achieve',
  templateUrl: './s-achieve.component.html',
  styleUrls: ['./s-achieve.component.scss']
})
export class SAchieveComponent implements OnInit {

  serveUrl:string="";
  loader:boolean=false;
  public achievements:any;
  constructor(
    private http:HttpClient,
    private con:Configuration,
  ) { 
    this.serveUrl=this.con.server;
  }

  ngOnInit() {
    this.getAchievements();
  }

  getAchievements(){
    this.loader=true;
    this.http.get( this.serveUrl + 'achievement-list').subscribe(res=>{
      this.achievements=res;
      this.loader=false;
    },err=>{
      this.loader=false;
    })
  }

}
