import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
islogin:boolean=false
  constructor(private _AuthService:AuthService ) {

    _AuthService.currentuser.subscribe(()=>{
      if(_AuthService.currentuser.getValue() !=null)
      {
        this.islogin=true
      }else{
        this.islogin=false
      }
    })
   
  }

  ngOnInit(): void {
  }
  islogOut(){
    this._AuthService.logout()
  }
}
