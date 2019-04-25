import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginInfo = {
    login: '',
    password: ''
  };

  constructor(
    private httpClient:HttpClient,
    private userService: UserService,
    private router: Router,
    private toastCtrl: ToastController) 
    { }

  ngOnInit() {
  }

  validateLogin(){
    this.httpClient.post('http://localhost:3000/login', this.loginInfo)
    .subscribe(
      (response:any)=>{
        if(response.found){
          this.userService.setUser(response.data);
          this.router.navigateByUrl('/home');
        } else {
          let myToast = this.toastCtrl.create(
            {
              message: "Infos d'authentification foireuses",
              duration: 3000
            }
          );

          myToast.then((toast)=> toast.present());
        }
      },
      (err) => {console.log(err)}
    );
  }

}
