import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { fadeInOutAnimation } from './animation';
import { MovieService } from 'src/app/service/movie.service';
import { Observable } from 'rxjs';
import { MovieDetail } from 'src/app/models/movie-detail';

@Component({
  selector: 'app-layer-info',
  templateUrl: './layer-info.component.html',
  styleUrls: ['./layer-info.component.css'],
  animations: [fadeInOutAnimation]
})
export class LayerInfoComponent implements OnInit {
  @Input() showInfo: boolean = false;
  @Output() deleteRequest = new EventEmitter<void>();
  @Input() slug!: string;
  movieDetail$!: Observable<MovieDetail>;

  constructor(private readonly movieService: MovieService) { }

  ngOnInit(): void {
    if (this.slug) {
      this.movieDetail$ = this.movieService.getMovieBySlug(this.slug);
    }
  }

  closeLayer() {
    this.deleteRequest.emit();
  }


}
