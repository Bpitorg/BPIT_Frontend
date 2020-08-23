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
  notice: any;
  file: any;
  serveUrl: any;
  allNotice: any;
  branch: any;
  submitProgress: boolean = false;;
  loader: boolean = true;
  branchName: any;
  editNotice: any;
  selectedNotice: any;
  delete: any;
  constructor(
    private http: CustomHttpService,
    private con: Configuration,
    public cs: CommonService,
    public ns: NoticeService
  ) {
    this.serveUrl = this.con.server;
  }

  ngOnInit() {
    this.branch = localStorage.getItem('branch'); // yha se aani to chahiye console karte hai achha koi function chl bhi rha h? constructor hai na ye?? hn
    // to yhi karado log bs branch k liye h
    console.log(this.branch);

    this.getBranchName(); // iska kya kaam hai phir isi ko khi use kiya h
    this.notice = this.initForm();
    this.editNotice = this.editForm();
    this.delete = this.deleteform();
  }

  deleteform() {
    return new FormGroup({
      branch: new FormControl('', [Validators.required])
    })
  }

  initForm() {
    return new FormGroup({
      branch: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      date: new FormControl('', [Validators.required]),
      display_to_home: new FormControl('', [Validators.required]), // ho gya run krte hai
      examination_notice: new FormControl('false', [Validators.required]),
      notices: new FormControl('', [Validators.required])
    })
  }

  editForm() {
    return new FormGroup({
      branch: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      date: new FormControl('', [Validators.required]),
      display_to_home: new FormControl('', [Validators.required]),
      examination_notice: new FormControl('false', [Validators.required]),
      notices: new FormControl('', [Validators.required])
    })
  }


  onDueDate(e: any) {
    if (new Date(e.target.value) < new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())) {
      alert("Please choose an upcoming date from the calendar.");
      this.notice.controls['date'].patchValue(this.getTomorrow());
    }
  }

  getTomorrow() {
    var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    var day = ("0" + (currentDate.getDate() + 1)).slice(-2)
    var month = ("0" + (currentDate.getMonth() + 1)).slice(-2)
    var year = currentDate.getFullYear()
    let tomorrow = year + '-' + month + '-' + day;
    return tomorrow;
  }
// date k format k liye bhi fun bnaya h accha par title empty kyu bola ye
  // noticeSubmit() {
  //   this.submitProgress = true;
  //   let formData = new FormData();
  //   formData.append('branch', this.branch);
  //   formData.append('title', this.notice.value['title']);
  //   formData.append('date', this.notice.value['date']);
  //   formData.append('examination_notice', this.notice.value['examination_notice']);
  //   formData.append('notices', this.file); jo function change hua h usme dekhte h
  //   this.onSubmit(formData);
  // }


  noticeSubmit(){
    this.submitProgress=true;
    let formData = new FormData();
    formData.append('branch',this.branch); // ab ye nhi pta ki branch ye uthaega ya nhi vo aap dekhlena ya abhi dekte hai run krke
    formData.append('title', this.notice.value['title']);
    formData.append('date', this.notice.value['date']);
    formData.append('examination_notice', this.notice.value['examination_notice']);// ruko
    formData.append('display_to_home', this.notice.value['display_to_home']); //thik h variable ke naam ek min change krne do
    formData.append('notices', this.file);
    this.onSubmit(formData);
  }




  noticeEditSubmit(id:any) {  // to ye nhi aaega
    this.submitProgress = true;
    let formData = new FormData();
    formData.append('branch', this.branch);
    formData.append('title', this.notice.value['title']);
    formData.append('date', this.notice.value['date']);
    formData.append('display_to_home', this.notice.value['display_to_home']);
    formData.append('examination_notice', this.notice.value['examination_notice']);
    formData.append('notices', this.file);
    this.ns.editNotice(id,formData).subscribe(res => { // yha error h sirf id thodi bhejenge data bhi to bhejna h na
       this.submitProgress = true;
       $('#successModal').modal('show');
       this.getNotices();
     }, err => {
       this.submitProgress = false;
     })
  }

  getFile(event: any) {
    this.file = event.srcElement.files[0];
  }

  onSubmit(formData: any) {
    console.log(this.branch);
    this.ns.postNotice(formData).subscribe(res => {
      this.submitProgress = false;
      $('#successModal').modal('show');
      this.getNotices();
    }, err => {
      this.submitProgress = false;
    })
  }
//iski jarurat nhi h kyuki selectedNotice isme phle se hi id bhej chuke h ye variable bnaya h
// ekmin mai bs process copy kr rha hu
// onEditSubmit(formData: any, id:any) {
//     this.ns.editNotice(formData, this.selectedNotice.id).subscribe(res => { // yha error h sirf id thodi bhejenge data bhi to bhejna h na
//      console.log(this.selectedNotice.id);

//       this.submitProgress = true;
//     console.log("onEditSubmit running") /// ye to nhi vo to edit krenge tb hoga ho rha h run
//       $('#successModal').modal('show');
//       this.getNotices();
//     }, err => {
//       this.submitProgress = false;
//     })
//   }// ye log krke dekhte hai

  getNotices() {
    this.loader = true;
    this.ns.getNotice(this.branchName).subscribe(res => { // yha se call to ho rha h to iska mtlb ye chl rha h
      this.loader = false;
      this.allNotice = res.json();
      console.log('getting notices');// ab check krte hhnji
    }, err => {
      this.loader = false;
    })
  }

  getBranchName() {
    this.cs.getBranchName().subscribe(response => {
      // this.branchName=response.text();
      // this.branchName=this.branchName.toLowerCase();
      this.branchName = localStorage.getItem('branch'); // yha se aani to chahiye console karte hai achha koi function chl bhi rha h? constructor hai na ye?? hn
      this.getNotices()

    }, err => {

    })
  }

  noticedeleteSubmit(id: any) {
    this.submitProgress = true;
    let formData = new FormData();
    formData.append('branch', this.branch);
    this.deleteNotice(id, formData);
  }



  deleteNotice(id: any, formdata: any) {
    this.ns.deleteNotice(id, formdata).subscribe(res => {
      this.getNotices();
      $('#successModal2').modal('show');
    }, err => {

    })
  }

  selectNotice(e: any) { // ye function html file me call hua h kya?
    this.selectedNotice = e;// e kya hai?, ye function k andar call hua hoga vha se e ki value milegi
    console.log("Printing e");
    console.log(this.selectedNotice); // ye hua tha? ab hona to chahiye k
  }
}
