import { Injectable } from '@angular/core';

@Injectable()
export class Configuration{
	public url = "http://127.0.0.1:8000/api";
	public server = "http://127.0.0.1:8000/api/";
	// public url = "http://65.0.124.138:8000/api" ;
	// public server = "http://65.0.124.138:8000/api/" ;
    constructor(){}
}
