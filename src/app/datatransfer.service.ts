import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {

  constructor() { }
  private data={
    clientId:'',
    issUrl:''

  };

  setData(data){
    this.data = data;
  }

  getData(){
    let temp = this.data;
    //this.clearData();
    return temp;
  }

  clearData(){
    this.data = undefined;
  }


}
