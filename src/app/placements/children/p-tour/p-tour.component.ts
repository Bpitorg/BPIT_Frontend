import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../app.constants';


@Component({
  selector: 'app-p-tour',
  templateUrl: './p-tour.component.html',
  styleUrls: ['./p-tour.component.scss']
})
export class PTourComponent implements OnInit {
  serveUrl:string="";
  list:any;
  loader:boolean=true;
  error:boolean=false;

  constructor(
    private http:HttpClient,
    private con:Configuration,
  ){
      this.serveUrl=this.con.server;
  }
   ngOnInit() {
     this.getPTour();
   }


     getPTour(){
     this.loader=true;
     this.http.get(this.serveUrl + 'placement/industrial-tour-and-workshop').subscribe(res=>{
     this.loader=false;
       this.list=res;
     },err=>{
       this.error=true;
     this.loader=false;
     })

   }


}
