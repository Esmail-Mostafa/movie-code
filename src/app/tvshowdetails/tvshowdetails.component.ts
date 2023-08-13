import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tvshowdetails',
  templateUrl: './tvshowdetails.component.html',
  styleUrls: ['./tvshowdetails.component.scss'],
})
export class TvshowdetailsComponent implements OnInit {
  tvshowdetails: any = {};
  id: number = 0;
  TvShowsIds: number[] = []; // totles ids form movies srvice

  prfiximg: string = 'https://image.tmdb.org/t/p/w500/';

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _MoviesService: MoviesService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getTvshow();
    this.getAddTVShows();
  }
  getTvshow() {
    this.id = Number(this._ActivatedRoute.snapshot.params['id']);
    this._MoviesService.gettvshowDEtalis(this.id).subscribe((Response) => {
      this.tvshowdetails = Response;
    });
  }

  getAddTVShows() {
    this._MoviesService.getTrending('tv').subscribe((res) => {
      let totleMovieIdArr = res.results;
      for (let index = 0; index < totleMovieIdArr.length; index++) {
        this.TvShowsIds.push(totleMovieIdArr[index].id);
      }
    });
  }
  prvTvshows() {
    let currindex = this.TvShowsIds.findIndex((elem) => elem == this.id);
    let prevMovieId = this.TvShowsIds[currindex - 1];
    this._router.navigate(['/moviedetails', prevMovieId]);
    this.gitNextORProvTvshows();
    this.ngOnInit();
  }
  nextTvShows() {
    let currindex = this.TvShowsIds.findIndex((elem) => elem == this.id);
    let nextMov = this.TvShowsIds[currindex + 1];
    this._router.navigate(['/tvshowdetails', nextMov]);
    this.gitNextORProvTvshows();
    this.ngOnInit();
  }

  gitNextORProvTvshows() {
    this._ActivatedRoute.paramMap.subscribe((pramMap) => {
      this.id = Number(pramMap.get('id'));
      this.tvshowdetails = this._MoviesService.gettvshowDEtalis(this.id);
    });
  }
}
