import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class DaboutComponent implements OnInit {
  sba:boolean=false;
  constructor(
    private router:Router
  ) {
   }

  ngOnInit() {
  }

}
