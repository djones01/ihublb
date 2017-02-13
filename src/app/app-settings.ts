import { Injectable } from '@angular/core';

@Injectable()
export class AppSettings{
api_url: string;
base_url: string;

  constructor(){
      this.base_url = "http://localhost:3000/";
      this.api_url = this.base_url + "api/";
    }
  }