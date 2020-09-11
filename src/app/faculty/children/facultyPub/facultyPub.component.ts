import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonService } from "../../providers/common.service";
import { FacultyPubService } from "../../providers/facultyPub.service";
import Swal from 'sweetalert2/dist/sweetalert2.js';

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
  }
  opensweetalert()
  {
    Swal.fire({
        text: 'You have successfully added the Faculty Publication',
        icon: 'success'
      });
  }
  opensweetalertEdit()
  {
    Swal.fire({
        text: 'You have successfully edit the Faculty Publication',
        icon: 'success'
      });
  }
  opensweetalertdng()
  {
   Swal.fire("You have successfully deleted the Faculty Publication")
  }
  public initForm() {
    return new FormGroup({
      branch:new FormControl(this.branch,[Validators.required]),
      paper_title: new FormControl('', [Validators.required]),
      indexing: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      isbn_no: new FormControl('', [Validators.required]),
      volume: new FormControl('', [Validators.required]),
      journal: new FormControl('', [Validators.required]),
      user_id: new FormControl('', [Validators.required]),
    });
  }

  EditForm(e:any) {
    return new FormGroup({
      branch:new FormControl(this.branch,[Validators.required]),
      paper_title: new FormControl(e.paper_title, [Validators.required]),
      indexing: new FormControl(e.indexing, [Validators.required]),
      year: new FormControl(e.year, [Validators.required]),
      isbn_no: new FormControl(e.isbn_no, [Validators.required]),
      volume: new FormControl(e.volume, [Validators.required]),
      journal: new FormControl(e.journal, [Validators.required]),
      user_id: new FormControl(e.user_id, [Validators.required]),
    });
  }

  selectedPublication(e:any){
    this.selected=e;
    this.editPublication = this.EditForm(e);
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
    getPublication(){
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
      this.opensweetalertdng();
    },err=>{

    })
  }

  onSubmit() {
    this.submitProgress=true;
    let formData = new FormData();
    formData.append('branch',this.branch);
    formData.append('User',this.userId);
    formData.append('paper_title', this.publication.value['paper_title']);
    formData.append('indexing', this.publication.value['indexing']);
    formData.append('year', this.publication.value['year']);
    formData.append('isbn_no', this.publication.value['isbn_no']);
    formData.append('volume', this.publication.value['volume']);
    formData.append('journal', this.publication.value['journal']);
    this.fs.postPublication(formData).subscribe(res=>{
      this.submitProgress=false;
      this.getBranch();
      this.opensweetalert();
    },err=>{
        this.submitProgress = false;
    })
  }
  onEditSubmit(id:any){
    this.submitProgress=true;
    let formData = new FormData();
    formData.append('branch',this.branch);
    formData.append('User',this.userId);
    formData.append('paper_title', this.editPublication.value['paper_title']);
    formData.append('indexing', this.editPublication.value['indexing']);
    formData.append('year', this.editPublication.value['year']);
    formData.append('isbn_no', this.editPublication.value['isbn_no']);
    formData.append('volume', this.editPublication.value['volume']);
    formData.append('journal', this.editPublication.value['journal']);
    this.fs.editFacultyPub(id,formData).subscribe(res=>{
      this.submitProgress=false;
      this.getPublication();
      this.opensweetalertEdit();
    },err=>{
        this.submitProgress = false;
    })
  }




}
