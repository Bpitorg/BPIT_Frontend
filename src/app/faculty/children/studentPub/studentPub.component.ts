import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../app.constants';
import { CustomHttpService } from "../../../default.header.service";
import { CommonService } from "../../providers/common.service";
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { StudentPubService } from "../../providers/studentPub.service";
declare let $: any;
@Component({
  selector: 'studentPub',
  templateUrl: './studentPub.component.html',
  styleUrls: ['./studentPub.component.scss', './../../faculty.component.scss']
})
export class StudentPubComponent {
  public submitProgress: boolean = false;
  public loader: boolean = false;
  public publication: FormGroup;
  public editPublication: FormGroup;
  public branch: any;
  public branchName: any;
  public serveUrl: any;
  public data: any;
  public selected: any;
  faculty_id: any;
  constructor(
    private http: CustomHttpService,
    private con: Configuration,
    public cs: CommonService,
    public ss: StudentPubService
  ) {
    this.serveUrl = this.con.server;
  }

  ngOnInit() {
    this.branch = localStorage.getItem('branch');
    this.faculty_id = localStorage.getItem('faculty_id');
    this.getBranch();
    this.publication = this.initForm();
    // this.editForm();
  }

  public initForm() {
    return new FormGroup({
      branch: new FormControl(this.branch, [Validators.required]),
      title: new FormControl('', [Validators.required]),
      authors: new FormControl('', [Validators.required]),
      venue: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      conference_name: new FormControl('', [Validators.required])
    });
  }
  opensweetalert()
  {
    Swal.fire({
        text: 'You have successfully added the student Publication',
        icon: 'success'
      });
  }
  opensweetalertEdit()
  {
   Swal.fire("You have successfully edit the student Publication")
  }
  opensweetalertdng()
  {
   Swal.fire("You have successfully deleted the student Publication")
  }

  editForm(e: any) {
    return new FormGroup({
      branch: new FormControl(this.branch, [Validators.required]),
      title: new FormControl(e.title, [Validators.required]),
      authors: new FormControl(e.authors, [Validators.required]),
      venue: new FormControl(e.venue, [Validators.required]),
      year: new FormControl(e.year, [Validators.required]),
      conference_name: new FormControl(e.conference_name, [Validators.required])
    });
  }

  selectedPublication(e: any) {
    this.editPublication = this.editForm(e);
    this.selected = e;
  }

  getBranch() {
    this.cs.getBranchName().subscribe(response => {
      this.branchName = response.text();
      this.branchName = this.branchName.toLowerCase();
      this.getPublication();

    }, err => {

    })
  }
  getPublication() {
    this.loader = true
    this.http.get(this.serveUrl + 'departments/' + this.branchName + '/student-publication').subscribe(res => {
      this.loader = false;
      this.data = res.json();
    }, err => {
      this.loader = false;
    })
  }

  onSubmit() {
    this.submitProgress = true;
    let formData = new FormData();
    formData.append('branch', this.publication.value['branch']);
    formData.append('title', this.publication.value['title']);
    formData.append('authors', this.publication.value['authors']);
    formData.append('venue', this.publication.value['venue']);
    formData.append('year', this.publication.value['year']);
    formData.append('conference_name', this.publication.value['conference_name']);
    this.ss.postStudentPub(formData).subscribe(res => {
      this.submitProgress = false;
      this.getPublication();
      // $('#successModal').modal('show');
      this.opensweetalert();
    }, err => {
      this.submitProgress = false;
    })
  }

  onEditSubmit(id: any) {
    this.submitProgress = true;
    let formData = new FormData();
    formData.append('branch', this.editPublication.value['branch']);
    formData.append('title', this.editPublication.value['title']);
    formData.append('authors', this.editPublication.value['authors']);
    formData.append('venue', this.editPublication.value['venue']);
    formData.append('year', this.editPublication.value['year']);
    formData.append('conference_name', this.editPublication.value['conference_name']);
    this.ss.editStudentPub(id, formData).subscribe(res => {
      this.submitProgress = false;
      this.getPublication();
      // $('#successModal').modal('show');
      this.opensweetalertEdit();
    }, err => {
      this.submitProgress = false;
    })
  }

  deletestudpub(id: any) {
    let formData = new FormData();
    formData.append('branch', this.publication.value['branch']);
    this.ss.deleteStudentPub(id, formData).subscribe(res => {
      console.log("I am deleted");
      this.getBranch();
      // $('#successModal2').modal('show');
      this.opensweetalertdng();
    }, err => {

    })
  }

}
