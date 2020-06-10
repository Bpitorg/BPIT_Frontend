
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../../app.constants'
import { Router, NavigationStart, NavigationEnd,ActivatedRoute} from '@angular/router';
import { DepartmentsService } from '../../../departments.service';

@Component({
  selector: 'study-material',
  templateUrl: './studyMaterial.component.html',
  styleUrls: ['./studyMaterial.component.scss','../../../departments.component.scss']
})
export class DstudyMaterialComponent implements OnInit {
    serveUrl:any;
    loader:boolean=false;
    url:any;
    mcq:any;
    question:any;
    assignment:any;
    presentation:any;
  constructor(
        private http:HttpClient,
        private con:Configuration,
        private router:Router,
        private ds:DepartmentsService
  ) { 
    this.serveUrl=this.con.url;
    this.url = this.router.url;
    this.url=this.url.split("/").splice(0,4).join("/");
  }

    ngOnInit(){
        this.getMcq();
        this.getPresentation();
        this.getQuestion();
        this.getAssignment();
    }

    getMcq(){
        this.loader=true;
        this.http.get(this.serveUrl + this.url + '/mcq').subscribe(res=>{
            this.loader=false;
            this.mcq=res;
        },err=>{
            this.loader=false;
            
        })
    }

        getAssignment(){
        this.loader=true;
        this.http.get(this.serveUrl + this.url + '/assignment').subscribe(res=>{
            this.loader=false;
            this.assignment=res;
        },err=>{
            this.loader=false;
            
        })
    }

        getPresentation(){
        this.loader=true;
        this.http.get(this.serveUrl + this.url + '/presentation').subscribe(res=>{
            this.loader=false;
            this.presentation=res;
        },err=>{
            this.loader=false;
            
        })
    }

        getQuestion(){
        this.loader=true;
        this.http.get(this.serveUrl + this.url + '/question-paper').subscribe(res=>{
            this.loader=false;
            this.question=res;
        },err=>{
            this.loader=false;
        })
    }

}
