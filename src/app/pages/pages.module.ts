import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { route } from "./pages-routing";
import { HomeComponent } from "./home/home.component";
import { SignInComponent } from "./login/sign-in/sign-in.component";
import { SignUpComponent } from "./login/sign-up/sign-up.component";
import { ComponentsModule } from "../components/components.module";
import { MoviesComponent } from './movies/movies.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { SearchComponent } from './search/search.component';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(route), ComponentsModule],
    declarations: [ SignInComponent, SignUpComponent, HomeComponent, MoviesComponent, MovieInfoComponent, SearchComponent],
    exports: [SignInComponent, SignUpComponent, HomeComponent]
})
export class PagesModule { }