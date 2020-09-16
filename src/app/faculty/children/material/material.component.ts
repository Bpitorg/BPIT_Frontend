import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from "../../providers/common.service";
import { StudyMaterialService } from "../../providers/material.service";
import Swal from 'sweetalert2/dist/sweetalert2.js';

declare let $: any;
@Component({
  selector: 'material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss', './../../faculty.component.scss']
})
export class MaterialComponent {

  subjects: any;
  branchName: any;
  branchId: any;
  mcq: FormGroup;
  presentation: FormGroup;
  assignment: FormGroup;
  questionPaper: FormGroup;
  selectedSubject: any;
  sub: any;
  file: any;
  subUrl: any;
  submitProgress: boolean = false;
  content: any;
  loader: any;
  allMcq: any
  allAssignment: any;
  allPresentation: any;
  allQuestionPaper: any;
  formData: any;

  constructor(
    public cs: CommonService,
    public ss: StudyMaterialService
  ) {
    this.branchId = localStorage.getItem('branch');
    this.getBranchName();
    this.mcq = this.mcqForm();
    this.presentation = this.presentationForm();
    this.assignment = this.assignmentForm();
    this.questionPaper = this.questionPaperForm();

  }
  opensweetalert() {
    Swal.fire({
      text: 'You have successfully added the content',
      icon: 'success'
    });
  }
  opensweetalertdng() {
    Swal.fire("You have successfully deleted the content")
  }
  opensweetalertError() {
    Swal.fire({
      text: 'Please Enter the valid field',
      icon: 'error'
    });
  }
  getBranchName() {
    this.cs.getBranchName().subscribe(response => {
      this.branchName = response.text();
      this.branchName = this.branchName.toLowerCase();
      this.getSubject();
      this.getMcq();
      this.getAssignment();
      this.getPresentation();
      this.getQuestionPaper();
    }, err => {

    })
  }
  getSubject() {
    this.ss.getSubject(this.branchName).subscribe(response => {
      this.subjects = response.json();
    })
  }

  onSubjectChange(e: any) {
    this.selectedSubject = e;
  }

  getFile(event: any) {
    this.file = event.srcElement.files[0];
  }

  mcqForm() {
    return new FormGroup({
      branch: new FormControl(this.branchId, [Validators.required]),
      subject: new FormControl(this.selectedSubject, [Validators.required]),
      MCQ: new FormControl('', [Validators.required])
    })
  }

  assignmentForm() {
    return new FormGroup({
      branch: new FormControl(this.branchId, [Validators.required]),
      subject: new FormControl(this.selectedSubject, [Validators.required]),
      Assignment: new FormControl('', [Validators.required])
    })
  }

  presentationForm() {
    return new FormGroup({
      branch: new FormControl(this.branchId, [Validators.required]),
      subject: new FormControl(this.selectedSubject, [Validators.required]),
      presentation: new FormControl('', [Validators.required])
    })
  }

  questionPaperForm() {
    return new FormGroup({
      branch: new FormControl(this.branchId, [Validators.required]),
      subject: new FormControl(this.selectedSubject, [Validators.required]),
      QuestionPaper: new FormControl('', [Validators.required])
    })
  }

  onMcq() {
    let formData = new FormData();
    formData.append('branch', this.mcq.value['branch']);
    formData.append('subject', this.mcq.value['subject']);
    formData.append('MCQ', this.file);
    this.subUrl = "mcq/"
    this.onSubmit(formData);
    this.content = "mcq";
  }

  onPresentation() {
    let formData = new FormData();
    formData.append('branch', this.mcq.value['branch']);
    formData.append('subject', this.mcq.value['subject']);
    formData.append('presentation', this.file);
    this.subUrl = "presentation/"
    this.onSubmit(formData);
    this.content = "presentation";
  }

  onAssignment() {
    let formData = new FormData();
    formData.append('branch', this.mcq.value['branch']);
    formData.append('subject', this.mcq.value['subject']);
    formData.append('Assignment', this.file);
    this.subUrl = "assignment/"
    this.onSubmit(formData);
    this.content = "assignment";
  }

  onQuestionPaper() {
    let formData = new FormData();
    formData.append('branch', this.mcq.value['branch']);
    formData.append('subject', this.mcq.value['subject']);
    formData.append('QuestionPaper', this.file);
    this.subUrl = "question-paper/"
    this.onSubmit(formData);
    this.content = "question paper";
  }

  onSubmit(formData: any) {
    this.submitProgress = true;
    this.ss.postStudyMaterial(this.subUrl, formData).subscribe(Response => {
      this.submitProgress = false;
      // $('#successModal').modal('show');
      this.opensweetalert();
      this.getAssignment();
      this.getPresentation();
      this.getMcq();
      this.getQuestionPaper();
    })
  }

  getMcq() {
    this.loader = true;
    this.ss.getMcq(this.branchName).subscribe(res => {
      this.allMcq = res.json();
      this.loader = false;
    }, err => {
      this.loader = false;
    })
  }

  deleteMcq(id: any) {
    let formData = new FormData();
    formData.append('branch', this.branchId);
    this.ss.deleteMcq(id, formData).subscribe(res => {
      console.log("I am deleted");
      this.getMcq();
      // $('#successModal2').modal('show');
      this.opensweetalertdng();
    }, err => {

    })
  }

  getAssignment() {
    this.loader = true;
    this.ss.getAssignment(this.branchName).subscribe(res => {
      this.allAssignment = res.json();
      this.loader = false;
    }, err => {
      this.loader = false;
    })
  }

  deleteAssignment(id: any) {
    let formData = new FormData();
    formData.append('branch', this.branchId);
    this.ss.deleteAssignment(id, formData).subscribe(res => {
      console.log("I am deleted");
      this.getAssignment();
      // $('#successModal2').modal('show');
      this.opensweetalertdng();
    }, err => {

    })
  }

  getPresentation() {
    this.loader = true;
    this.ss.getPresentation(this.branchName).subscribe(res => {
      this.allPresentation = res.json();
      this.loader = false;
    }, err => {
      this.loader = false;
    })
  }

  deletePresentation(id: any) {
    let formData = new FormData();
    formData.append('branch', this.branchId);
    this.ss.deletePresentation(id, formData).subscribe(res => {
      console.log("I am deleted");
      this.getPresentation();
      // $('#successModal2').modal('show');
      this.opensweetalertdng();
    }, err => {

    })
  }



  getQuestionPaper() {
    this.loader = true;
    this.ss.getQuestionPaper(this.branchName).subscribe(res => {
      this.allQuestionPaper = res.json();
      this.loader = false;
    }, err => {
      this.loader = false;
    })
  }

  deleteQuestionPaper(id: any) {
    let formData = new FormData();
    formData.append('branch', this.branchId);
    this.ss.deleteQuestionPaper(id, formData).subscribe(res => {
      console.log("I am deleted");
      this.getQuestionPaper();
      this.opensweetalertdng();
      // $('#successModal2').modal('show');
    }, err => {

    })
  }

}
