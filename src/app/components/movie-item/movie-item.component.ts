import { Component, Input, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { LayerInfoComponent } from '../layer-info/layer-info.component';
import { MovieService } from 'src/app/service/movie.service';
import { Observable } from 'rxjs';
import { MovieDetail } from 'src/app/models/movie-detail';
import { MovieInPage } from 'src/app/models/movie-item-in-page';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() type!: string; //md, high
  @ViewChild('dynamicLayerInfo', { read: ViewContainerRef, static: true }) containerRef!: ViewContainerRef
  @Input() movieInPage!: MovieInPage;

  item$!: Observable<MovieDetail>;

  constructor(private readonly cfr: ComponentFactoryResolver, private readonly movieService: MovieService) { }

  ngOnInit(): void {
    // if(this.slug === '') this.slug = 'ngoi-truong-xac-song'
    // console.log('slug: ' + this.slug)
    // this.item$ = this.movieService.getMovieBySlug(this.slug)
    // console.log('vcl: ' + this.item$)
  }

  addLayerInfo() {
    if (this.containerRef) {
      this.containerRef.clear();
      const componentFactory = this.cfr.resolveComponentFactory(LayerInfoComponent);
      const componentRef = this.containerRef.createComponent(componentFactory);
      if (componentRef !== undefined) {
        if (this.movieInPage.slug) {
          componentRef.instance.slug = this.movieInPage.slug;
        }
        componentRef.instance.showInfo = true;
        componentRef.instance.deleteRequest.subscribe(() => {
          componentRef.destroy()
        })
      }
    }
  }
}
