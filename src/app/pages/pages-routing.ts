import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { IntroComponent } from '../shared/intro/intro.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { SearchComponent } from './search/search.component';

export const route: Routes = [
    { path: 'search', component: SearchComponent },
    { path: 'movies/:slug', component: MovieInfoComponent }, //movies/:slug
    { path: 'movies', component: MoviesComponent },
    { path: 'intro', component: IntroComponent },
    { path: 'home', component: HomeComponent },
    {
        path: 'login',
        children: [
            {
                path: '',
                component: SignInComponent
            },
            {
                path: 'signin',
                component: SignInComponent
            }, {
                path: 'signup',
                component: SignUpComponent
            }
        ]
    }
]