import { Component, OnInit } from '@angular/core';
import {GithubservicesService} from '../github/githubservices.service';
import * as moment from 'moment';
declare let jsPDF;
import {Pipe, PipeTransform} from '@angular/core';



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


        convert(){


      const elementToPrint = document.getElementById('div1');
      console.log('eelementToPrint',elementToPrint); //The html element to become a pdf
      const pdf = new jsPDF('p', 'pt', 'a4');
      pdf.addHTML(elementToPrint, () => {
          pdf.save('web.pdf');
      });


    var item = {
      "Name" : "XYZ",
      "Age" : "22",
      "Gender" : "Male"
    };
    var doc = new jsPDF();
    var col = ["Details", "Values"];
    var rows = [];

    for(var key in item){
        var temp = [key, item[key]];
        rows.push(temp);
    }

    doc.autoTable(col, rows);

    doc.save('Test.pdf');
  }


}
