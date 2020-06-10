
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Configuration } from '../../../app.constants';
import { CustomHttpService } from '../../../default.header.service';

@Component({
  selector: 'app-p-team',
  templateUrl: './p-team.component.html',
  styleUrls: ['./p-team.component.scss']
})
export class PTeamComponent implements OnInit {
  serveUrl:string="";
  list:any;
  loader:boolean=true;
  error:boolean=false;

  constructor(
      private http:CustomHttpService,
      private con:Configuration,
  ){
      this.serveUrl=this.con.server;
  }
   ngOnInit() {
     this.getPTeam();
   }


   getPTeam(){
     this.loader=true;
     this.http.get(this.serveUrl + 'placement/get/').subscribe(res=>{
     this.loader=false;
       this.list=res.json();
     },err=>{
       this.loader=false;
     })

   }

}
