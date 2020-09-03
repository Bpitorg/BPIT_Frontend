import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Configuration } from '../../app.constants';
import { CustomHttpService } from '../../default.header.service';

@Injectable()
export class IndusTourService{
serveUrl:any;

constructor(
    private http:CustomHttpService,
    private con:Configuration,
){
    this.serveUrl=this.con.server;
}

getTour(branch:any){
    return this.http.get(this.serveUrl +'placement/industrial-tour-and-workshop' )
}

deleteTour(id:any,data:any){
    return this.http.delete(this.serveUrl +'placement/industrial-tour-and-workshop/' + id,{body:data})
}

postTour(data:any){
    return this.http.post(this.serveUrl +'placement/industrial-tour-and-workshop',data)
}

editTour(id:any,data:any){
    return this.http.put(this.serveUrl +'placement/industrial-tour-and-workshop/'+id,data)
}
}
