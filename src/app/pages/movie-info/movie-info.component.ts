import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieDetail } from 'src/app/models/movie-detail';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  isShowContentMovie = true;
  isShowEpisode = true;
  movieInfo$!:Observable<MovieDetail>;

  constructor(private readonly route: ActivatedRoute, private readonly movieService: MovieService) { }

  ngOnInit(): void {
    let slug = this.route.snapshot.paramMap.get('slug');
    if(slug){
      this.movieInfo$ = this.movieService.getMovieBySlug(slug)
    }else{

    }
  }

  handlerShowContentMovie() {
    this.isShowContentMovie = !this.isShowContentMovie
  }

  handlerShowEpisode() {
    this.isShowEpisode = !this.isShowEpisode;
  }

}
