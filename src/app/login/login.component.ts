import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ResourceService } from '../core/resource.service';





@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  showPasswordValidationMessage = false;
  loginForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private resourceService: ResourceService) { }

  removeValidationMessage() {
    this.showPasswordValidationMessage = false;
  }

  ngOnInit() {
    console.log("eee");
    this.initializedLoginForm();
  }

  initializedLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  next() {
    console.log(this.loginForm.value)

  }

  // Example function in LoginComponent
  Login() {
    const loginData = this.loginForm.value;

    this.resourceService.login(loginData).subscribe(
      (response) => {
        // Handle the response from the backend
        console.log('Login successful:', response);
      },
      (error) => {
        // Handle errors
        console.error('Login error:', error);
      }
    );
  }


}