import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TrainingsService } from "../../providers/training.service";
import { CommonService } from "../../providers/common.service";
import { CustomHttpService } from "../../../default.header.service";
import { Configuration } from '../../../app.constants';
import { Http, Headers, RequestOptions } from '@angular/http';

declare let $:any;
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
    providers:[CommonService, TrainingsService]
})
export class TrainingComponent implements OnInit {

  public submitProgress: boolean = false;
    public loader:boolean = false;
    public userId:any;
    public Trainings:FormGroup;
    public branch:any;
    public branchName:any;
    public data:any;
    public selected:any;
    public editTrainings:FormGroup;
    constructor(
      private http:CustomHttpService,
      private con:Configuration,
      public cs:CommonService,
      public fs:TrainingsService
    ) {
    }

    ngOnInit() {
      this.branch=localStorage.getItem('branch');
      this.userId=localStorage.getItem('id');
      this.getBranch();
      this.Trainings = this.initForm();
      this.editTrainings = this.EditForm();
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
    this.getTrainings();

    },err=>{

    })
    }
    getTrainings(){
        this.loader=true
        this.fs.getTrainings(this.branchName).subscribe(res=>{
            this.loader=false;
            this.data=res.json();
        },err=>{
            this.loader=false;
        })
  }

  deleteTrainings(id:any){
    let formData = new FormData();
    formData.append('branch',this.branch);
    this.fs.deleteTrainings(id,formData).subscribe(res=>{
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
    formData.append('description', this.Trainings.value['description']);
    formData.append('date_of_upload', this.Trainings.value['date_of_upload']);
    this.fs.postTrainings(formData).subscribe(res=>{
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
    formData.append('description', this.editTrainings.value['description']);
    formData.append('date_of_upload', this.editTrainings.value['date_of_upload']);
    this.fs.editTrainings(id,formData).subscribe(res=>{
      this.submitProgress=false;
      this.getTrainings();
      $('#successModal').modal('show');
    },err=>{
        this.submitProgress = false;
    })
  }



  selectedTrainings(e:any){
    this.selected=e;
    console.log(e);
  }

}
