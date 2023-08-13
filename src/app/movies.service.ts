import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _HttpClient: HttpClient) {}

  getTrending(midaType: string): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/trending/${midaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`
    );
  }

  getmoviedetails(id: number): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`
    );
  }

  gettvshowDEtalis(id: number): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`
    );
  }
}
