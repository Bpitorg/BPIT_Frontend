import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Configuration } from '../../app.constants';
import { CustomHttpService } from '../../default.header.service';

@Injectable()
export class TrainingsService{
serveUrl:any;

constructor(
    private http:CustomHttpService,
    private con:Configuration,
){
    this.serveUrl=this.con.server;
}

getTrainings(branch:any){
    return this.http.get(this.serveUrl + 'placement/trainings' )
}

deleteTrainings(id:any,data:any){
    return this.http.delete(this.serveUrl +'placement/trainings/' + id,{body:data})
}

postTrainings(data:any){
    return this.http.post(this.serveUrl +'placement/trainings',data)
}

editTrainings(id:any,data:any){
    return this.http.put(this.serveUrl +'placement/trainings/'+id,data)
}
}
