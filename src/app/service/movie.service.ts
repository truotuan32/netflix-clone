import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoviePage } from '../models/movie-page';
import { apiMovie, apiPage } from '../contants/urlApi';
import { Observable } from 'rxjs';
import {take} from 'rxjs/operators'
import { MovieDetail } from '../models/movie-detail';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private readonly http: HttpClient) { }
  getMovieByPage(page: number): Observable<MoviePage> {
    if (typeof page !== 'number') page = 1;
    let url = apiPage.concat(`${page}`)
    return this.http.get<MoviePage>(url).pipe(
      take(8)
    )
  }

  getMovieBySlug(slug: string): Observable<MovieDetail> {
    let url = apiMovie + slug;
    return this.http.get<MovieDetail>(url)
  }
}
