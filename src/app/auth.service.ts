import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode  from 'jwt-decode';
import { Observable , BehaviorSubject } from 'rxjs';

HttpClient
@Injectable({
  providedIn: 'root'
})
export class AuthService {

baseUrl:string ="https://route-movies-api.vercel.app/";
  
 currentuser = new BehaviorSubject(null);

 

 savecurrentuser(){
  let token:any= localStorage.getItem('usertoken')
   this.currentuser.next(jwtDecode(token))
   console.log(this.currentuser)
 }

  constructor(private _HttpClient: HttpClient , private _router:Router) { 
    if (localStorage.getItem('usertoken')) {

      this. savecurrentuser()
    }
  }
 

  register(formData: any): Observable<any> {
    {

      return this._HttpClient.post(this.baseUrl + 'signup', formData)

    }

  }
  login(formData: any): Observable<any> {
    {
      return this._HttpClient.post(this.baseUrl + 'signin', formData)
    }

  }
  logout()
  {
    this.currentuser.next(null);
    localStorage.removeItem('usertoken');
    this._router.navigate(['/login'])
  }
}
