import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviePage } from 'src/app/models/movie-page';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-list2',
  templateUrl: './movie-list2.component.html',
  styleUrls: ['./movie-list2.component.css']
})
export class MovieList2Component implements OnInit {
  pageContent = {
    pageActive: 1,
    sizePage: [1, 2, 3, 4, 5]
  };
  listMovie$!: Observable<MoviePage>

  constructor(private readonly movieService: MovieService) { }

  ngOnInit(): void {
    this.getListMovieFunc();
  }

  getListMovieFunc() {
    this.listMovie$ = this.movieService.getMovieByPage(this.pageContent.pageActive);
  }

  handlerPrev() {
    if (this.pageContent.pageActive > 1) {
      this.pageContent.pageActive = this.pageContent.pageActive - 1;
      this.handlerPageActive();
      this.getListMovieFunc();
    } else {
      this.pageContent.pageActive = 1
      this.handlerPageActive();
    }
  }

  handlerNext() {
    this.pageContent.pageActive = this.pageContent.pageActive + 1;
    this.handlerPageActive();
    this.getListMovieFunc();
  }

  setPageNumberFunc(val: number) {
    this.pageContent.pageActive = val;
    this.handlerPageActive();
    this.getListMovieFunc();
  }

  handlerPageActive() {
    if (this.pageContent.pageActive === 1 || this.pageContent.pageActive === 2) {
      this.pageContent.sizePage = [1, 2, 3, 4, 5];
    } else {
      let index = this.pageContent.sizePage.indexOf(this.pageContent.pageActive);

      if (index > -1) {
        if (index > 2) {
          this.pageContent.sizePage.splice(0, index - 2);
          let pageNumberLast = this.pageContent.sizePage[this.pageContent.sizePage.length - 1];
          for (let i = 0; i < index - 2; i++) {
            this.pageContent.sizePage.push(pageNumberLast + 1)
            pageNumberLast++;
          }
        } else if (index < 2) {
          let numToRemove = 2 - index
          let startRemove = this.pageContent.sizePage.length - numToRemove;
          this.pageContent.sizePage.splice(startRemove, numToRemove);
          let pageNumberFirst = this.pageContent.sizePage[0]
          for (let i = 0; i < 2 - index; i++) {
            this.pageContent.sizePage.push(pageNumberFirst - 1)
            pageNumberFirst--;
          }
          this.pageContent.sizePage.sort((a, b) => a - b)
        }
      } else {

      }
    }

  }
}
