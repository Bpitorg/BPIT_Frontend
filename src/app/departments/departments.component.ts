import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  public heading:any;
  url:any;
  constructor(
    private router:Router,
    route:ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
    this.url = this.router.url;
  }

}
