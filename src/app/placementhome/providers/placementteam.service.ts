import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Configuration } from '../../app.constants';
import { CustomHttpService } from '../../default.header.service';

@Injectable()
export class PlacementTeamService{
serveUrl:any;

constructor(
    private http:CustomHttpService,
    private con:Configuration,
){
    this.serveUrl=this.con.server;
}

getTeam(branch:any){
    return this.http.get(this.serveUrl + 'placement/team' )
}

deleteTeam(id:any,data:any){
    return this.http.delete(this.serveUrl +'placement/team/' + id,{body:data})
}

postTeam(data:any){
    return this.http.post(this.serveUrl +'create',data)
}
 
editTeam(id:any,data:any){
    return this.http.put(this.serveUrl +'placement/team/'+id,data)
}
}
