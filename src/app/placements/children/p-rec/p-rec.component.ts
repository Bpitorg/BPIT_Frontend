import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../app.constants';

@Component({
  selector: 'app-p-rec',
  templateUrl: './p-rec.component.html',
  styleUrls: ['./p-rec.component.scss']
})
export class PRecComponent implements OnInit {

  serveUrl:string="";
  list:any;
  loader:boolean=true;
  error:boolean=false;
  constructor(
    private http:HttpClient,
    private con:Configuration,
  ) {
    this.serveUrl=this.con.server;
  }

  ngOnInit() {
    this.getRecruiters()
  }

  getRecruiters(){
    this.loader=true;
    this.http.get(this.serveUrl + 'placement/recruiters').subscribe(res=>{
    this.loader=false;
      this.list=res;
    },err=>{
      this.error=true;
    this.loader=false;
    })

  }

}
