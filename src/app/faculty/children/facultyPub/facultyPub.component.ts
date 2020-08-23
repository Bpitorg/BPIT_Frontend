import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonService } from "../../providers/common.service";
import { FacultyPubService } from "../../providers/facultyPub.service";

declare let $:any;
@Component({
  selector: 'facultyPub',
  templateUrl: './facultyPub.component.html',
  styleUrls: ['./facultyPub.component.scss', '../../faculty.component.scss']
})
export class FacultyPubComponent{
public submitProgress: boolean = false;
  public loader:boolean = false;
  public userId:any;
  public publication:FormGroup;
  public branch:any;
  public branchName:any;
  public data:any;
  public data1:any;
  public selected:any;
  public editPublication:FormGroup;
  constructor(
    public cs:CommonService,
    public fs:FacultyPubService
  ) {
  }

  ngOnInit() {
    this.branch=localStorage.getItem('branch');
    this.userId=localStorage.getItem('id');
    this.getBranch();
    this.publication = this.initForm();
    this.editPublication = this.EditForm();
  }

  public initForm() {
    return new FormGroup({
      branch:new FormControl(this.branch,[Validators.required]),
      faculty_publication: new FormControl('', [Validators.required]),
      faculty_belongs_to: new FormControl('', [Validators.required]),
      user_id: new FormControl('', [Validators.required]),
    });
  }

  public EditForm() {
    return new FormGroup({
      branch:new FormControl(this.branch,[Validators.required]),
      faculty_belongs_to: new FormControl('', [Validators.required]),
      faculty_publication: new FormControl('', [Validators.required]),
      user_id: new FormControl('', [Validators.required])
    });
  }
    getBranch(){
    this.cs.getBranchName().subscribe(response=>{
      this.branchName=response.text();
      this.branchName=this.branchName.toLowerCase();
    this.getPublication();
    this.getFaculty();

    },err=>{

    })
    }
    getPublication(){ // ye rha
        this.loader=true
        this.fs.getPublication(this.branchName).subscribe(res=>{
            this.loader=false;
            this.data1=res.json();
        },err=>{
            this.loader=false;
        })
  }

  getFaculty(){
    this.loader=true
    this.fs.getFaculty(this.branchName).subscribe(res=>{
        this.loader=false;
        this.data=res.json();
    },err=>{
        this.loader=false;
    })
  }


  deleteFacpubEvent(id:any){
    let formData = new FormData();
    formData.append('branch',this.branch);
    this.fs.deleteFacPub(id,formData).subscribe(res=>{
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
    formData.append('user_id',this.userId);
    formData.append('faculty_publication', this.publication.value['faculty_publication']);
    formData.append('faculty_belongs_to', this.publication.value['faculty_belongs_to']);
    this.fs.postPublication(formData).subscribe(res=>{
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
    formData.append('faculty_publication', this.editPublication.value['faculty_publication']);
    this.fs.editFacultyPub(id,formData).subscribe(res=>{
      this.submitProgress=false;
      this.getPublication();
      $('#successModal').modal('show');
    },err=>{
        this.submitProgress = false;
    })
  }



  selectedPublication(e:any){
    this.selected=e;
    console.log(e);
  }
}
