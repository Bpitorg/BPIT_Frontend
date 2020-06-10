import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Configuration } from '../../app.constants';
import { CustomHttpService } from '../../default.header.service';

@Injectable()
export class FacultyPubService{
serveUrl:any;

constructor(
    private http:CustomHttpService,
    private con:Configuration,
){
    this.serveUrl=this.con.server;
}

getPublication(branch:any){
    return this.http.get(this.serveUrl + 'departments/'+ branch +'/faculty-publication' )
}

getFaculty(branch:any){
  return this.http.get(this.serveUrl + 'departments/'+ branch +'/faculty' )
}

deleteFacPub(id:any,data:any){
    return this.http.delete(this.serveUrl +'faculty-publications/' + id,{body:data})
}

postPublication(data:any){
    return this.http.post(this.serveUrl +'faculty-publications/post',data)
}

editFacultyPub(id:any,data:any){
    return this.http.put(this.serveUrl +'faculty-publications/'+id,data)
}
}
