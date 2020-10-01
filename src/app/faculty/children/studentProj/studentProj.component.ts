import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from "../../providers/common.service";
import { StudentProjService } from "../../providers/studentProj.service";
import Swal from 'sweetalert2/dist/sweetalert2.js';

declare let $: any;
@Component({
  selector: 'studentprojects',
  templateUrl: './studentProj.component.html',
  styleUrls: ['./studentProj.component.scss', './../../faculty.component.scss']
})
export class StudentProjComponent implements OnInit {
  studentprojects:any;
  file:any;
  data:any;
  branchName:any;
  branch:any;
  loader:Boolean=true;
  submitProgress: Boolean = false;
  public editStudentProj:FormGroup;
  public selected:any
  constructor(
    public cs:CommonService,
    public ss:StudentProjService
  ) {
    this.branch=localStorage.getItem('branch');
    this.getBranch();
  }

  ngOnInit() {
    this.studentprojects=this.initForm();
    // this.editStudentProj =  this.editForm(e);
  }
  opensweetalert()
  {
    Swal.fire({
        text: 'You have successfully added the student Project',
        icon: 'success'
      });
  }
  opensweetalertEdit()
  {
   Swal.fire("You have successfully edit the student Project")
  }
  opensweetalertdng()
  {
   Swal.fire("You have successfully deleted the student Project")
  }
  opensweetalertError() {
    Swal.fire({
      text: 'Please Enter the valid field',
      icon: 'error'
    });
  }
  initForm(){
    return new FormGroup({
      branch:new FormControl(this.branch,[Validators.required]),
      Project_title: new FormControl('',[Validators.required, Validators.maxLength(250), Validators.pattern('[A-Za-z]+([\ A-Za-z]+)*')]),
      description: new FormControl('',[Validators.required, Validators.maxLength(600)]),
      project_pic:new FormControl('',[Validators.required])
    })
  }

  public editForm(e: any) {
    return new FormGroup({
      branch:new FormControl(this.branch,[Validators.required]),
      Project_title: new FormControl(e.Project_title,[Validators.required, Validators.maxLength(250), Validators.pattern('[A-Za-z]+([\ A-Za-z]+)*')]),
      description: new FormControl(e.description,[Validators.required, Validators.maxLength(600)]),
      project_pic:new FormControl(e.project_pic,[Validators.required])
    })
}

  studentprojectsSubmit(){
    let formData = new FormData();
    formData.append('branch',this.studentprojects.value['branch']);
    formData.append('Project_title', this.studentprojects.value['Project_title']);
    formData.append('description', this.studentprojects.value['description']);
    formData.append('project_pic', this.file);
    this.onSubmit(formData);
  }

    getFile(event: any) {
      this.file = event.srcElement.files[0];
  }

  onSubmit(formData:any){
    this.ss.postStudentProj(formData).subscribe(res=>{
      this.submitProgress=false;
      // $('#successModal').modal('show');
      this.opensweetalert();
      this.getStudentProjects();
    },err=>{
      this.submitProgress=false;
      this.opensweetalertError();
    })
  }

  onEditSubmit(id:any){
    this.submitProgress=true;
    let formData = new FormData();
    formData.append('branch',this.editStudentProj.value['branch']);
    formData.append('Project_title', this.editStudentProj.value['Project_title']);
    formData.append('description', this.editStudentProj.value['description']);
    formData.append('project_pic', this.file);
    this.ss.editStudentProj(id,formData).subscribe(res=>{
      this.submitProgress=false;
      this.getStudentProjects();
      // $('#successModal').modal('show');
      this.opensweetalertEdit();
    },err=>{
        this.submitProgress = false;
        this.opensweetalertError();
    })
  }

  getBranch(){
    this.cs.getBranchName().subscribe(response=>{
      this.branchName=response.text();
      this.branchName=this.branchName.toLowerCase();
    this.getStudentProjects();

    },err=>{

    })
    }
    getStudentProjects(){
        this.loader=true;
        this.ss.getStudentProj(this.branchName).subscribe(res=>{
            this.loader=false;
            this.data=res.json();
        },err=>{
            this.loader=false;
        })
      }


      deleteFacpubEvent(id:any){
        let formData = new FormData();
        formData.append('branch',this.branch);
        this.ss.deleteStudentProj(id,formData).subscribe(res=>{
          console.log("I am deleted");
          this.getStudentProjects();
      this.opensweetalertdng();
        },err=>{

        })
      }

      selectedStudentProj(e:any){
        this.editStudentProj = this.editForm(e);
        this.selected=e;
        console.log(e);
      }

}
