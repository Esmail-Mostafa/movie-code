import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
MoviesService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingMovies:any[]=[];
  tvShow:any[]=[];
  person:any[]=[];

  prfiximg:string='https://image.tmdb.org/t/p/w500/'
  constructor(private _MoviesService:MoviesService) { 

    _MoviesService.getTrending('movie').subscribe((data)=>{
      
 this.trendingMovies = data.results.slice(0,10);
    })
    _MoviesService.getTrending('tv').subscribe((data)=>{
      
      this.tvShow = data.results.slice(0,10);
  })
      _MoviesService.getTrending('tv').subscribe((data)=>{
      
      this.tvShow = data.results.slice(0,10);
  })
  _MoviesService.getTrending('person').subscribe((data)=>{
      
    this.person = data.results.slice(0,10);
})
  }

  ngOnInit(): void {
  }

}
