import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../app.constants';

@Component({
    selector:'disclosures',
    templateUrl:'./disclosures.component.html',
    styleUrls:['disclosures.component.scss']
})

export class DisclosuresComponent implements OnInit{

    serveUrl:any;
    disclosures:any;
    loader:boolean=false;
    constructor(
        private http:HttpClient,
        private con:Configuration,
    ){
        this.serveUrl=this.con.server;
    }

    ngOnInit(){
        this.getDisclosures();
    }

    getDisclosures(){
        this.http.get(this.serveUrl + 'disclosures').subscribe(res=>{
            this.loader=false;
            this.disclosures=res;
        })
    }
}
