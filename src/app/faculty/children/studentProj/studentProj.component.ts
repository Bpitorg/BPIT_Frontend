import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from "../../providers/common.service";
import { StudentProjService } from "../../providers/studentProj.service";

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
    this.editStudentProj =  this.editForm();
  }

  initForm(){
    return new FormGroup({
      branch:new FormControl(this.branch,[Validators.required]),
      Project_title: new FormControl('',[Validators.required, Validators.maxLength(250)]),
      description: new FormControl('',[Validators.required, Validators.maxLength(600)]),
      project_pic:new FormControl('',[Validators.required])
    })
  }

  public editForm() {
    return new FormGroup({
      branch:new FormControl(this.branch,[Validators.required]),
      Project_title: new FormControl('',[Validators.required, Validators.maxLength(250)]),
      description: new FormControl('',[Validators.required, Validators.maxLength(600)]),
      project_pic:new FormControl('',[Validators.required])
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
      $('#successModal').modal('show');
      this.getStudentProjects();
    },err=>{
      this.submitProgress=false;
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
      $('#successModal').modal('show');
    },err=>{
        this.submitProgress = false;
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
      $('#successModal2').modal('show');
        },err=>{

        })
      }

      selectedStudentProj(e:any){
        this.selected=e;
        console.log(e);
      }

}
