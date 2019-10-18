import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiEndpointService } from './services/api-endpoint.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public router: Router,private api:ApiEndpointService){
    this.lottieInitializer();
    this.createForm();
  }
  title = 'thingsApp';
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  loginForm: any;
  serverUrlReceived:boolean=false;


  lottieInitializer(){
    this.lottieConfig = {
      path: './../assets/images/cartoons/server.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
  };
  }
  loginCredentails = {
    username: '',
    password: '',
    server_url:''
  };


  getServerUrl(){
    this.serverUrlReceived=true;
  }

  createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.minLength(5), Validators.required]),
      server_url: new FormControl(null, [Validators.minLength(5), Validators.required]),
    });
  }


  // login form validations
  validations = {
    'username': [
      { type: 'required', message: 'Username is required.' },
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ],
    'server_url': [
      { type: 'required', message: 'Server URL is required.' },
      { type: 'minlength', message: 'Server URL must be at least 5 characters long.' }
    ],

  }
  buildData() {
    this.loginCredentails.username = this.loginForm.controls['username'].value;
    this.loginCredentails.password = this.loginForm.controls['password'].value;
    this.loginCredentails.server_url = this.loginForm.controls['server_url'].value;
  }

  connect(){
    this.buildData();
    this.api.endpoint=this.loginCredentails.server_url;
    this.api.login(this.loginCredentails).subscribe((res)=>{
        console.log(res);
    },err=>{
      console.log(err);
    });
  }

}
