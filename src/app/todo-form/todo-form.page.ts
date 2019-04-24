import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.page.html',
  styleUrls: ['./todo-form.page.scss'],
})
export class TodoFormPage implements OnInit {

  public task = {
    taskName: '',
    dateString: (new Date()).toISOString(),
    done: false
  }

  constructor(private httpClient:HttpClient, private router: Router) { }

  ngOnInit() {
  }

  persistTask(){
    this.httpClient.post("http://localhost:3000/task/new", this.task).subscribe(
      ()=>{
        console.log(this.task);
        console.log("ok");
        this.router.navigateByUrl('/home');
      },
      (err)=> {
        console.log(err);
      }
    );
    
  }

}
