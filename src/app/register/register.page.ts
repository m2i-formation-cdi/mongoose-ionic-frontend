import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public userInput = {
    userName: '',
    password: '',
    login: ''
  }

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

  private isFormValid(){
    return  this.userInput.userName 
            && this.userInput.userName.length >0
            && this.userInput.login 
            && this.userInput.login.length > 0
            && this.userInput.password
            && this.userInput.password.length >0;
  }

  validateForm(){
    if(this.isFormValid()){
      this.httpClient.post('http://localhost:3000/register', this.userInput)
      .subscribe(
        (data)=>{
          console.log(data);
        },
        err => console.log(err)
      )
    }
  }

}
