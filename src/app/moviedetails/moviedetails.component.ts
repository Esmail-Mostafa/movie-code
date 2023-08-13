import { map } from 'rxjs';
import { MoviesService } from './../movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

MoviesService;
ActivatedRoute;
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss'],
})
export class MoviedetailsComponent implements OnInit {
  id: number = 0; //locol Moivie id
  moviesIds: number[] = []; // totles ids form movies srvice

  moviedetails: any = {};

  prfiximg: string = 'https://image.tmdb.org/t/p/w500/';

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _MoviesService: MoviesService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getMovieDetalis();
    this.getAddMovie();

 

  }

  getAddMovie() {
    this._MoviesService.getTrending('movie').subscribe((res) => {
      let totleMovieIdArr = res.results;
      for (let index = 0; index < totleMovieIdArr.length; index++) {
        this.moviesIds.push(totleMovieIdArr[index].id);
      }
    });
  }
  getMovieDetalis() {
    this.id = Number(this._ActivatedRoute.snapshot.params['id']);
    this._MoviesService.getmoviedetails(this.id).subscribe((Response) => {
      this.moviedetails = Response;
    });
  }
  prvMovie() {
    let currindex = this.moviesIds.findIndex((elem) => elem == this.id);
    let prevMovieId = this.moviesIds[currindex - 1];
    this._router.navigate(['/moviedetails', prevMovieId]);
    this.gitNextORProvMovie()
    this.ngOnInit()
  }
  nextMovie() {
    let currindex = this.moviesIds.findIndex((elem) => elem == this.id);
    let nextMov = this.moviesIds[currindex + 1];
    this._router.navigate(['/moviedetails', nextMov]);
    this.gitNextORProvMovie();
    this.ngOnInit()
  }


  gitNextORProvMovie(){
    this._ActivatedRoute.paramMap.subscribe((pramMap) => {
      this.id = Number(pramMap.get('id'));
      this.moviedetails = this._MoviesService.getmoviedetails(this.id);
     
    });
  }
}
