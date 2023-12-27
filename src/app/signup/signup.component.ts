import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ResourceService } from '../core/resource.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  showPasswordValidationMessage = true;
  signupForm!: FormGroup
  loginForm: any;
  constructor(private formBuilder: FormBuilder,
    private resourceService: ResourceService) { }

  removeValidationMessage() {
    this.showPasswordValidationMessage = false;

  }
  ngOnInit() {
    this.initializedSignupForm();
  }

  initializedSignupForm() {
    this.signupForm = this.formBuilder.group({

      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      confirmCode: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      otp: ['', [Validators.required]],

    });
  }
  add() {
    const loginData = this.signupForm?.value;
    console.log(loginData);
    this.resourceService.add(loginData).subscribe(
      (response: any) => {
        // Handle the response from the backend
        console.log('Login successful:', response);
      },
      (error: any) => {
        // Handle errors
        console.error('Login error:', error);
      }
    );
  }

  sendOTP() {
    // Assuming you have a backend API endpoint to send OTP
    const phoneNumber = this.signupForm.get('phoneNumber')?.value;

    // Replace 'your-api-endpoint' with your actual backend endpoint
    this.resourceService.otp(phoneNumber).subscribe(
      (response: any) => {
        // Handle success (OTP sent)
        console.log('OTP sent successfully');
      },
      (error: any) => {
        // Handle error
        console.error('Error sending OTP:', error);
      }
    );
  }

}