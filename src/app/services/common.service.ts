import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
regCommon : number;
pageNumber=10;
resetTimer = false;

  constructor(private http: HttpClient) { }

  getAlldetails(){
    return this.http.get('http://localhost:8080/api/score')
  }

  getDetails(code){
    return this.http.get('http://localhost:8080/api/lms',{params:{code}})
  }
    taskupdate(code,task,totalLostMin){
      return this.http.put('http://localhost:8080/api/lms',{code,task,totalLostMin})
    }
    finished(code,task,totalLostMin,finished){
      return this.http.put('http://localhost:8080/api/lms',{code,task,totalLostMin,finished})
    }
    create(code){
      return this.http.post('http://localhost:8080/api/lms',{code})
    } 

    getClue(sno){
      return this.http.get('http://localhost:8080/api/clue',{params:{sno}})
    } 

    getInfo(sno){
      return this.http.get('http://localhost:8080/api/info',{params:{sno}})
    } 
    map()
    {
      window.open('https://drive.google.com/open?id=1bC3ta_xg188h5z9us4Qd_tcygNMq3m2h','_blank')
    }
     // clueupdate(code,totalLostMin){
    //   return this.http.put('http://lms2k19.herokuapp.com/api/lms',{code,totalLostMin})
    // }
}


