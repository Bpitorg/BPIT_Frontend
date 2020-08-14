import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Configuration } from '../../app.constants';
import { CustomHttpService } from '../../default.header.service';

@Injectable()
export class HomeService{
serveUrl:any;

constructor(
  private http:CustomHttpService,
  private con:Configuration,
) {
  this.serveUrl=this.con.server;
}

postUser(data:any){

    return this.http.post(this.serveUrl+'create/user',data)
 }

//  postFaculty(data:any){
//      return this.http.post(this.serveUrl+'faculty/create',data)
//   }
}
