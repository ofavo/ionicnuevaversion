import { Component, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './services/data.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
   public url = 'https://jsonplaceholder.typicode.com/posts';
   public arraydata;
  constructor(public dataservice:DataService,public httpclient:HttpClient){
    this.dataservice.getdata(this.url).subscribe(data => {
      this.arraydata = data;
    });
  } 
  ngin

}
