import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Configuration } from '../../app.constants';
import { CustomHttpService } from '../../default.header.service';

@Injectable()
export class StudentPlacedService{
serveUrl:any;

constructor(
    private http:CustomHttpService,
    private con:Configuration,
){
    this.serveUrl=this.con.server;
}

getStudentPlaced(branch:any){
    return this.http.get(this.serveUrl +'placement/student-placed' )
}

deleteStudentPlaced(id:any,data:any){
    return this.http.delete(this.serveUrl +'placement/student-placed/' + id,{body:data})
}

postStudentPlaced(data:any){
    return this.http.post(this.serveUrl +'placement/student-placed',data)
}

editStudentPlaced(id:any,data:any){
    return this.http.put(this.serveUrl +'placement/student-placed/'+id,data)
}
}
