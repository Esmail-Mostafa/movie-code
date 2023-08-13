import { Component, OnInit, Output } from '@angular/core';
import { MoviesService } from '../movies.service';
MoviesService;
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  text:string[]=[]
  arr:any
  trendingMovies: any[] = [];
  prfiximg: string = 'https://image.tmdb.org/t/p/w500/';
  constructor(private _MoviesService: MoviesService) {}

  ngOnInit(): void {
    this.getMovieTrinding();
  }

  getMovieTrinding() {
    this._MoviesService.getTrending('movie').subscribe((data) => {
      this.trendingMovies = data.results;
    });
  }


}
