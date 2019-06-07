import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    let email = form.value.email;
    let password = form.value.password;
    
    console.log(email+"-"+password);
    this.authService.signupUser(form.value.email, form.value.password);
  }

}
