import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placementhome',
  templateUrl: './placementhome.component.html',
  styleUrls: ['./placementhome.component.scss']
})
export class PlacementhomeComponent {
  name:any;
  loggedIn:boolean=false;
  loggedInP:boolean=false;
  constructor(
      private router:Router
  ){
      this.name=localStorage.getItem('name');
  }
  logout(){

this.loggedIn = false;
        this.loggedInP = false;
      localStorage.clear();
      this.router.navigate(['/']);
  }
}
