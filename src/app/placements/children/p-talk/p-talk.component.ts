import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../app.constants';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-p-talk',
  templateUrl: './p-talk.component.html',
  styleUrls: ['./p-talk.component.scss']
})
export class PTalkComponent implements OnInit {
 serveUrl:string="";
 list:any;
 loader:boolean=true;
 error:boolean=false;

 constructor(
   private http:HttpClient,
   private con:Configuration,
 ){
     this.serveUrl=this.con.server;
 }

  ngOnInit() {
    this.getPTalk();
  }


    getPTalk(){
    this.loader=true;
    this.http.get(this.serveUrl + 'placement/expert-talk-seminar').subscribe(res=>{
    this.loader=false;
      this.list=res;
    },err=>{
      this.error=true;
    this.loader=false;
    })

  }

  seminars=[
    {
      "sno":"1",
      "date":"26.08.14",
      "activities":"Pre Placement Talk for final year students"
    },
    {
      "sno":"2",
      "date":"05.09.14",
      "activities":"Seminar by Franklin for final year students"
    },
    {
      "sno":"3",
      "date":"10.09.14",
      "activities":"Seminar by Intel for all I to IV year students"
    },
    {
      "sno":"4",
      "date":"21.05.15",
      "activities":"Industrial Visit to Huawei Academy Gurgaon ECE 2nd & 3rd year students"
    },
    {
      "sno":"5",
      "date":"20.08.15",
      "activities":"Orientation on E-Cell reformulation"
    },
    {
      "sno":"6",
      "date":"30.09.15",
      "activities":"Seminar by T.I.M.E"
    },
    {
      "sno":"7",
      "date":"07.10.15",
      "activities":"Pre Placement Talk by Arete Gaming at BPIT"
    },
    {
      "sno":"8",
      "date":"26.02.16",
      "activities":"AEP training update of 1st evaluation test 12th January, 2016"
    },
    {
      "sno":"9",
      "date":"10.05.16-13.05.16",
      "activities":"2nd Phase of AEP training at BPIT"
    },
    {
      "sno":"10",
      "date":"13.05.16",
      "activities":"Aricent Employability test at BPIT"
    },
    {
      "sno":"11",
      "date":"09.08.16",
      "activities":"Firstnaukri Prepathon Test for batch 2017 all branches at BPIT"
    },
    {
      "sno":"12",
      "date":"30.08.16",
      "activities":"Firstnaukri Prepathon 2nd round of test for batch 2017 all branches at BPIT"
    },
    {
      "sno":"13",
      "date":"09.09.16",
      "activities":"AEP Nasscom QP Software Developer assessment conducted on 13th May, 2016"
    },
    {
      "sno":"14",
      "date":"15.09.16",
      "activities":"IMS Academy Test Prepration"
    },
    {
      "sno":"15",
      "date":"30.09.16",
      "activities":"Mensa IQ Test Proposal from Hindustan Times"
    },
    {
      "sno":"16",
      "date":"30.02.17",
      "activities":"NASSCOM, Aricent & Centum Career Conselling Session to 2018 Batch of all streams"
    },
    {
      "sno":"17",
      "date":"08.03.17",
      "activities":"Seminar  / Scholarship test / One day workshop by IBM-KVCH"
    },
    {
      "sno":"18",
      "date":"09.03.17",
      "activities":"NASSCOM, Aricent & Centum Training Orientation Session to 2018 Batch of all streams"
    },
    {
      "sno":"19",
      "date":"21.03.17",
      "activities":"Commencement Of AEP Training for Batch 2014-2018 (all branches)"
    },
    {
      "sno":"20",
      "date":"14.06.17",
      "activities":"AEP training"
    },
    {
      "sno":"21",
      "date":"26.06.17",
      "activities":"Seminar by ProEdge Orientation-Business analytics) for batch 2018"
    },
    {
      "sno":"22",
      "date":"04.09.17",
      "activities":"Nasscom-Aricent Facilation Training 18 to 22nd for Engineering faculty"
    }
  ]

}
