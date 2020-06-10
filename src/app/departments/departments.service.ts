import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../app.constants'
import { Router, NavigationStart, NavigationEnd,ActivatedRoute} from '@angular/router';
@Injectable()
export class DepartmentsService{
    public heading:any;
    public about:any;
    public faculty:any;
    public resources:any;
    serveUrl:any;
    fpubs:any;
    loader:boolean=false;
    url:any;
  constructor(
        private http:HttpClient,
        private con:Configuration,
        private router:Router,
  ) { 
    this.serveUrl=this.con.url;
  }

        GetData(url:any){
        return this.http.get(this.serveUrl + url)
        
        .map(this.extractData)
    }

private extractData(res:Response){
		if (res.status === 204) { return res; }
		return res;
}
}