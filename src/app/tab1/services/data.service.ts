import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {
       
    constructor(public httpclient: HttpClient) {
      
        console.log("Activado");
    }
    getdata(url) {

        return this.httpclient.get(url);
    }
    postdata(url,env){
        return this.httpclient.post(url,env);
    } 
    updatedata(url,env){
        return this.httpclient.put(url,env);
    }
    
    
}