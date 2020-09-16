import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PlacementTeamService } from "../../providers/placementteam.service";
import { CommonService } from "../../providers/common.service";
import { CustomHttpService } from "../../../default.header.service";
import { Configuration } from '../../../app.constants';
import { Http, Headers, RequestOptions } from '@angular/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';

declare let $:any;
@Component({
  selector: 'app-placementteam',
  templateUrl: './placementteam.component.html',
  styleUrls: ['./placementteam.component.scss'],
  providers:[CommonService, PlacementTeamService]
})
export class PlacementteamComponent implements OnInit {

  public submitProgress: boolean = false;
    public loader:boolean = false;
    public userId:any;
    public Team:FormGroup;
    public branch:any;
    public file:any;
    public branchName:any;
    public data:any;
    public selected:any;
    public editTeam:FormGroup;
    constructor(
      private http:CustomHttpService,
      private con:Configuration,
      public cs:CommonService,
      public fs:PlacementTeamService
    ) {
    }

    ngOnInit() {
      this.branch=localStorage.getItem('branch');
      this.userId=localStorage.getItem('id');
      this.getBranch();
      this.Team = this.initForm();
      this.editTeam = this.EditForm();
    }
    opensweetalert()
    {
      Swal.fire({
          text: 'You have successfully added the Placement team Member',
          icon: 'success'
        });
    }
    opensweetalertEdit()
    {
      Swal.fire({
          text: 'You have successfully edit the Placement team Member',
          icon: 'success'
        });
    }
    opensweetalertdng()
    {
     Swal.fire("You have successfully deleted the Placement team Member")
    }
    opensweetalertError() {
      Swal.fire({
        text: 'Please Enter the valid field',
        icon: 'error'
      });
    }
    public initForm() {
      return new FormGroup({
        branch:new FormControl(this.branch,[Validators.required]),
        User: new FormControl('', [Validators.required]),
        profile_pic:new FormControl('',[Validators.required]),
        email:new FormControl(this.branch,[Validators.required]),
        Phone_Number: new FormControl('', [Validators.required]),
        designation:new FormControl('',[Validators.required]),
        is_placement_team_admin:new FormControl('',[Validators.required])
      });
    }

    public EditForm() {
      return new FormGroup({
        branch:new FormControl(this.branch,[Validators.required]),
        User: new FormControl('', [Validators.required]),
        profile_pic:new FormControl('',[Validators.required]),
        email:new FormControl(this.branch,[Validators.required]),
        Phone_Number: new FormControl('', [Validators.required]),
        designation:new FormControl('',[Validators.required]),
        is_placement_team_admin:new FormControl('',[Validators.required])
      });
    }

    getBranch(){
    this.cs.getBranchName().subscribe(response=>{
      this.branchName=response.text();
      this.branchName=this.branchName.toLowerCase();
    this.getTeam();

    },err=>{

    })
    }
    getTeam(){
        this.loader=true
        this.fs.getTeam(this.branchName).subscribe(res=>{
            this.loader=false;
            this.data=res.json();
        },err=>{
            this.loader=false;
        })
  }

  deleteTeam(id:any){
    let formData = new FormData();
    formData.append('branch',this.branch);
    this.fs.deleteTeam(id,formData).subscribe(res=>{
      console.log("I am deleted");
      this.getBranch();
      // $('#successModal2').modal('show');
      this.opensweetalertdng();
    },err=>{

    })
  }

  onSubmit() {
    this.submitProgress=true;
    let formData = new FormData();
    formData.append('branch',this.branch);
    formData.append('User', this.Team.value['User']);
    formData.append('profile_pic', this.file);
    formData.append('email', this.Team.value['email']);
    formData.append('Phone_Number', this.Team.value['Phone_Number']);
    formData.append('designation', this.Team.value['designation']);
    formData.append('is_placement_team_admin', this.Team.value['is_placement_team_admin']);
    this.fs.postTeam(formData).subscribe(res=>{
      this.submitProgress=false;
      this.getBranch();
      // $('#successModal').modal('show');
      this.opensweetalert();
    },err=>{
        this.submitProgress = false;
       this.opensweetalertError();
    })
  }

  getFile(event: any) {
    this.file = event.srcElement.files[0];
  }

  onEditSubmit(id:any){
    this.submitProgress=true;
    let formData = new FormData();
    formData.append('branch',this.branch);
    formData.append('User', this.editTeam.value['User']);
    formData.append('profile_pic', this.file);
    formData.append('email', this.editTeam.value['email']);
    formData.append('Phone_Number', this.editTeam.value['Phone_Number']);
    formData.append('designation', this.editTeam.value['designation']);
    formData.append('is_placement_team_admin', this.editTeam.value['is_placement_team_admin']);
    this.fs.editTeam(id,formData).subscribe(res=>{
      this.submitProgress=false;
      this.getTeam();
      // $('#successModal').modal('show');
      this.opensweetalertEdit();
    },err=>{
        this.submitProgress = false;
        this.opensweetalertError();
    })
  }



  selectedTeam(e:any){
    this.selected=e;
    console.log(e);
  }
}
