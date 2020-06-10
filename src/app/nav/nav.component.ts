import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Configuration } from '../app.constants';
import { CustomHttpService } from "../default.header.service";
import { CommonService } from "../faculty/providers/common.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  loggedIn:boolean=false;
  loggedInP:boolean=false;
  serveUrl:any;
  name:string="";
  constructor(
    private router:Router,
    public http:CustomHttpService,
    public con:Configuration,
    public cs:CommonService
  ) {

  }

  ngOnInit() {
    if(localStorage.getItem('access_token') && (localStorage.getItem('placementbranch') =="PL") ){
      this.loggedInP=true;
      this.loggedIn=false;
      this.name=localStorage.getItem('name');
    }else if(localStorage.getItem('access_token') && (localStorage.getItem('placementbranch') !=="PL")  ){
      this.loggedIn=true;
      this.loggedInP=false;
      this.name=localStorage.getItem('name');
    }else{
      this.loggedIn=false;
      this.loggedInP=false;
    }
  }

  login(){
    if(localStorage.getItem('access_token') && (localStorage.getItem('placementbranch') =="PL") ){
      this.loggedInP=true;
      this.loggedIn=false;
      this.router.navigate(['/placement-home']);
    }else if(localStorage.getItem('access_token') && (localStorage.getItem('placementbranch') !=="PL")  ){
      this.loggedIn=true;
      this.loggedInP=false;
      this.router.navigate(['/faculty']);
    }
    else{
      this.loggedIn=false;
      this.loggedInP=false;
      this.router.navigate(['/login']);
    }
  }

}
