import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Configuration } from '../../app.constants';
import { CustomHttpService } from '../../default.header.service';

@Injectable()
export class LessonPlanService{
serveUrl:any;

constructor(
    private http:CustomHttpService,
    private con:Configuration,
){
    this.serveUrl=this.con.server;
}

getLessonPlan(branch:any){
    return this.http.get(this.serveUrl + 'departments/'+ branch +'/lesson-plan')
}

deletelessonPlan(id:any,data:any){
    return this.http.delete(this.serveUrl +'lesson-plan/' + id,{body:data})
}

postLessonPlan(data:any){
    return this.http.post(this.serveUrl +'lesson-plan/post',data)
}

getSubject(branch:any){
    return this.http.get(this.serveUrl +'subject/' +branch)
}

editLessonPlan(id:any,data:any){
    return this.http.put(this.serveUrl +'lesson-plan/'+id,data)
}
}
