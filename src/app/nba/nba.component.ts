import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../app.constants';

@Component({
    selector:'nba',
    templateUrl:'./nba.component.html',
    styleUrls:['nba.component.scss']
})

export class NbaComponent implements OnInit{

      serveUrl:any;
      nba:any;
      loader:boolean=false;

    constructor(
        private http:HttpClient,
        private con:Configuration,
    ){
        this.serveUrl=this.con.server;
    }

    ngOnInit(){
        this.getNba();
    }

    getNba(){
        this.loader=true;
        this.http.get(this.serveUrl + 'nba').subscribe(res=>{
            this.loader=false;            
            this.nba=res;
        },err=>{
        this.loader=false;            
        })
    }
}