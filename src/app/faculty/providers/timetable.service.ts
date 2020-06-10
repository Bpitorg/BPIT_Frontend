import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Configuration } from '../../app.constants';
import { CustomHttpService } from '../../default.header.service';

@Injectable()
export class TimetableService{
serveUrl:any;

constructor(
    private http:CustomHttpService,
    private con:Configuration,
){
    this.serveUrl=this.con.server;
}

getTimetable(branch:any){
    return this.http.get(this.serveUrl + 'departments/'+ branch +'/time-table')
}

deleteTimetable(id:any,data:any){
    return this.http.delete(this.serveUrl +'time-table/' + id,{body:data})
}

postTimetable(data:any){
    return this.http.post(this.serveUrl +'time-table/post',data)
}

getsection(branch:any){
    return this.http.get(this.serveUrl +'section/' +branch)
}

editTimetable(data:any,id:any){
    return this.http.put(this.serveUrl +'time-table/' + id,data)
}

}
