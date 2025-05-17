import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    // Initialize animations or any other setup
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      
      // Simulate API call
      setTimeout(() => {
        console.log('Login attempt:', this.loginForm.value);
        // Here you would normally make an actual API call to authenticate
        
        // For demo purposes, let's check if it's a test user
        if (this.email?.value === 'admin@example.com' && this.password?.value === 'password123') {
          // Navigate to dashboard on successful login
          this.router.navigate(['/admin/dashboard']);
        } else {
          // Show error for invalid credentials
          this.errorMessage = 'Invalid email or password';
        }
        
        this.isLoading = false;
      }, 1500);
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.loginForm.controls).forEach(key => {
        this.loginForm.get(key)?.markAsTouched();
      });
    }
  }
  
  // Convenience getters for form fields
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}