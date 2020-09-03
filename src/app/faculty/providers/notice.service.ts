import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Configuration } from '../../app.constants';
import { CustomHttpService } from '../../default.header.service';

@Injectable()
export class NoticeService{
serveUrl:any;

constructor(
    private http:CustomHttpService,
    private con:Configuration,
){
    this.serveUrl=this.con.server;
}

getNotice(branch:any){ //ab check kro
  console.log(branch);
    return this.http.get(this.serveUrl + 'departments/'+ branch +'/notice')
}

deleteNotice(id:any,data:any){
    return this.http.delete(this.serveUrl +'notice/' + id,{body:data})
}

postNotice(data:any){
    return this.http.post(this.serveUrl +'notice/post',data)
}

editNotice(id:any,data:any){
    return this.http.put(this.serveUrl +'notice/' +id,data)
}
getEditNotice(id:any){
  return this.http.get(this.serveUrl+'notice/' + id);
}
}
