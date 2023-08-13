import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error: string = '';
  currentuser = null;

  loginform = new FormGroup({
    email: new FormControl(null, [Validators.email , Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  submitloginform(loginform: FormGroup) {
    console.log(loginform);

    this._AuthService.login(this.loginform.value).subscribe({
      next: (res) => {
        localStorage.setItem('usertoken', res.token);
        this._AuthService.savecurrentuser();
      },

      error: (e) => {
        this.error = e.respones.message;
      },

      complete: () => {
        this._Router.navigate(['/home']);
      },
    });
  }
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  ngOnInit(): void {}
}
