import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Configuration } from '../../app.constants';
import { CustomHttpService } from '../../default.header.service';

@Injectable()
export class StudentProjService{
serveUrl:any;

constructor(
    private http:CustomHttpService,
    private con:Configuration,
){
    this.serveUrl=this.con.server;
}

getStudentProj(branch:any){
    return this.http.get(this.serveUrl + 'departments/'+ branch +'/student-projects')
}

deleteStudentProj(id:any,data:any){
    return this.http.delete(this.serveUrl +'student-projects/' + id,{body:data})
}

postStudentProj(data:any){
    return this.http.post(this.serveUrl +'student-projects/post',data)
}

editStudentProj(id:any,data:any){
    return this.http.put(this.serveUrl +'student-projects/'+id,data)
}

}
