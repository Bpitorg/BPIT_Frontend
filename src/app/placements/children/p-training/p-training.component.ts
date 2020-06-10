import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../app.constants';

@Component({
  selector: 'app-p-training',
  templateUrl: './p-training.component.html',
  styleUrls: ['./p-training.component.scss']
})
export class PTrainingComponent implements OnInit {
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
     this.getPTraining();
   }


     getPTraining(){
     this.loader=true;
     this.http.get(this.serveUrl + 'placement/trainings').subscribe(res=>{
     this.loader=false;
       this.list=res;
     },err=>{
       this.error=true;
     this.loader=false;
     })

   }

}
