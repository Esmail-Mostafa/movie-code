import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeapleComponent } from './peaple/peaple.component';
import { RegstratinComponent } from './regstratin/regstratin.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { TvshowdetailsComponent } from './tvshowdetails/tvshowdetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate:[AuthGuard], component: HomeComponent },
  { path: 'about', canActivate:[AuthGuard], component: AboutComponent },
  { path: 'navbar',component: NavbarComponent },
  { path: 'regstratin', component: RegstratinComponent },
  { path: 'login',component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'movies', canActivate:[AuthGuard], component: MoviesComponent },
  { path: 'navbar',component: NavbarComponent },
  { path: 'network',  canActivate:[AuthGuard],component: NetworkComponent },
  { path: 'peaple',  canActivate:[AuthGuard],component: PeapleComponent },
  { path: 'moviedetails/:id', canActivate:[AuthGuard], component: MoviedetailsComponent },
  { path: 'tvshowdetails/:id',  canActivate:[AuthGuard],component: TvshowdetailsComponent },
  { path: 'tvshow',  canActivate:[AuthGuard],component: TvshowComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
