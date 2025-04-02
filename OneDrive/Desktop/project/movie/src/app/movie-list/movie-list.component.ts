import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // ✅ Import CommonModule

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  constructor(private router: Router) {}

  movies = [
    { id: 1, name: 'Inception', director: 'Christopher Nolan', year: 2010 },
    { id: 2, name: 'Interstellar', director: 'Christopher Nolan', year: 2014 },
    { id: 3, name: 'The Dark Knight', director: 'Christopher Nolan', year: 2008 },
    { id: 4, name: 'Avatar', director: 'James Cameron', year: 2009 },
    { id: 5, name: 'Titanic', director: 'James Cameron', year: 1997 },
    { id: 6, name: 'Iron Man', director: 'Jon Favreau', year: 2008 },
    { id: 7, name: 'The Matrix', director: 'Lana Wachowski, Lilly Wachowski', year: 1999 }
  ];

  viewDetails(id: number) {
    this.router.navigate(['/movie-details', id]);
  }

  goToHome() {
    this.router.navigate(['/']);  // ✅ Navigates back to Home Page
  }
}









