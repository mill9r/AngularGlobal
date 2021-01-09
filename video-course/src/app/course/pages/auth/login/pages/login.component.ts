import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    ) { }

  public ngOnInit(): void {
    this.form = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      }
    );
  }

  public submit(): void {
   const username =  this.form.get('username').value;
   const password = this.form.get('password').value;
   this.authService.loginUser(username, password);
  }
}
