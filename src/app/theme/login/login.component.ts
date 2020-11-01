import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
  ) {
    this.loginForm = this.fb.group({
      email: this.fb.control(''),
      password: this.fb.control(''),
    })
  }

  ngOnInit(): void {
  }

  login() {
    const form = this.loginForm.getRawValue();
    this.loginService.userLogin(form.email, form.password).then().catch();
  }

}
