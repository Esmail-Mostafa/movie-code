import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent implements OnInit {
  tvShow:any[]=[];
  prfiximg:string='https://image.tmdb.org/t/p/w500/'
  constructor( private _MoviesService:MoviesService) { 
    _MoviesService.getTrending('tv').subscribe((data)=>{
      
      this.tvShow = data.results;
  })
  }

  ngOnInit(): void {
  }

}
