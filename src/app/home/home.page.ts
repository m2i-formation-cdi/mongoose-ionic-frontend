import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public taskList = [];

  constructor(private httpClient:HttpClient){

  }

  ionViewDidEnter(){
    this.httpClient.get("http://localhost:3000/task/")
    .subscribe(
      (data:any)=> {
        this.taskList = data;
        console.log(data);
      },
      err => console.log(err) 
    );
  }

}
