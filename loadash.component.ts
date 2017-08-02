import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-loadash',
  templateUrl: './loadash.component.html',
  styleUrls: ['./loadash.component.css']
})
export class LoadashComponent implements OnInit {
	finalArray:any[] = [];
  constructor() { }
  formatted:any;

  data =[
  {
    "groupText": "80698-fort walton beach",
    "reports": [
      {
        "sales_id": "e020f",
        "item": "surestart50"
      },
      {
        "sales_id": "e020f",
        "item": "surestart50"
      },
      {
        "sales_id": "e020f",
        "item": "surestart50"
      },
      {
        "sales_id": "e020f1",
        "item": "surestart50"
      },
      {
        "sales_id": "e020f1",
        "item": "surestart50"
      },
      {
        "sales_id": "e020f1",
        "item": "surestart50"
      }
      
    ]
  },
  {
    "groupText": "80698-big_Street",
    "reports": [
      {
        "sales_id": "e020f",
        "item": "surestart50"
      },
      {
        "sales_id": "e020f",
        "item": "surestart50"
      },
      {
        "sales_id": "e020f",
        "item": "surestart50"
      },
      {
        "sales_id": "e020f1",
        "item": "surestart50"
      },
      {
        "sales_id": "e020f1",
        "item": "surestart50"
      },
      {
        "sales_id": "e020f1",
        "item": "surestart50"
      }
      
    ]
  }
]

  ngOnInit() {

  	this.formatted = _.chain(this.data[0].reports)
          .groupBy("sales_id")
          .toPairs()
          .map(function (currentItem, key) {
            return _.zipObject(["groupText", "reports"], currentItem);
          })
          .value();

          console.log('this.formatted',this.data[0],this.formatted);
          for(let result of this.data){
          	let temp = _.chain(result.reports)
          .groupBy("sales_id")
          .toPairs()
          .map(function (currentItem, key) {
            return _.zipObject(["salesid", "reports"], currentItem);
          })
          .value();
          	this.finalArray.push({"outlet":result.groupText,"salesId":temp})
          	console.log('this.result',this.finalArray);
			  
			}



  }



}


// [
//   {
//     "outlet": "80698-fort walton beach",
//     "salesId": [
//       {
//         "salesid": "e020f",
//         "reports": [
//           {
//             "sales_id": "e020f",
//             "item": "surestart50"
//           },
//           {
//             "sales_id": "e020f",
//             "item": "surestart50"
//           },
//           {
//             "sales_id": "e020f",
//             "item": "surestart50"
//           }
//         ]
//       },
//       {
//         "salesid": "e020f1",
//         "reports": [
//           {
//             "sales_id": "e020f1",
//             "item": "surestart50"
//           },
//           {
//             "sales_id": "e020f1",
//             "item": "surestart50"
//           },
//           {
//             "sales_id": "e020f1",
//             "item": "surestart50"
//           }
//         ]
//       }
//     ]
//   },
//   {
//     "outlet": "80698-big_Street",
//     "salesId": [
//       {
//         "salesid": "e020f",
//         "reports": [
//           {
//             "sales_id": "e020f",
//             "item": "surestart50"
//           },
//           {
//             "sales_id": "e020f",
//             "item": "surestart50"
//           },
//           {
//             "sales_id": "e020f",
//             "item": "surestart50"
//           }
//         ]
//       },
//       {
//         "salesid": "e020f1",
//         "reports": [
//           {
//             "sales_id": "e020f1",
//             "item": "surestart50"
//           },
//           {
//             "sales_id": "e020f1",
//             "item": "surestart50"
//           },
//           {
//             "sales_id": "e020f1",
//             "item": "surestart50"
//           }
//         ]
//       }
//     ]
//   }
// ]

