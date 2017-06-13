import { Component, OnInit } from '@angular/core';
import {GithubservicesService} from '../github/githubservices.service';
import * as moment from 'moment';




@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  providers:[GithubservicesService]
})
export class SecondComponent implements OnInit {

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

	public api = [
					'first',
					'second'
	];
	public result = '';
	  constructor(private githubs:GithubservicesService) { }

  ngOnInit() {
      let now = moment(); // add this 2 of 4
    console.log('hello world', now.format()); // add this 3 of 4
    console.log(now.add(7, 'days').format()); // add this 4of 4
  }

  eventChange(searchText){
  	this.githubs.getUser(searchText).subscribe(
  		res =>{
  			this.result = res;
  			console.log('res',res);
  		});
  	
  

  }

}
