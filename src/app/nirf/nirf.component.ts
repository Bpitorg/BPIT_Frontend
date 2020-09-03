import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../app.constants';

@Component({
    selector:'nirf',
    templateUrl:'./nirf.component.html',
    styleUrls:['nirf.component.scss']
})

export class NirfComponent implements OnInit{

      serveUrl:any;
      nirf:any;
      loader:boolean=false;

    constructor(
        private http:HttpClient,
        private con:Configuration,
    ){
        this.serveUrl=this.con.server;
    }

    ngOnInit(){
        this.getNirf();
    }

    getNirf(){
        this.loader=true;
        this.http.get(this.serveUrl + 'nirf/').subscribe(res=>{
            this.loader=false;
            this.nirf=res;
        },err=>{
        this.loader=false;
        })
    }
}
