import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IndusTourService } from "../../providers/industour.service";
import { CommonService } from "../../providers/common.service";
import { CustomHttpService } from "../../../default.header.service";
import { Configuration } from '../../../app.constants';
import { Http, Headers, RequestOptions } from '@angular/http';

declare let $: any;
@Component({
  selector: 'app-industour',
  templateUrl: './industour.component.html',
  styleUrls: ['./industour.component.scss'],
  providers: [CommonService, IndusTourService]
})
export class IndustourComponent implements OnInit {

  public submitProgress: boolean = false;
  public loader: boolean = false;
  public userId: any;
  public Tour: FormGroup;
  public branch: any;
  public branchName: any;
  public data: any;
  public selected: any;
  public editTour: FormGroup;
  constructor(
    private http: CustomHttpService,
    private con: Configuration,
    public cs: CommonService,
    public fs: IndusTourService
  ) {
  }

  ngOnInit() {
    // this.branch=localStorage.getItem('branch');
    this.userId = localStorage.getItem('id');
    this.getBranch();
    this.Tour = this.initForm();
    this.editTour = this.EditForm();
  }
  public initForm() {
    return new FormGroup({
      branch: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required]),
      participants: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required])
    });
  }

  public EditForm() {
    return new FormGroup({
      branch: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required]),
      participants: new FormControl('', [Validators.required])
    });
  }

  getBranch() {
    this.cs.getBranchName().subscribe(response => {
      this.branchName = response.text();
      this.branchName = this.branchName.toLowerCase();
      this.getTour();

    }, err => {

    })
  }
  getTour() {
    this.loader = true
    this.fs.getTour(this.branchName).subscribe(res => {
      this.loader = false;
      this.data = res.json();
    }, err => {
      this.loader = false;
    })
  }

  deleteTour(id: any) {
    let formData = new FormData();
    // formData.append('branch',this.branch);
    this.fs.deleteTour(id, formData).subscribe(res => {
      console.log("I am deleted");
      this.getBranch();
      $('#successModal2').modal('show');
    }, err => {

    })
  }

  onSubmit() {
    this.submitProgress = true;
    let formData = new FormData();
    formData.append('branch',this.Tour.value['branch']);
    formData.append('date', this.Tour.value['date']);
    formData.append('description', this.Tour.value['description']);
    formData.append('participants', this.Tour.value['participants']);
    formData.append('company', this.Tour.value['company']);
    this.fs.postTour(formData).subscribe(res => {
      this.submitProgress = false;
      // this.getBranch();
      $('#successModal').modal('show');
    }, err => {
      this.submitProgress = false;
    })
  }
  onEditSubmit(id: any) {
    this.submitProgress = true;
    let formData = new FormData();
    formData.append('branch',this.editTour.value['branch']);
    formData.append('date', this.editTour.value['date']);
    formData.append('description', this.editTour.value['description']);
    formData.append('participants', this.editTour.value['participants']);
    formData.append('company', this.editTour.value['company']);
    this.fs.editTour(id, formData).subscribe(res => {
      this.submitProgress = false;
      this.getTour();
      $('#successModal').modal('show');
    }, err => {
      this.submitProgress = false;
    })
  }



  selectedTour(e: any) {
    this.selected = e;
    console.log(e);
  }
}
