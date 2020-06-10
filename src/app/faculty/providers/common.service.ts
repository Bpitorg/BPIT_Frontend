import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Configuration } from '../../app.constants';
import { CustomHttpService } from "../../default.header.service";

@Injectable()
export class CommonService{
branchId:any;
serveUrl:any
    constructor(
        public http:CustomHttpService,
        public con:Configuration
    ){
        this.branchId=localStorage.getItem('branch');
        this.serveUrl=con.server;
    }

    getBranchName(){
        console.log("here in common service, nice to see you here",this.serveUrl +'branch/'+this.branchId);
        return  this.http.get(this.serveUrl +'branch/'+this.branchId)

    }
}
