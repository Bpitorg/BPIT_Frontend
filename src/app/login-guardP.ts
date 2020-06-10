import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
// import { Configuration } from '../../providers/app.constant';
import { Configuration } from './app.constants';
import { CustomHttpService } from "./default.header.service";
import { CommonService } from "./faculty/providers/common.service";
@Injectable()
export class LoggedInGuardP implements CanActivate {
branch:any;
  constructor(
    private router: Router,
    public http:CustomHttpService,
    public cs:CommonService,
    public con:Configuration
  ) {
  }

  canActivate() {
    if((localStorage.getItem('access_token')) && (localStorage.getItem('placementbranch') == 'PL')){
        return true;
    }else{
      this.router.navigate(['login']);
      alert("Please Login first");
    return false;
  }
}

}
