import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Configuration } from '../../app.constants';
import { CustomHttpService } from '../../default.header.service';

@Injectable()
export class RecruitersService{
serveUrl:any;

constructor(
    private http:CustomHttpService,
    private con:Configuration,
){
    this.serveUrl=this.con.server;
}

getRecruiters(branch:any){
    return this.http.get(this.serveUrl +'placement/recruiters' )
}

deleteRecruiters(id:any,data:any){
    return this.http.delete(this.serveUrl +'placement/recruiters/' + id,{body:data})
}

postRecruiters(data:any){
    return this.http.post(this.serveUrl +'placement/recruiters/',data)
}

editRecruiters(id:any,data:any){
    return this.http.put(this.serveUrl +'placement/recruiters/'+id,data)
}
}
