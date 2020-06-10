import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Configuration } from '../../app.constants';
import { CustomHttpService } from '../../default.header.service';

@Injectable()
export class PlaceHomeService{
  serveUrl:any;
  constructor(
    private http:CustomHttpService,
    private con:Configuration,
  ) {
    this.serveUrl=this.con.server;
  }

  postUser(data:any){
      return this.http.post(this.serveUrl+'user/create/placement/',data)
   }

   postTeam(data:any){
       return this.http.post(this.serveUrl+'placement/team/',data)
    }

}
