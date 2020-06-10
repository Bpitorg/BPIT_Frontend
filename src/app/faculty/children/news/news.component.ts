import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from "../../providers/common.service";
import { NewsService } from "../../providers/news.service";

declare let $: any;
@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss', './../../faculty.component.scss']
})
export class NewsComponent implements OnInit {
  news:any;
  file:any;
  newEdit:any;
  allNews: any;
  branch:any;
  branchName:any;
  loader:Boolean=true;
  submitProgress: Boolean = false;
  modalHeading:string="";
  modalBody:string="";
  public selected:any;
  public editNews:FormGroup;


  constructor(
    public cs:CommonService,
    public ns:NewsService
  ) {
  }

  ngOnInit() {
    this.branch=localStorage.getItem('branch');
    this.getBranchName();
    this.news=this.initForm();
    this.branchName=this.branchs();
    this.newEdit=this.EditForm();

  }

public  initForm(){
    return new FormGroup({
      branch:new FormControl(this.branch,[Validators.required]),
      title: new FormControl('',[Validators.required, Validators.maxLength(250)]),
      date: new FormControl('',[Validators.required]),
      news:new FormControl('', [Validators.required])
    })
  }

  branchs(){
    return new FormGroup({
      branch:new FormControl('',[Validators.required])
    })
  }

public  EditForm(){
    return new FormGroup({
      branch:new FormControl(this.branch,[Validators.required]),
      title: new FormControl('',[Validators.required, Validators.maxLength(250)]),
      date: new FormControl('',[Validators.required]),
      news:new FormControl('', [Validators.required])
    })
  }


onDueDate(e: any) {
    if (new Date(e.target.value) < new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())) {
      alert("Please choose an upcoming date from the calendar.");
      this.news.controls['date'].patchValue(this.getTomorrow());
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

  newsSubmit(){
    this.submitProgress=true;
    let formData = new FormData();
  formData.append('branch',this.news.value['branch']);
    formData.append('title', this.news.value['title']);
    formData.append('date', this.news.value['date']);
   formData.append('news', this.file);
    this.onSubmit(formData);
  }

  newsEditSubmit(id:any){
    this.submitProgress=true;
    let formData = new FormData();
  formData.append('branch',this.newEdit.value['branch']);
    formData.append('title', this.newEdit.value['title']);
    formData.append('date', this.newEdit.value['date']);
   formData.append('news', this.file);
    this.onEditSubmit(id,formData);
  }

    getFile(event: any) {
      this.file = event.srcElement.files[0];
  }

  onSubmit(formData:any){

    this.ns.postNews(formData).subscribe(res=>{
      this.submitProgress=false;
      $('#successModal').modal('show');
      this.getNews();
    },err=>{
      this.submitProgress=false;
    })
  }

  getBranchName(){
      this.cs.getBranchName().subscribe(response=>{
      this.branchName=response.text();
      this.branchName=this.branchName.toLowerCase();
      this.getNews();
    },err=>{

    })
  }

  getNews(){
        this.loader=true
        this.ns.getNews(this.branchName).subscribe(res=>{
            this.loader=false;
            this.allNews=res.json();
        },err=>{
            this.loader=false;
        })
  }


  onEditSubmit(id:any,formData:any){
    this.submitProgress=true;
    this.ns.editNews(id,formData).subscribe(res=>{
      this.submitProgress=false;
      this.getNews();
      $('#successModal').modal('show');
    },err=>{
        this.submitProgress = false;
    })
  }

  deleteNews(id:any){
    this.submitProgress=true;
    let formData = new FormData();
  formData.append('branch',this.branch);
    this.deleteNewsSubmit(id,formData);
  }

  deleteNewsSubmit(id:any,formData:any){
    this.submitProgress=true;
    this.ns.deleteNews(id,formData).subscribe(res=>{
      this.submitProgress=false;
      console.log("I am deleted");
      this.getNews();
       $('#successModal2').modal('show');
    },err=>{

    })
  }

  onEditNews(e:any){
    this.selected=e;
    console.log(e);
  }
}
