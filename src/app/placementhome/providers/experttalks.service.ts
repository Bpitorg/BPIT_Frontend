import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Configuration } from '../../app.constants';
import { CustomHttpService } from '../../default.header.service';

@Injectable()
export class ExpertTalksService{
serveUrl:any;

constructor(
    private http:CustomHttpService,
    private con:Configuration,
){
    this.serveUrl=this.con.server;
}

getTalk(branch:any){
    return this.http.get(this.serveUrl +'placement/expert-talk-seminar' )
}

deleteTalk(id:any,data:any){
    return this.http.delete(this.serveUrl +'placement/expert-talk-seminar/' + id,{body:data})
}

postTalk(data:any){
    return this.http.post(this.serveUrl +'placement/expert-talk-seminar',data)
}

editTalk(id:any,data:any){
    return this.http.put(this.serveUrl +'placement/expert-talk-seminar/'+id,data)
}
}
