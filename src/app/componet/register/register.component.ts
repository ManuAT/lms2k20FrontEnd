import { Component, OnInit, EventEmitter } from '@angular/core';

import {CommonService} from "../../services/common.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public common : CommonService) {
    
   }
   regCode : number;
   registered;
   score : boolean = false;
   values :any;
   trem : number[] =[];
  ngOnInit() {
    
    
  }
  
  validate()
  {
    if(this.regCode ==101){
      this.score = true;
      this.common.getAlldetails().subscribe(result=>{
        console.log("result is",result);
        this.values = result;
        for (let i =0;i<this.values.length;i++){
        this.trem[i] = Math.abs((new Date(this.values[i].finishedTime).getTime() - new Date(this.values[i].time).getTime())/60000)}
      })
    }
    else{
      this.score =false;
    this.common.regCommon = this.regCode ;
    console.log(this.regCode);
    
    this.common.create(this.regCode).subscribe((data:any)=>{
console.log(data);
this.common.pageNumber = data.task;
    this.registered=true
    setTimeout(()=>{
      // this.common.pageNumber=2;
      this.common.resetTimer = true;
    }) 
    })

    // this.common.finished(this.regCode,0,0,true).subscribe(result=>{
    //   console.log("sucess");
      
    // })
  }
  }
}

