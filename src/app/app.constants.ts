import { Injectable } from '@angular/core';

@Injectable()
export class Configuration{
  public url = "http://bpitback.herokuapp.com/api";
  public server = "http://bpitback.herokuapp.com/api/";

    constructor(){}
}
