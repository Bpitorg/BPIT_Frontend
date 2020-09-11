import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonService } from "../../providers/common.service";
import { PlaceHomeService } from "../../providers/placehome.service";
import { CustomHttpService } from "../../../default.header.service";
import { Configuration } from '../../../app.constants';
import { Http, Headers, RequestOptions } from '@angular/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';

declare let $:any;
@Component({
  selector: 'app-placehome',
  templateUrl: './placehome.component.html',
  styleUrls: ['./placehome.component.scss'],
  providers:[CommonService,PlaceHomeService]
})
export class PlacehomeComponent {
  serveUrl:any;
  data:any;
  file:any
  branch:any;
  user:any;
  Team:any;
  Username:any;
  Password:any;
  Email:any;
  Firstname:any;
  Lastname:any;
  token:any;
  pk:any;
  submitProgress:boolean=false;

  constructor(
    private http:CustomHttpService,
    private con:Configuration,
    public ls:PlaceHomeService
  ) {
    this.serveUrl=this.con.server;
  }
  opensweetalert()
  {
    Swal.fire({
        text: 'You have successfully Added User.',
        icon: 'success'
      });
  }
  opensweetalertEdit()
  {
    Swal.fire({
        text: 'You have successfully edit the event',
        icon: 'success'
      });
  }
  opensweetalertdng()
  {
   Swal.fire("You have successfully deleted the event")
  }
  ngOnInit() {
    this.branch=localStorage.getItem('branch');
    this.token=localStorage.getItem('access_token');
    this.pk = localStorage.getItem('Data');
    this.user=this.initForm();
    this.Team=this.initForm1();
  }


  initForm(){
    return new FormGroup({
      username:new FormControl('',[Validators.required]),
      first_name:new FormControl('',[Validators.required]),
      last_name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
      password:new FormControl('',[Validators.required]),
      branch:new FormControl('',[Validators.required])
    })
  }

    public initForm1() {
      return new FormGroup({
        branch:new FormControl(this.branch,[Validators.required]),
        User: new FormControl('', [Validators.required]),
        profile_pic:new FormControl('',[Validators.required]),
        email:new FormControl(this.branch,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
        Phone_Number: new FormControl('', [Validators.required]),
        designation:new FormControl('',[Validators.required]),
        is_placement_team_admin:new FormControl('',[Validators.required])
      });
    }


      UserSubmit(){
        this.submitProgress=true;
        let formData = new FormData();
        formData.append('username',this.user.value['username']);
        formData.append('first_name',this.user.value['first_name']);
        formData.append('last_name',this.user.value['last_name']);
        formData.append('email',this.user.value['email']);
        formData.append('password',this.user.value['password']);
        formData.append('branch',this.branch);
        this.onSubmit(formData);
    }


  onSubmit(formData:any) {
    this.ls.postUser(formData).subscribe(res=>{
      let Data = res.json();
    let formData = new FormData();
    formData.append('User',Data['pk']);
    formData.append('branch',this.branch);
    formData.append('profile_pic', this.file);
    formData.append('email', this.user.value['email']);
    formData.append('Phone_Number', this.Team.value['Phone_Number']);
    formData.append('designation', this.Team.value['designation']);
    formData.append('is_placement_team_admin', this.Team.value['is_placement_team_admin']);
    this.onSubmitPFaculty(formData);
    },err=>{
        this.submitProgress = false;
    })
  }


    getFile(event: any) {
    this.file = event.srcElement.files[0];
  }



  onSubmitPFaculty(formData:any){
  this.ls.postTeam(formData).subscribe(res=>{
  this.submitProgress=false;
  // $('#successModal').modal('show');
  this.opensweetalert();
  },err=>{
  this.submitProgress=false;
  })
  }

}
