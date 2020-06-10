import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Configuration } from '../../app.constants';
import { CustomHttpService } from '../../default.header.service';

@Injectable()
export class StudentPubService{
serveUrl:any;

constructor(
    private http:CustomHttpService,
    private con:Configuration,
){
    this.serveUrl=this.con.server;
}

getStudentPub(branch:any){
    return this.http.get(this.serveUrl + 'departments/'+ branch +'/lesson-plan')
}

deleteStudentPub(id:any,data:any){
    return this.http.delete(this.serveUrl +'student-publications/' + id,{body:data})
}

postStudentPub(data:any){
    return this.http.post(this.serveUrl +'student-publications/post',data)
}

editStudentPub(id:any,data:any){
    return this.http.put(this.serveUrl +'student-publications/'+id,data)
}
}
