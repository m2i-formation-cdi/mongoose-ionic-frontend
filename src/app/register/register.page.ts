import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

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

  constructor(
    private httpClient:HttpClient, 
    private user:UserService,
    private router:Router) { }

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
        (response:any)=>{
          console.log(response);
          this.user.setUser(response.data);
          this.router.navigateByUrl('/home');
        },
        err => console.log(err)
      )
    }
  }

}
