import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { StudentPlacedService } from "../../providers/studentplaced.service";
import { CommonService } from "../../providers/common.service";
import { CustomHttpService } from "../../../default.header.service";
import { Configuration } from '../../../app.constants';
import { Http, Headers, RequestOptions } from '@angular/http';

declare let $:any;
@Component({
  selector: 'app-studentplaced',
  templateUrl: './studentplaced.component.html',
  styleUrls: ['./studentplaced.component.scss'],
  providers:[CommonService, StudentPlacedService]
})
export class StudentplacedComponent implements OnInit {

  public submitProgress: boolean = false;
    public loader:boolean = false;
    public userId:any;
    public StudentPlaced:FormGroup;
    public studentplaced: any;
    public branch:any;
    public branchName:any;
    public data:any;
    public file:any;
    public selected:any;
    public editStudentPlaced:FormGroup;
    constructor(
      private http:CustomHttpService,
      private con:Configuration,
      public cs:CommonService,
      public fs:StudentPlacedService
    ) {
    }

    ngOnInit() {
      // this.branch=localStorage.getItem('branch');
      this.userId=localStorage.getItem('id');
      this.getBranch();
      this.StudentPlaced = this.initForm();
      this.editStudentPlaced = this.EditForm();
    }
    public initForm() {
      return new FormGroup({
        branch:new FormControl('',[Validators.required]),
        batch: new FormControl('', [Validators.required]),
        date_of_upload:new FormControl('',[Validators.required]),
        data:new FormControl('',[Validators.required])
      });
    }

    public EditForm() {
      return new FormGroup({
        branch:new FormControl('',[Validators.required]),
        batch: new FormControl('', [Validators.required]),
        date_of_upload:new FormControl('',[Validators.required]),
        data:new FormControl('',[Validators.required])
      });
    }

    getFile(event: any) {
      this.file = event.srcElement.files[0];
    }
    getBranch(){
    this.cs.getBranchName().subscribe(response=>{
      this.branchName=response.text();
      this.branchName=this.branchName.toLowerCase();
    this.getStudentPlaced();

    },err=>{

    })
    }
    getStudentPlaced(){
        this.loader=true
        this.fs.getStudentPlaced(this.branchName).subscribe(res=>{
            this.loader=false;
            this.data=res.json();
        },err=>{
            this.loader=false;
        })
  }

  deleteStudentPlaced(id:any){
    let formData = new FormData();
    formData.append('branch',this.StudentPlaced.value['branch']);
    this.fs.deleteStudentPlaced(id,formData).subscribe(res=>{
      console.log("I am deleted");
      this.getBranch();
      $('#successModal2').modal('show');
    },err=>{

    })
  }

  onSubmit() {
    this.submitProgress=true;
    let formData = new FormData();
    formData.append('branch',this.StudentPlaced.value['branch']);
    formData.append('batch', this.StudentPlaced.value['batch']);  // years aaega ek min dekhne do ye h to
    formData.append('data', this.file);
    formData.append('date_of_upload', this.StudentPlaced.value['date_of_upload']);
    this.fs.postStudentPlaced(formData).subscribe(res=>{
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
    formData.append('branch',this.StudentPlaced.value['branch']);
    formData.append('batch', this.editStudentPlaced.value['batch']);
    formData.append('data', this.file);
    formData.append('date_of_upload', this.editStudentPlaced.value['date_of_upload']);
    this.fs.editStudentPlaced(id,formData).subscribe(res=>{
      this.submitProgress=false;
      this.getStudentPlaced();
      $('#successModal').modal('show');
    },err=>{
        this.submitProgress = false;
    })
  }



  selectedStudentPlaced(e:any){
    this.selected=e;
    console.log(e);
  }
}
