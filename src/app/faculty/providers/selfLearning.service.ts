import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Configuration } from '../../app.constants';
import { CustomHttpService } from '../../default.header.service';

@Injectable()
export class SelfLearningService{
serveUrl:any;

constructor(
    private http:CustomHttpService,
    private con:Configuration,
){
    this.serveUrl=this.con.server;
}

getSelfLearning(branch:any){
    return this.http.get(this.serveUrl + 'departments/'+ branch +'/self-learning')
}

deleteSelfLearning(id:any,data:any){
    return this.http.delete(this.serveUrl +'self-learning/' + id,{body:data})
}

postSelfLearning(data:any){
    return this.http.post(this.serveUrl +'self-learning/post',data)
}

editSelflearn(id:any,data:any){
    return this.http.put(this.serveUrl +'self-learning/'+id,data)
}

}
