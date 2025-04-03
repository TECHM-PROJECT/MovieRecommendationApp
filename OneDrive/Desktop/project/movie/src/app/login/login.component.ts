
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  loginToMyAccount() 
  {
    if (this.email && this.password) 
    {  //  Check if all fields are filled
    // Here you would call an API to verify the email and password
    console.log('User logged in:', this.email);
    
    // Navigate to movie list after login
    this.router.navigate(['/movie-list']);
    }
  }
  createAccount()
  {
    this.router.navigate(['/signup']); //Navigates to the signup page
  }
  goToHome() {
    this.router.navigate(['/']); // Navigates to the home page
  }
}

