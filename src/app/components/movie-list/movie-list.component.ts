import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviePage } from 'src/app/models/movie-page';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() type!: string;//high, md
  @Input() numberPage!:number|string;

  listMovie$!:Observable<MoviePage>;

  constructor(private readonly movieServie: MovieService) { }

  ngOnInit(): void {
    if(typeof this.numberPage === 'string') this.numberPage = +this.numberPage;
    this.listMovie$ = this.movieServie.getMovieByPage(this.numberPage)
  }

}
