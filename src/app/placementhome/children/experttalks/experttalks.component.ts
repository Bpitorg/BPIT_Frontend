import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ExpertTalksService } from "../../providers/experttalks.service";
import { CommonService } from "../../providers/common.service";
import { CustomHttpService } from "../../../default.header.service";
import { Configuration } from '../../../app.constants';
import { Http, Headers, RequestOptions } from '@angular/http';

declare let $:any;
@Component({
  selector: 'app-experttalks',
  templateUrl: './experttalks.component.html',
  styleUrls: ['./experttalks.component.scss'],
  providers:[CommonService, ExpertTalksService]
})
export class ExperttalksComponent {

  public submitProgress: boolean = false;
    public loader:boolean = false;
    public userId:any;
    public Talk:FormGroup;
    public branch:any;
    public branchName:any;
    public data:any;
    public selected:any;
    public editTalk:FormGroup;
    constructor(
      private http:CustomHttpService,
      private con:Configuration,
      public cs:CommonService,
      public fs:ExpertTalksService
    ) {
    }

    ngOnInit() {
      this.branch=localStorage.getItem('branch');
      this.userId=localStorage.getItem('id');
      this.getBranch();
      this.Talk = this.initForm();
      this.editTalk = this.EditForm();
    }
    public initForm() {
      return new FormGroup({
        branch:new FormControl(this.branch,[Validators.required]),
        description: new FormControl('', [Validators.required]),
        date_of_upload:new FormControl('',[Validators.required])
      });
    }

    public EditForm() {
      return new FormGroup({
        branch:new FormControl(this.branch,[Validators.required]),
        description: new FormControl('', [Validators.required]),
        date_of_upload:new FormControl('',[Validators.required])
      });
    }

    getBranch(){
    this.cs.getBranchName().subscribe(response=>{
      this.branchName=response.text();
      this.branchName=this.branchName.toLowerCase();
    this.getTalk();

    },err=>{

    })
    }
    getTalk(){
        this.loader=true
        this.fs.getTalk(this.branchName).subscribe(res=>{
            this.loader=false;
            this.data=res.json();
        },err=>{
            this.loader=false;
        })
  }

  deleteTalk(id:any){
    let formData = new FormData();
    formData.append('branch',this.branch);
    this.fs.deleteTalk(id,formData).subscribe(res=>{
      console.log("I am deleted");
      this.getBranch();
      $('#successModal2').modal('show');
    },err=>{

    })
  }

  onSubmit() {
    this.submitProgress=true;
    let formData = new FormData();
    formData.append('branch',this.branch);
    formData.append('description', this.Talk.value['description']);
    formData.append('date_of_upload', this.Talk.value['date_of_upload']);
    this.fs.postTalk(formData).subscribe(res=>{
      this.submitProgress=false;
      this.getBranch();
      $('#successModal').modal('show');
    },err=>{
        this.submitProgress = false;
    })
  }
  onEditSubmit(id:any){
    this.submitProgress=true;
    let formData = new FormData();
    formData.append('branch',this.branch);
    formData.append('description', this.editTalk.value['description']);
    formData.append('date_of_upload', this.editTalk.value['date_of_upload']);
    this.fs.editTalk(id,formData).subscribe(res=>{
      this.submitProgress=false;
      this.getTalk();
      $('#successModal').modal('show');
    },err=>{
        this.submitProgress = false;
    })
  }



  selectedTalk(e:any){
    this.selected=e;
    console.log(e);
  }
}
