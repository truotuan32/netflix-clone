import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { RouterModule } from "@angular/router";
import { route } from "../pages/pages-routing";
import { BannerComponent } from './banner/banner.component';
import { SharedModule } from "../shared/shared.module";
import { FooterComponent } from './footer/footer.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { LayerInfoComponent } from './layer-info/layer-info.component';
import { MovieList2Component } from './movie-list2/movie-list2.component';
import { MovieItem2Component } from './movie-item2/movie-item2.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(route), FormsModule],
  declarations: [
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    MovieItemComponent,
    MovieListComponent,
    LayerInfoComponent,
    MovieList2Component,
    MovieItem2Component,
    MovieDetailComponent
  ],
  exports: [HeaderComponent, BannerComponent, FooterComponent, MovieListComponent, MovieList2Component]
})
export class ComponentsModule {

}