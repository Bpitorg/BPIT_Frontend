import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../app.constants';
import { CustomHttpService } from "../../../default.header.service";
import { CommonService } from "../../providers/common.service";
import { NoticeService } from "../../providers/notice.service";

declare let $: any;
@Component({
  selector: 'notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss', './../../faculty.component.scss']
})
export class NoticesComponent implements OnInit {
  notice:any;
  file:any;
  serveUrl:any;
  allNotice:any;
  branch:any;
  submitProgress:boolean=false;;
  loader:boolean=true;
  branchName:any;
  editNotice:any;
  selectedNotice:any;
  delete:any;
  constructor(
    private http:CustomHttpService,
    private con:Configuration,
    public cs:CommonService,
    public ns:NoticeService
  ) {
    this.serveUrl=this.con.server;
  }

  ngOnInit() {
    this.branch=localStorage.getItem('branch');
    this.getBranchName();
    this.notice=this.initForm();
    this.editNotice=this.editForm();
    this.delete=this.deleteform();
  }

  deleteform(){
    return new FormGroup({
      branch:new FormControl('',[Validators.required])
})
}

  initForm(){
    return new FormGroup({
      branch:new FormControl('',[Validators.required]),
      title: new FormControl('',[Validators.required, Validators.maxLength(250)]),
      date: new FormControl('',[Validators.required]),
      examination_notice: new FormControl('false',[Validators.required]),
      notices:new FormControl('',[Validators.required])
    })
  }

    editForm(){
    return new FormGroup({
      branch:new FormControl('',[Validators.required]),
      title: new FormControl('',[Validators.required, Validators.maxLength(250)]),
      date: new FormControl('',[Validators.required]),
      examination_notice: new FormControl('false',[Validators.required]),
      notices:new FormControl('',[Validators.required])
    })
  }


onDueDate(e: any) {
    if (new Date(e.target.value) < new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())) {
      alert("Please choose an upcoming date from the calendar.");
      this.notice.controls['date'].patchValue(this.getTomorrow());
    }
  }

  getTomorrow(){
    var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    var day = ("0" + (currentDate.getDate() + 1)).slice(-2)
    var month = ("0" + (currentDate.getMonth() + 1)).slice(-2)
    var year = currentDate.getFullYear()
    let tomorrow = year + '-' + month + '-' + day;
    return tomorrow;
  }

  noticeSubmit(){
    this.submitProgress=true;
    let formData = new FormData();
    formData.append('branch',this.branch);
    formData.append('title', this.notice.value['title']);
    formData.append('date', this.notice.value['date']);
    formData.append('examination_notice', this.notice.value['examination_notice']);
    formData.append('notices', this.file);
    this.onSubmit(formData);
  }

  noticeEditSubmit(){
     this.submitProgress=true;
    let formData = new FormData();
    formData.append('branch',this.branch);
    formData.append('title', this.editNotice.value['title']);
    formData.append('date', this.editNotice.value['date']);
    formData.append('examination_notice', this.editNotice.value['examination_notice']);
    formData.append('notices', this.file);
    this.onEditSubmit(formData);
  }

    getFile(event: any) {
      this.file = event.srcElement.files[0];
  }

  onSubmit(formData:any){
    console.log(this.branch);
    this.ns.postNotice(formData).subscribe(res=>{
      this.submitProgress=false;
      $('#successModal').modal('show');
      this.getNotices();
    },err=>{
        this.submitProgress = false;
    })
  }

  onEditSubmit(formData:any){
      this.ns.editNotice(formData,this.selectedNotice.id).subscribe(res=>{
      this.submitProgress=false;
      $('#successModal').modal('show');
      this.getNotices();
    },err=>{
        this.submitProgress = false;
    })
  }

  getNotices(){
    this.loader=true;
    this.ns.getNotice(this.branchName).subscribe(res=>{
      this.loader=false;
      this.allNotice=res.json();
    },err=>{
      this.loader=false;
    })
  }

    getBranchName(){
      this.cs.getBranchName().subscribe(response=>{
      this.branchName=response.text();
      this.branchName=this.branchName.toLowerCase();
      this.getNotices();
    },err=>{

    })
  }

  noticedeleteSubmit(id:any){
     this.submitProgress=true;
    let formData = new FormData();
    formData.append('branch',this.branch);
    this.deleteNotice(id,formData);
  }



  deleteNotice(id:any,formdata:any){
    this.ns.deleteNotice(id,formdata).subscribe(res=>{
      this.getNotices();
      $('#successModal2').modal('show');
    },err=>{

    })
  }

  selectNotice(e:any){
    this.selectedNotice=e;
    console.log(this.selectedNotice);
  }
}
