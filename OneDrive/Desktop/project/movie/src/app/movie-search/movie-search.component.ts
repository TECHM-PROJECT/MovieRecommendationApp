// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-movie-search',
//   templateUrl: './movie-search.component.html',
//   styleUrls: ['./movie-search.component.css']
// })
// export class MovieSearchComponent {
//   constructor(private router: Router) {}

//   movies = ['Inception', 'Interstellar', 'The Dark Knight', 'Avatar', 'Titanic', 'Iron Man', 'The Matrix'];
//   filteredMovies = this.movies;

//   onSearch(event: Event) {
//     const query = (event.target as HTMLInputElement).value.toLowerCase();
//     this.filteredMovies = this.movies.filter(movie => movie.toLowerCase().includes(query));
//   }

//   goHome() {
//     this.router.navigate(['/']);
//   }
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // ✅ Import CommonModule

@Component({
  selector: 'app-movie-search',
  standalone: true,  // ✅ Standalone component
  imports: [CommonModule],  // ✅ Add CommonModule here
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  constructor(private router: Router) {}

  movies = [
    { id: 1, name: 'Inception', director: 'Christopher Nolan', year: 2010 },
    { id: 2, name: 'Interstellar', director: 'Christopher Nolan', year: 2014 },
    { id: 3, name: 'The Dark Knight', director: 'Christopher Nolan', year: 2008 },
    { id: 4, name: 'Avatar', director: 'James Cameron', year: 2009 },
    { id: 5, name: 'Titanic', director: 'James Cameron', year: 1997 },
    { id: 6, name: 'Iron Man', director: 'Jon Favreau', year: 2008 },
    { id: 7, name: 'The Matrix', director: 'Lana & Lilly Wachowski', year: 1999 }
  ];

  filteredMovies = this.movies;

  onSearch(event: Event) {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredMovies = this.movies.filter(movie => 
      movie.name.toLowerCase().includes(query)
    );
  }

  goToMovieDetails(movieId: number) {
    this.router.navigate(['/movie-details', movieId]);  // ✅ Navigate to movie details
  }

  goHome() {
    this.router.navigate(['/']);
  }
}




