  import { Component, OnInit } from '@angular/core';
  import { Configuration } from '../app.constants';
  import { HttpClient } from '@angular/common/http';
  import { Location } from '@angular/common';
  import { AuthToken } from '../app.module';
  import { CanActivate, Router } from '@angular/router';
  import { CustomHttpService } from "../default.header.service";
  import { CommonService } from "../faculty/providers/common.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  branch:string
  username:string;
  password:string;
  token:any;
  body:any;
  options:any;
  error:boolean=false;
  serveUrl:string="";
  placementbranch:any;
  loader:boolean=false;
  loggedIn:boolean=false;
  loggedInP:boolean=false;
  branchName:any;
  constructor(private http: HttpClient,
     private loc:Location,
     private router:Router,
     public http1:CustomHttpService,
     public con:Configuration,
     public cs:CommonService

   ) {
    this.serveUrl=this.con.server;
  }

  ngOnInit() {
  }

/*
* faculty login
*/
login(){
    this.loader=true;
    this.body = {
      username: this.username,
      password: this.password
    };
    this.http.post(this.serveUrl + 'auth-token/faculty/', this.body).subscribe(data => {
      this.loader=false;
      this.verifySuccess(data);
      // this.body = {
      //   username: null,
      //   password: null
      // };
      // document.getElementById("submitbtn").style.background = "#888";
      // this.token = data;
      // this.loc.back();
    },err=>{
      this.verifyFail();
    });
  }

  verifySuccess(data:any){
    localStorage.setItem('access_token',data.token);
    localStorage.setItem('id',data.user_id);
    localStorage.setItem('name',data.firstname);
    localStorage.setItem('branch',data.branch);
    this.loggedIn=true;
    this.loader=true;
    this.router.navigate(['/faculty']);
    // location.reload();
  }

  verifyFail(){
    this.loader=false;
    document.getElementById("submitbtn").style.background = "#888";
    document.getElementById("submitbtn").style.color = "white";
    this.error=true;
    this.router.navigate(['/login']);
  }

/*
*placement login
*/
loginPlacement(){
  this.loader=true;
  this.body = {
    username: this.username,
    password: this.password
  };
  this.http.post(this.serveUrl + 'auth-token/placement/', this.body).subscribe(data => {
    this.loader=false;
    this.verifySuccessP(data);
    // this.body = {
    //   username: null,
    //   password: null
    // };
    // document.getElementById("submitbtn").style.background = "#888";
    // this.token = data;
    // this.loc.back();
  },err=>{
    this.verifyFailP();
  });
}

verifySuccessP(data:any){
  localStorage.setItem('access_token',data.token);
  localStorage.setItem('id',data.user_id);
  localStorage.setItem('name',data.firstname);
  localStorage.setItem('branch',data.branch);
  localStorage.setItem('placementbranch',"PL");
  this.loggedInP=true;
  this.router.navigate(['/placement-home']);
  location.reload();
}

verifyFailP(){
  this.loader=false;
  document.getElementById("submitbtn").style.background = "#888";
  document.getElementById("submitbtn").style.color = "white";
  this.error=true;
  this.router.navigate(['/login']);
}

}
