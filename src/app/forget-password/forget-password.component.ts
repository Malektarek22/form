import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ResourceService } from '../core/resource.service';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private resourceService: ResourceService) { }

  ngOnInit() {
    this.initializeForgetPasswordForm();
  }

  initializeForgetPasswordForm() {
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  sendResetLink() {
    const forgetPasswordData = this.forgetPasswordForm.value;

    this.resourceService.sendResetLink(forgetPasswordData).subscribe(
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