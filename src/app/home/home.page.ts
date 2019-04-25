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

  deleteTask(id){
    this.httpClient.delete("http://localhost:3000/task/"+id)
    .subscribe(
      ()=>{
        this.ionViewDidEnter();
      },
      err => console.log(err)
    );
  }

  updateTask(task){
    this.httpClient.put("http://localhost:3000/task", task)
    .subscribe(
      ()=> console.log("update ok"),
      (err) => console.log(err)
    );
  }

}
