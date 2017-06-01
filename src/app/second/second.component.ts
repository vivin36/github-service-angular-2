import { Component, OnInit } from '@angular/core';
import {GithubservicesService} from '../github/githubservices.service';




@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  providers:[GithubservicesService]
})
export class SecondComponent implements OnInit {

	public api = [
					'first',
					'second'
	];
	public result = '';
	  constructor(private githubs:GithubservicesService) { }

  ngOnInit() {

  }

  eventChange(searchText){
  	this.githubs.getUser(searchText).subscribe(
  		res =>{
  			this.result = res;
  			console.log('res',res);
  		});
  	
  

  }

}
