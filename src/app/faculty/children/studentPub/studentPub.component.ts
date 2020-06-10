import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../app.constants';
import { CustomHttpService } from "../../../default.header.service";
import { CommonService } from "../../providers/common.service";
import { StudentPubService } from "../../providers/studentPub.service";
declare let $:any;
@Component({
  selector: 'studentPub',
  templateUrl: './studentPub.component.html',
  styleUrls: ['./studentPub.component.scss', './../../faculty.component.scss']
})
export class StudentPubComponent {
  public submitProgress: boolean = false;
  public loader:boolean = false;
  public publication:FormGroup;
  public editPublication:FormGroup;
  public branch:any;
  public branchName:any;
  public serveUrl:any;
  public data:any;
  public selected:any;
  faculty_id:any;
  constructor(
    private http:CustomHttpService,
    private con:Configuration,
    public cs:CommonService,
    public ss:StudentPubService
  ) {
    this.serveUrl=this.con.server;
  }

  ngOnInit() {
    this.branch=localStorage.getItem('branch');
    this.faculty_id=localStorage.getItem('faculty_id');
    this.getBranch();
    this.publication = this.initForm();
    this.editForm();
  }

  public initForm() {
    return new FormGroup({
      branch:new FormControl(this.branch,[Validators.required]),
      student_publication: new FormControl('', [Validators.required]),
    });
  }

    public editForm() {
      this.editPublication = new FormGroup({
      branch:new FormControl(this.branch,[Validators.required]),
      student_publication: new FormControl('', [Validators.required]),
    });
  }

    getBranch(){
    this.cs.getBranchName().subscribe(response=>{
      this.branchName=response.text();
      this.branchName=this.branchName.toLowerCase();
    this.getPublication();

    },err=>{

    })
    }
    getPublication(){
        this.loader=true
        this.http.get(this.serveUrl + 'departments/'+ this.branchName +'/student-publication').subscribe(res=>{
            this.loader=false;
            this.data=res.json();
        },err=>{
            this.loader=false;
        })
  }

  onSubmit() {
    this.submitProgress=true;
    let formData = new FormData();
    formData.append('branch',this.publication.value['branch']);
    formData.append('student_publication', this.publication.value['student_publication']);
    this.ss.postStudentPub(formData).subscribe(res=>{
      this.submitProgress=false;
      this.getPublication();
      $('#successModal').modal('show');
    },err=>{
        this.submitProgress = false;
    })
  }

  onEditSubmit(id:any){
    this.submitProgress=true;
    let formData = new FormData();
    formData.append('branch',this.publication.value['branch']);
    formData.append('student_publication', this.editPublication.value['student_publication']);
    this.ss.editStudentPub(id,formData).subscribe(res=>{
      this.submitProgress=false;
      this.getPublication();
      $('#successModal').modal('show');
    },err=>{
        this.submitProgress = false;
    })
  }

  deletestudpub(id:any){
    let formData = new FormData();
    formData.append('branch',this.publication.value['branch']);
    this.ss.deleteStudentPub(id,formData).subscribe(res=>{
      console.log("I am deleted");
      this.getBranch();
      $('#successModal2').modal('show');
    },err=>{

    })
  }

  selectedPublication(e:any){
    this.selected=e;
    console.log(e);
  }

}
