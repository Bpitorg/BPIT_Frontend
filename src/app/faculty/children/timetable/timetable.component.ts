import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../app.constants';
import { CustomHttpService } from "../../../default.header.service";
import { CommonService } from "../../providers/common.service";
import { TimetableService } from "../../providers/timetable.service";
import Swal from 'sweetalert2/dist/sweetalert2.js';

declare let $:any;
@Component({
  selector: 'timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss', './../../faculty.component.scss']
})
export class TimetableComponent implements OnInit {
  timetable:any;
  file:any;
  serveUrl:any;
  semester: any;
  alltimetable: any;
  editTimetable:any;
  selectedTimetable:any;
  loader:Boolean=true;
  selectedSemester: any;
  submitProgress: Boolean = false;
  branchName: any;
  branchId:any;
  selectedSection:any;

  constructor(
    private http:CustomHttpService,
    private con:Configuration,
    public cs:CommonService,
    public ts:TimetableService
  ) {
    this.serveUrl=this.con.server;
  }

  ngOnInit() {
    this.branchId=localStorage.getItem('branch');
    this.getBranch();
    this.timetable=this.initForm();
    this.getTimetable();
  }
  opensweetalert()
  {
    Swal.fire({
        text: 'You have successfully added the timetable',
        icon: 'success'
      });
  }
  opensweetalertEdit()
  {
   Swal.fire("You have successfully edit the timetable")
  }
  opensweetalertdng()
  {
   Swal.fire("You have successfully deleted the timetable")
  }
    getBranch(){
    this.cs.getBranchName().subscribe(response=>{
      this.branchName=response.text();
      this.branchName=this.branchName.toLowerCase()
      this.getSection();

    },err=>{

    })
    }
  section:any;
  sectionId:any=[];
  getSection(){
    this.ts.getsection(this.branchName).subscribe(res=>{
      this.section=res.json();
      this.sectionId=this.section.id;
      this.getTimetable();
    })
  }

  getTimetable(){
    this.ts.getTimetable(this.branchName).subscribe(res=>{
      this.alltimetable=res.json();
      this.loader=false;
    },err=>{

    })
  }


    deleteTimetable(id:any){
      let formData = new FormData();
      formData.append('branch',this.branchId);
      this.ts.deleteTimetable(id,formData).subscribe(res=>{
        console.log("I am deleted");
        this.getTimetable();
    // $('#successModal2').modal('show');
    this.opensweetalertdng();
      },err=>{

      })
    }

    initForm(){
    return new FormGroup({
      branch:new FormControl(this.branchId,[Validators.required]),
      semester: new FormControl('', [Validators.required]),
      branch_section: new FormControl(this.selectedSection,[Validators.required]),
      time_table:new FormControl('', [Validators.required])
    })
  }

  editForm(e:any){
    return new FormGroup({
      branch:new FormControl(this.branchId,[Validators.required]),
      semester: new FormControl(e.semester, [Validators.required]),
      branch_section: new FormControl(e.branch_section,[Validators.required]),
      time_table:new FormControl('', [Validators.required]),
      // year:new FormControl('second',[Validators.required])
    })
  }

  selectTimetable(e:any){
    this.selectedTimetable=e;
    this.editTimetable =this.editForm(e);
  }


    getFile(event: any) {
      this.file = event.srcElement.files[0];
  }
    timetableSubmit(){
    this.submitProgress=true;
    let formData = new FormData();
    formData.append('semester', this.timetable.value['semester']);
    formData.append('branch',this.timetable.value['branch']);
    formData.append('branch_section', this.timetable.value['branch_section']);
    formData.append('time_table', this.file);
    this.onSubmit(formData);
  }

    editTimetableSubmit(){
    this.submitProgress=true;
    let formData = new FormData();
    formData.append('semester', this.editTimetable.value['semester']);
    formData.append('branch',this.editTimetable.value['branch']);
    formData.append('branch_section', this.editTimetable.value['branch_section']);
    formData.append('time_table', this.file);
    console.log(this.editTimetable.value['semester']);

    this.onEditSubmit(formData);
  }

  onSubmit(formData:any){
    this.ts.postTimetable(formData).subscribe(res=>{
      this.submitProgress=false;
      // $('#successModal').modal('show');
      this.opensweetalert();
      this.getTimetable();
    },err=>{
      this.submitProgress=false;
    })
  }

onEditSubmit(formData:any){
    this.ts.editTimetable(formData,this.selectedTimetable.id).subscribe(res=>{
      this.submitProgress=false;
      // $('#successModal').modal('show');
      this.opensweetalertEdit();
      this.getTimetable();
    },err=>{
      this.submitProgress=false;
    })
  }

  onSelectSection(e:any){
    this.selectedSection=e;

  }


}
