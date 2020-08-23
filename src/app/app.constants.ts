import { Injectable } from '@angular/core';

@Injectable()
export class Configuration{
  // public url="https://Bpit-backend.herokuapp.com/api"
  // public server="https://Bpit-backend.herokuapp.com/api/";
  public url = "http://127.0.0.1:8000/api";
  public server = "http://127.0.0.1:8000/api/";

    constructor(){}
}
