import { Component, OnInit, Input } from '@angular/core';
import { MovieInPage } from 'src/app/models/movie-item-in-page';

@Component({
  selector: 'app-movie-item2',
  templateUrl: './movie-item2.component.html',
  styleUrls: ['./movie-item2.component.css']
})
export class MovieItem2Component implements OnInit {
  @Input() movieInPage!:MovieInPage;

  constructor() { }

  ngOnInit(): void {
  }

}
