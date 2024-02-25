import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ResourceService } from '../core/resource.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm!: FormGroup;
  login: any;

  constructor(private formBuilder: FormBuilder, private resourceService: ResourceService) { }

  ngOnInit() {
    this.initializeForgetPasswordForm();
  }

  Login() { }

  initializeForgetPasswordForm() {
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  sendResetLink() {
    const forgetPasswordData = this.forgetPasswordForm.value;

    this.resourceService.reset(forgetPasswordData).subscribe(
      (response: any) => {
        // Handle the response from the backend (e.g., show a success message)
        console.log('Reset link sent successfully:', response);
      },
      (error: any) => {
        // Handle errors (e.g., display an error message to the user)
        console.error('Reset link error:', error);
      }
    );
  }
}