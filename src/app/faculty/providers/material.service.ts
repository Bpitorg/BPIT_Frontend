import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Configuration } from '../../app.constants';
import { CustomHttpService } from '../../default.header.service';

@Injectable()
export class StudyMaterialService{
serveUrl:any;

constructor(
    private http:CustomHttpService,
    private con:Configuration,
){
    this.serveUrl=this.con.server;
}
//mcq operation==================================
getMcq(branch:any){
    return this.http.get(this.serveUrl + 'departments/'+ branch +'/study-material/mcq')
}



deleteMcq(id:any,data:any){
    return this.http.delete(this.serveUrl +'study-material/mcq/'+id,{body:data})
}

// assignment operations=========================
getAssignment(branch:any){
    return this.http.get(this.serveUrl + 'departments/'+ branch +'/study-material/assignment')
}

deleteAssignment(id:any,data:any){
    return this.http.delete(this.serveUrl +'study-material/assignment/'+id,{body:data})
}


//question Paper operations============================
getQuestionPaper(branch:any){
    return this.http.get(this.serveUrl + 'departments/'+ branch +'/study-material/question-paper')
}

deleteQuestionPaper(id:any,data:any){
    return this.http.delete(this.serveUrl +'study-material/question-paper/'+ id,{body:data})
}


//presentation operations=============
getPresentation(branch:any){
    return this.http.get(this.serveUrl + 'departments/'+ branch +'/study-material/presentation')
}

deletePresentation(id:any,data:any){
    return this.http.delete(this.serveUrl +'study-material/presentation/'+ id,{body:data})
}

//common post for mcq, presentation, question paper, assignment
postStudyMaterial(url,data:any){
    return  this.http.post(this.serveUrl + "study-material/post" + url,data)
}

getSubject(branch:any){
    return this.http.get(this.serveUrl +'subject/' +branch)
}
}
