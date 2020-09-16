import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RecruitersService } from "../../providers/recruiters.service";
import { CommonService } from "../../providers/common.service";
import { CustomHttpService } from "../../../default.header.service";
import { Configuration } from '../../../app.constants';
import { Http, Headers, RequestOptions } from '@angular/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';

declare let $: any;

@Component({
  selector: 'app-recruiters',
  templateUrl: './recruiters.component.html',
  styleUrls: ['./recruiters.component.scss'],
  providers: [CommonService, RecruitersService]
})
export class RecruitersComponent implements OnInit {
  public submitProgress: boolean = false;
  public loader: boolean = false;
  public userId: any;
  public Recruiters: FormGroup;
  public branch: any;
  public file: any;
  public branchName: any;
  public data: any;
  public selected: any;
  public editRecruiters: FormGroup;
  constructor(
    private http: CustomHttpService,
    private con: Configuration,
    public cs: CommonService,
    public fs: RecruitersService
  ) {
  }

  ngOnInit() {
    this.branch = localStorage.getItem('branch');
    this.userId = localStorage.getItem('id');
    this.getBranch();
    this.Recruiters = this.initForm();
  }
  opensweetalert() {
    Swal.fire({
      text: 'You have successfully added the recruiter',
      icon: 'success'
    });
  }
  opensweetalertEdit() {
    Swal.fire({
      text: 'You have successfully edit the recruiter',
      icon: 'success'
    });
  }
  opensweetalertdng() {
    Swal.fire("You have successfully deleted the recruiter")
  }
  opensweetalertError() {
    Swal.fire({
      text: 'Please Enter the valid field',
      icon: 'error'
    });
  }
  public initForm() {
    return new FormGroup({
      branch: new FormControl(this.branch, [Validators.required]),
      recruiter_name: new FormControl('', [Validators.required]),
      logo: new FormControl('', [Validators.required])
    });
  }

  EditForm(e: any) {
    return new FormGroup({
      branch: new FormControl(this.branch, [Validators.required]),
      recruiter_name: new FormControl(e.recruiter_name, [Validators.required]),
      logo: new FormControl('', [Validators.required])
    });
  }

  getBranch() {
    this.cs.getBranchName().subscribe(response => {
      this.branchName = response.text();
      this.branchName = this.branchName.toLowerCase();
      this.getRecruiters();

    }, err => {

    })
  }
  getRecruiters() {
    this.loader = true
    this.fs.getRecruiters(this.branchName).subscribe(res => {
      this.loader = false;
      this.data = res.json();
    }, err => {
      this.loader = false;
    })
  }

  deleteRecruiters(id: any) {
    let formData = new FormData();
    formData.append('branch', this.branch);
    this.fs.deleteRecruiters(id, formData).subscribe(res => {
      console.log("I am deleted");
      this.getBranch();
      // $('#successModal2').modal('show');
      this.opensweetalertdng();
    }, err => {

    })
  }

  onSubmit() {
    this.submitProgress = true;
    let formData = new FormData();
    formData.append('branch', this.branch);
    formData.append('recruiter_name', this.Recruiters.value['recruiter_name']);
    formData.append('logo', this.file);
    this.fs.postRecruiters(formData).subscribe(res => {
      this.submitProgress = false;
      this.getBranch();
      // $('#successModal').modal('show');
      this.opensweetalert();
    }, err => {
      this.submitProgress = false;
      this.opensweetalertError();
    })
  }

  getFile(event: any) {
    this.file = event.srcElement.files[0];
  }

  onEditSubmit(id: any) {
    this.submitProgress = true;
    let formData = new FormData();
    formData.append('branch', this.branch);
    formData.append('recruiter_name', this.editRecruiters.value['recruiter_name']);
    formData.append('logo', this.file);
    this.fs.editRecruiters(id, formData).subscribe(res => {
      this.submitProgress = false;
      this.getRecruiters();
      this.opensweetalertEdit();
    }, err => {
      this.submitProgress = false;
      this.opensweetalertError();
    })
  }

  selectedRecruiters(e: any) {
    this.editRecruiters = this.EditForm(e);
    this.selected = e;
  }
}
