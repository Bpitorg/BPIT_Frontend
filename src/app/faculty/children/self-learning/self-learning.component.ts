import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../app.constants';
import { CustomHttpService } from "../../../default.header.service";
import { CommonService } from "../../providers/common.service";
import { SelfLearningService } from "../../providers/selfLearning.service";

declare let $:any;

@Component({
  selector: 'app-self-learning',
  templateUrl: './self-learning.component.html',
  styleUrls: ['./self-learning.component.scss', './../../faculty.component.scss']
})
export class SelfLearningComponent {
  public submitProgress: boolean = false;
  public loader:boolean = false;
  public learning:FormGroup;
  public editSelflearn:FormGroup;
  public branch:any;
  public branchName:any;
  public serveUrl:any;
  public data:any;
  public selected:any

  constructor(
    private http:CustomHttpService,
    private con:Configuration,
    public cs:CommonService,
    public ss:SelfLearningService
  ) {
    this.serveUrl=this.con.server;
  }

  ngOnInit() {
    this.branch=localStorage.getItem('branch');
    // this.branch=3;
    this.getBranch();
    this.learning = this.initForm();
    this.editSelflearn = this.editForm();
  }

  public initForm() {
    return new FormGroup({
      branch:new FormControl(this.branch,[Validators.required]),
      SLLecturePlan: new FormControl('', [Validators.required]),
    });
  }

  public editForm() {
  return new FormGroup({
      branch:new FormControl(this.branch,[Validators.required]),
      SLLecturePlan: new FormControl('', [Validators.required]),
    });
}
    getBranch(){
    this.cs.getBranchName().subscribe(response=>{
      this.branchName=response.text();
      this.branchName=this.branchName.toLowerCase();
    this.getSelfLearning();

    },err=>{

    })
    }
    getSelfLearning(){
        this.loader=true;
        this.ss.getSelfLearning(this.branchName).subscribe(res=>{
            this.loader=false;
            this.data=res.json();
        },err=>{
            this.loader=false;
        })
  }

  deleteSelfLearning(id:any){
    let formData = new FormData();
    formData.append('branch',this.branch);
    this.ss.deleteSelfLearning(id,formData).subscribe(res=>{
      console.log("I am deleted");
      this.getSelfLearning();
  $('#successModal2').modal('show');
    },err=>{

    })
  }

  onEditSubmit(id:any){
    this.submitProgress=true;
    let formData = new FormData();
    formData.append('branch',this.editSelflearn.value['branch']);
    formData.append('SLLecturePlan', this.editSelflearn.value['SLLecturePlan']);
    this.ss.editSelflearn(id,formData).subscribe(res=>{
      this.submitProgress=false;
      this.getSelfLearning();
      $('#successModal').modal('show');
    },err=>{
        this.submitProgress = false;
    })
  }

  onSubmit() {
    this.submitProgress=true;
    let formData = new FormData();
    formData.append('branch',this.learning.value['branch']);
    formData.append('SLLecturePlan', this.learning.value['SLLecturePlan']);
    this.ss.postSelfLearning(formData).subscribe(res=>{
      $('#successModal').modal('show');
      this.submitProgress=false;
      this.getSelfLearning();
    },err=>{
        this.submitProgress = false;
    })
  }


  selectedSelflearn(e:any){
    this.selected=e;
    console.log(e);
  }


}
