import { registerLocaleData } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
AuthService;
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regstratin',
  templateUrl: './regstratin.component.html',
  styleUrls: ['./regstratin.component.scss'],
})
export class RegstratinComponent implements OnInit {
  error: string = '';
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  Regstratinform = new FormGroup({
    first_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.required,
    ]),
    last_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.required,
    ]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [
      Validators.min(12),
      Validators.max(80),
      Validators.required,
    ]),
  });
  submitRegstratinform(Regstratinform: FormGroup) {
    this._AuthService.register(Regstratinform.value).subscribe((response) => {
      if (response.message == 'success') {
        this._Router.navigate(['/login']);
      } else {
        this.error = response.message;
      }
    });
  }

  ngOnInit(): void {}
}
