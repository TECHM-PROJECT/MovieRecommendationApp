
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username = '';
  email = '';  
  password = '';
  constructor(private router: Router) {}

  signUp() {
    if (this.username && this.email && this.password) {  //  Check if all fields are filled
      console.log('User signed up:', this.username, this.email);
      this.router.navigate(['/movie-list']);
    } 
    else 
    {
      alert('Please fill in all fields before signing up.');
    }
  }
  login(){
    this.router.navigate(['/login']) //navigate to login page
  }

  goToHome() {
    this.router.navigate(['/']); // Navigates to the home page
  }
}


