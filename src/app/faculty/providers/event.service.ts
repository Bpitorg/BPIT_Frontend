import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Configuration } from '../../app.constants';
import { CustomHttpService } from '../../default.header.service';

@Injectable()
export class EventService{
serveUrl:any;

constructor(
    private http:CustomHttpService,
    private con:Configuration,
){
    this.serveUrl=this.con.server;
}

getEvents(branch:any){
    return this.http.get(this.serveUrl +'departments/'+ branch +'/events')
}

deleteEvent(id:any,data:any){
    return this.http.delete(this.serveUrl +'events/'+ id,{body:data})
}

postEvent(data){
    return this.http.post(this.serveUrl +'events/post',data)
}

editEvents(id:any,data:any){
    return this.http.put(this.serveUrl +'events/post'+id,data)
}
}
