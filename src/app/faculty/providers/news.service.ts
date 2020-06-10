import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Configuration } from '../../app.constants';
import { CustomHttpService } from '../../default.header.service';

@Injectable()
export class NewsService{
serveUrl:any;

constructor(
    private http:CustomHttpService,
    private con:Configuration,
){
    this.serveUrl=this.con.server;
}

getNews(branch:any){
    return this.http.get(this.serveUrl + 'departments/'+ branch +'/news')
}

deleteNews(id:any,data:any){
    return this.http.delete(this.serveUrl +'news/'+id,{body:data})
}

postNews(data:any){
    return this.http.post(this.serveUrl +'news/post',data)
}

editNews(id:any,data:any){
    return this.http.put(this.serveUrl +'news/'+id,data)
}

}
