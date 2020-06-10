import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector:'faculty',
    templateUrl:'./faculty.component.html',
    styleUrls:['./faculty.component.scss']
})

export class FacultyComponent{
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
