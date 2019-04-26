import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


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
    private router:Router,
    private toastCtrl: ToastController) { }

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

          if(response.data){
            this.user.setUser(response.data);
            this.router.navigateByUrl('/home');
          } else {
            this.toastCtrl.create(
              {message: "Ce compte existe déjà", duration: 2000}
            ).then( toast=> toast.present());
          }
          
        },
        err => console.log(err)
      )
    }
  }

}
