import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TrainingsService } from "../../providers/training.service";
import { CommonService } from "../../providers/common.service";
import { CustomHttpService } from "../../../default.header.service";
import { Configuration } from '../../../app.constants';
import { Http, Headers, RequestOptions } from '@angular/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';

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
    }
    opensweetalert()
    {
      Swal.fire({
          text: 'You have successfully added the training',
          icon: 'success'
        });
    }
    opensweetalertEdit()
    {
      Swal.fire({
          text: 'You have successfully edit the training',
          icon: 'success'
        });
    }
    opensweetalertdng()
    {
     Swal.fire("You have successfully deleted the training")
    }
    opensweetalertError() {
      Swal.fire({
        text: 'Please Enter the valid field',
        icon: 'error'
      });
    }
    public initForm() {
      return new FormGroup({
        branch:new FormControl(this.branch,[Validators.required]),
        description: new FormControl('', [Validators.required]),
        company: new FormControl('', [Validators.required]),
        date_of_upload:new FormControl('',[Validators.required])
      });
    }

    EditForm(e:any) {
      return new FormGroup({
        branch:new FormControl(this.branch,[Validators.required]),
        description: new FormControl(e.description, [Validators.required]),
        company: new FormControl(e.description, [Validators.required]),
        date_of_upload:new FormControl(e.date_of_upload,[Validators.required])
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
      this.opensweetalertdng();
    },err=>{

    })
  }

  onSubmit() {
    this.submitProgress=true;
    let formData = new FormData();
    formData.append('branch',this.branch);
    formData.append('description', this.Trainings.value['description']);
    formData.append('company', this.Trainings.value['company']);
    formData.append('date_of_upload', this.Trainings.value['date_of_upload']);
    this.fs.postTrainings(formData).subscribe(res=>{
      this.submitProgress=false;
      this.getBranch();
      // $('#successModal').modal('show');
      this.opensweetalert();
    },err=>{
        this.submitProgress = false;
        this.opensweetalertError();
    })
  }
  onEditSubmit(id:any){
    this.submitProgress=true;
    let formData = new FormData();
    formData.append('branch',this.branch);
    formData.append('description', this.editTrainings.value['description']);
    formData.append('company', this.editTrainings.value['company']);
    formData.append('date_of_upload', this.editTrainings.value['date_of_upload']);
    this.fs.editTrainings(id,formData).subscribe(res=>{
      this.submitProgress=false;
      this.getTrainings();
      this.opensweetalertEdit();
    },err=>{
        this.submitProgress = false;
        this.opensweetalertError();
    })
  }

  selectedTrainings(e:any){
    this.editTrainings = this.EditForm(e);
    this.selected=e;
  }

}
