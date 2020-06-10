import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../app.constants';
import { SafePipe} from './p-placed-pipe.service';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-p-placed',
  templateUrl: './p-placed.component.html',
  styleUrls: ['./p-placed.component.scss']
})
export class PPlacedComponent implements OnInit {

  serveUrl:string="";
  list:any;
  list2:any;
  loader:boolean=false;
  constructor(
    private http:HttpClient,
    private con:Configuration
  ) {
    this.serveUrl=this.con.server;
  }

  ngOnInit() {
    this.getStudentPlaced();
    this.getPDFShow();
  }

  getStudentPlaced(){
    this.loader=true;
    this.http.get(this.serveUrl + 'placement/student-placed').subscribe(res=>{
    this.loader=false;
      this.list=res;
    },err=>{
      this.loader=false;
    })

  }

  getPDFShow(){
    this.loader=true;
    this.http.get(this.serveUrl + 'placement/recruiters-stats/').subscribe(res=>{
    this.loader=false;
      this.list2=res;
    },err=>{
      this.loader=false;
    })

  }
}
