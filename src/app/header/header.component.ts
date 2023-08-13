import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  trendingMovies:any[]=[];
  tvShow:any[]=[];
  prfiximg:string='https://image.tmdb.org/t/p/w500/';
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin:8,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }
  constructor(private _MoviesService:MoviesService) { 

    _MoviesService.getTrending('movie').subscribe((data)=>{
      
      this.trendingMovies = data.results;
         })
  }

  ngOnInit(): void {
  }

}
