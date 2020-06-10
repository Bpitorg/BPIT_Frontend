import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../app.constants';
import { CustomHttpService } from "../../../default.header.service";
import { CommonService } from "../../providers/common.service";
import { LessonPlanService } from "../../providers/lessonPlan.service";

declare let $: any;
@Component({
  selector: 'lessonplan',
  templateUrl: './lesson-plan.component.html',
  styleUrls: ['./lesson-plan.component.scss', './../../faculty.component.scss']
})
export class LessonPlanComponent implements OnInit {
  lessonplan:any;
  file:any;
  serveUrl:any;
  data:any;
  branch:any;
  branchName:any;
  submitProgress:boolean=false;;
  loader:boolean=true;
  selectedSubject:any;
  public editLessonPlan:FormGroup;
  public selected:any

  constructor(
    private http:CustomHttpService,
    private con:Configuration,
    public cs:CommonService,
    public ls:LessonPlanService
  ) {
    this.serveUrl=this.con.server;
  }

  ngOnInit() {
    this.branch=localStorage.getItem('branch');
    this.lessonplan=this.initForm();
    this.getBranch();
      this.editLessonPlan = this.editForm();
  }

  initForm(){
    return new FormGroup({
      branch:new FormControl(this.branch,[Validators.required]),
      subject: new FormControl(this.selectedSubject,[Validators.required]),
      LecturePlan:new FormControl('',[Validators.required])
    })
  }

  public editForm() {
  return new FormGroup({
      branch:new FormControl(this.branch,[Validators.required]),
      subject: new FormControl(this.selectedSubject,[Validators.required]),
      LecturePlan:new FormControl('',[Validators.required])
  });
}
    getBranch(){
    this.cs.getBranchName().subscribe(response=>{
      this.branchName=response.text();
      this.branchName=this.branchName.toLowerCase();
      this.getSubject();
    this.getData();

    },err=>{

    })
    }
  lessonplanSubmit(){
    let formData = new FormData();
    formData.append('branch',this.lessonplan.value['branch']);
    formData.append('subject',this.lessonplan.value['subject'])
    formData.append('LecturePlan', this.file);
    this.onSubmit(formData);
  }

    getFile(event: any) {
      this.file = event.srcElement.files[0];
  }

  onSubmit(formData:any){
    this.ls.postLessonPlan(formData).subscribe(res=>{
      this.submitProgress=false;
      $('#successModal').modal('show');
      this.getData();
    },err=>{
      this.submitProgress=false;
    })
  }
subjects:any;
  getSubject(){
    this.ls.getSubject(this.branchName).subscribe(res=>{
      this.subjects=res.json();
    },err=>{

    })
  }
    getData(){
        this.loader=true;
        this.ls.getLessonPlan(this.branchName).subscribe(res=>{
            this.loader=false;
            this.data=res.json();
        },err=>{
            this.loader=false;
        })
      }

      onEditSubmit(id:any){
        this.submitProgress=true;
        let formData = new FormData();
        formData.append('branch',this.editLessonPlan.value['branch']);
        formData.append('subject', this.editLessonPlan.value['subject'])
        formData.append('LecturePlan', this.file);
        this.ls.editLessonPlan(id,formData).subscribe(res=>{
          this.submitProgress=false;
          this.getData();
          $('#successModal').modal('show');
        },err=>{
            this.submitProgress = false;
        })
      }


      deleteLessonPlan(id:any){
        let formData = new FormData();
        formData.append('branch',this.branch);
        this.ls.deletelessonPlan(id,formData).subscribe(res=>{
          console.log("I am deleted");
          this.getData();
      $('#successModal2').modal('show');
        },err=>{

        })
      }

      onSelectSubject(e:any){
        this.selectedSubject=e;
      }

      selectedLessonPlan(e:any){
        this.selected=e;
        console.log(e);
      }
}
