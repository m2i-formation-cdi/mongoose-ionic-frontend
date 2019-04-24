import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.page.html',
  styleUrls: ['./todo-form.page.scss'],
})
export class TodoFormPage implements OnInit {

  public task = {
    taskName: '',
    dateString: (new Date()).toDateString(),
    done: false
  }

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

  persistTask(){
    this.httpClient.post("http://localhost:3000/task/new", this.task).subscribe(
      ()=>{
        console.log("ok");
      },
      (err)=> {
        console.log(err);
      }
    );
    
  }

}
