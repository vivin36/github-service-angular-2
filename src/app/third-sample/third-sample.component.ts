import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-third-sample',
  templateUrl: './third-sample.component.html',
  styleUrls: ['./third-sample.component.css']
})
export class ThrdSampleComponent {
testResponse:any;
publicDeals: any[] = [];
subMenu:any[] = [];
formatted:any[] = [];
includesword:string ='sample';

     constructor(private http: Http) {

		 this.getMenu().subscribe(
        data => {
          this.testResponse = data;
          console.log("I CANT SEE DATA HERE: ", this.testResponse.data.length);
          this.getDetails(this.testResponse,this.testResponse.data.length);
        }
    );
    }

  getMenu() {
    return this.http.get('https://api.myjson.com/bins/lm1wz')
        .map(data => {
            data.json();
            return data.json();
    });
}

	getDetails(res,len){
		this.formatted = [];
		for(let i = 0 ;i<len;i++){
			
			
			if(res.data[i].submenu !== null){
				for(let j=0;j<len;j++){
					console.log(j,res.data[i].submenu,res.data[j].submenu);
					if(res.data[j].submenu !== null )
					if(res.data[i].submenu  == res.data[j].submenu && !(this.includesword.includes(res.data[j].submenu))){
						this.subMenu.push({"res":res.data[j].menu_name});
					}

				}
				if(this.subMenu.length > 0)
				this.formatted.push({"reportName":res.data[i].submenu,"SubMenu":this.subMenu}) ;
				this.includesword = res.data[i].submenu+',';
				this.subMenu= [];
				console.log(this.formatted,'this.formatted',res.data[i],this.includesword,this.includesword.includes('outdoo'));
			}
			else if((res.data[i].submenu == null)) {
				this.formatted.push({"reportName":res.data[i].menu_name}) 
				
			}



		}
	}

}
