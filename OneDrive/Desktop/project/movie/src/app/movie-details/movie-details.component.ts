// import { Component } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-movie-details',
//   templateUrl: './movie-details.component.html',
//   styleUrls: ['./movie-details.component.css']
// })
// export class MovieDetailsComponent {
//   movie: any;

//   movies = [
//     { id: 1, name: 'Inception', director: 'Christopher Nolan', year: 2010 },
//     { id: 2, name: 'Interstellar', director: 'Christopher Nolan', year: 2014 },
//     { id: 3, name: 'The Dark Knight', director: 'Christopher Nolan', year: 2008 },
//     { id: 4, name: 'Avatar', director: 'James Cameron', year: 2009 },
//     { id: 5, name: 'Titanic', director: 'James Cameron', year: 1997 },
//     { id: 6, name: 'Iron Man', director: 'Jon Favreau', year: 2008 },
//     { id: 7, name: 'The Matrix', director: 'Lana Wachowski, Lilly Wachowski', year: 1999 }
//   ];

//   constructor(private route: ActivatedRoute, private router: Router) {
//     const movieId = Number(this.route.snapshot.paramMap.get('id'));
//     this.movie = this.movies.find(m => m.id === movieId);
//   }

//   goToMovies() {
//     this.router.navigate(['/movies']);
//   }
// }

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  movie: any;
  movies = [
    { id: 1, name: 'Inception', director: 'Christopher Nolan', year: 2010 },
    { id: 2, name: 'Interstellar', director: 'Christopher Nolan', year: 2014 },
    { id: 3, name: 'The Dark Knight', director: 'Christopher Nolan', year: 2008 },
    { id: 4, name: 'Avatar', director: 'James Cameron', year: 2009 },
    { id: 5, name: 'Titanic', director: 'James Cameron', year: 1997 },
    { id: 6, name: 'Iron Man', director: 'Jon Favreau', year: 2008 },
    { id: 7, name: 'The Matrix', director: 'Lana Wachowski, Lilly Wachowski', year: 1999 }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
    const movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movies.find(m => m.id === movieId);
  }

  goHome() {
    this.router.navigate(['/']);
  }
}






