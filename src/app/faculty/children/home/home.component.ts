import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { HomeService } from "../../providers/home.service";
import { CustomHttpService } from "../../../default.header.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Configuration } from '../../../app.constants';
import { Http, Headers, RequestOptions } from '@angular/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';

declare let $: any;
@Component({
    selector:'faculty-home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.scss'],
    providers: [HomeService]
})

export class FacultyHomeComponent implements OnInit {
serveUrl:any;
data:any;
file:any
branch:any;
facultyhome:any;
facultyhome1:any;
Username:any;
Password:any;
Email:any;
Firstname:any;
Lastname:any;
token:any;
pk:any;
submitProgress:boolean=false;
faculty_id:any;

constructor(
  private http:CustomHttpService,
  private con:Configuration,
  public ls:HomeService
) {
  this.serveUrl=this.con.server;
}

ngOnInit() {
  this.branch=localStorage.getItem('branch');
  this.token=localStorage.getItem('access_token');
  this.faculty_id=localStorage.getItem('faculty_id');
  this.pk = localStorage.getItem('Data');
  this.facultyhome=this.initForm();
  this.facultyhome1=this.initForm1();
}
opensweetalert()
{
  Swal.fire({
      text: 'You have successfully Added User.',
      icon: 'success'
    });
}
opensweetalertdng()
{
 Swal.fire("You have successfully deleted the notice")
}
initForm(){
  return new FormGroup({
    username:new FormControl('',[Validators.required]),
    first_name:new FormControl('',[Validators.required]),
    last_name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    branch:new FormControl('',[Validators.required])
  })
}


initForm1(){
  return new FormGroup({
User:new FormControl('',[Validators.required]),
// order:new FormControl('',[Validators.required]),
profile_pic:new FormControl('',[Validators.required]),
designation:new FormControl('',[Validators.required]),
Qualification:new FormControl('',[Validators.required]),
Experience:new FormControl('',[Validators.required]),
speacialization:new FormControl('',[Validators.required]),
nation_Publications:new FormControl('',[Validators.required]),
international_publication:new FormControl('',[Validators.required]),
date_of_joining:new FormControl('',[Validators.required]),
faculty_publication_url:new FormControl('',[Validators.required]),
is_faculty_admin:new FormControl('',[Validators.required])
})
}


  getFile(event: any) {
  this.file = event.srcElement.files[0];
}

UserSubmit(){
  this.submitProgress=true;
  let formData = new FormData();
  formData.append('username',this.facultyhome.value['username']);
  formData.append('first_name',this.facultyhome.value['first_name']);
  formData.append('last_name',this.facultyhome.value['last_name']);
  formData.append('email',this.facultyhome.value['email']);
  formData.append('password',this.facultyhome.value['password']);
  // formData.append('branch',this.branch); // user model me ye nhi hoga
  this.onSubmit(formData);
}

onSubmit(formData:any){
  this.ls.postUser(formData).subscribe(res=>{
    let Data = res.json();
    let formData1 = new FormData();
    formData1.append('User',Data['pk']);  // ye sahi hai yaha nhi aaega
    console.log(Data['pk']);
    formData1.append('profile_pic',this.file);
    formData1.append('designation',this.facultyhome1.value['designation']);
    formData1.append('Qualification',this.facultyhome1.value['Qualification']);
    formData1.append('Experience',this.facultyhome1.value['Experience']);
    formData1.append('speacialization',this.facultyhome1.value['speacialization']);
    formData1.append('nation_Publications',this.facultyhome1.value['nation_Publications']);
    formData1.append('international_publication',this.facultyhome1.value['international_publication']);
    formData1.append('date_of_joining',this.facultyhome1.value['date_of_joining']);
    formData1.append('faculty_publication_url',this.facultyhome1.value['faculty_publication_url']);
    formData1.append('is_faculty_admin',this.facultyhome1.value['is_faculty_admin']);
    formData1.append('branch',this.branch);
    this.onSubmitFaculty(formData1);
    console.log(formData1)
    },err=>{
  this.submitProgress=false;
})
}




onSubmitFaculty(formData:any){
this.ls.postFaculty(formData).subscribe(res=>{
this.submitProgress=false;
// $('#successModal').modal('show');
this.opensweetalert();
},err=>{
this.submitProgress=false;
})
}

}
