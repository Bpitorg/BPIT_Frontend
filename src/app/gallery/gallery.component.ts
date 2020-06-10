import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../app.constants';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  serveUrl:string="";
  list:any;
  list2:any;
  id:any;
  loader:boolean=true;
  error:boolean=false;
  constructor(
    private http:HttpClient,
    private con:Configuration,
  ){
      this.serveUrl=this.con.server;
  }

  ngOnInit() {
    this.getGallery();
  }

  getGallery(){
  this.loader=true;
  this.http.get(this.serveUrl + 'gallery/title/').subscribe(res=>{
  this.loader=false;
    this.list=res;
  },err=>{
    this.error=true;
  this.loader=false;
  })
  }

  getPic(id:any){
  this.loader=true;
this.http.get(this.serveUrl + 'gallery/pic/'+id).subscribe(res2=>{
this.loader=false;
  this.list2=res2;
},err=>{
  this.error=true;
this.loader=false;
})
}
selectedId(id:any){
  this.id=id;
  this.getPic(this.id);
}
}
