import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { LayerInfoComponent } from '../layer-info/layer-info.component';
import { Observable } from 'rxjs';
import { MovieDetail } from 'src/app/models/movie-detail';
import { MovieService } from 'src/app/service/movie.service';
const slugs = [
  'nguoi-nhen',
  'nguoi-doi',
  'nguoi-nhen-du-hanh-vu-tru-nhen',
  'shin-kamen-rider',
  'xam-lang-phan-2',
  'tho-san',
]
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @ViewChild('dynamicLayerInfo', { read: ViewContainerRef, static: true }) containerRef!: ViewContainerRef
  movieDetail$!: Observable<MovieDetail>
  slug: string = slugs[Math.floor(Math.random() * slugs.length)]

  constructor(private readonly cfr: ComponentFactoryResolver, private readonly movieService: MovieService) { }

  ngOnInit(): void {
    this.movieDetail$ = this.movieService.getMovieBySlug(this.slug);
  }

  addLayerInfo() {
    if (this.containerRef) {
      this.containerRef.clear();
      const componentFactory = this.cfr.resolveComponentFactory(LayerInfoComponent);
      const componentRef = this.containerRef.createComponent(componentFactory);
      if (componentRef !== undefined) {
        componentRef.instance.slug = this.slug
        componentRef.instance.showInfo = true;
        componentRef.instance.deleteRequest.subscribe(() => {
          componentRef.destroy()
        })
      }
    }
  }

}
