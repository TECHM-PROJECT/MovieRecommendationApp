import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Home
  { path: 'movies', component: MovieListComponent },  // Movies List
  { path: 'movie-details/:id', component: MovieDetailsComponent },  // Movie Details
  { path: 'search', component: MovieSearchComponent },  // Search Movies
  { path: 'signup', component: SignupComponent }  // Signup Page
];












