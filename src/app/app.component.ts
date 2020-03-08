import { Component, OnInit } from '@angular/core';
import {CommonService} from "./services/common.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(public common: CommonService){

  }
  ngOnInit(){
    this.pageNumber=this.common.pageNumber
    // console.log("hello");
    
  //   this.common.getClue(1).subscribe(result=>{
  // console.log("clueDetails",result);
  
  //   });

  //   this.common.getInfo(1).subscribe(result=>{
  //     console.log("infoDetails",result);
      
  //       });
  }
  pageNumber;
  registered=false;
}
