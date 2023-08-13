import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesComponent } from './movies/movies.component';
import { PeapleComponent } from './peaple/peaple.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { AboutComponent } from './about/about.component';
import { NetworkComponent } from './network/network.component';
import { LogoutComponent } from './logout/logout.component';
import { RegstratinComponent } from './regstratin/regstratin.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {  RouterModule } from '@angular/router';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { TvshowdetailsComponent } from './tvshowdetails/tvshowdetails.component';
RouterModule
CarouselModule 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MoviesComponent,
    PeapleComponent,
    TvshowComponent,
    AboutComponent,
    NetworkComponent,
    LogoutComponent,
    RegstratinComponent,
    LoginComponent,
    NotfoundComponent,
    HeaderComponent,
    MoviedetailsComponent,
    TvshowdetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,BrowserModule,BrowserAnimationsModule,
    CarouselModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
