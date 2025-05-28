import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  contactForm: FormGroup;
  isLoading = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      title: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      this.successMessage = '';
      this.errorMessage = '';

      // Log the form values before sending
      console.log('Form values:', {
        name: this.contactForm.get('name')?.value,
        title: this.contactForm.get('title')?.value,
        email: this.contactForm.get('email')?.value,
        message: this.contactForm.get('message')?.value
      });

      // Initialize EmailJS with your service ID and template ID
      emailjs.init('kKhRTswKtK2zZgZUi'); // Replace with your EmailJS user ID

      const templateParams = {
        name: this.contactForm.get('name')?.value,
        title: this.contactForm.get('title')?.value,
        email: this.contactForm.get('email')?.value,
        message: this.contactForm.get('message')?.value,
      };

      // Log the template parameters
      console.log('Template parameters:', templateParams);

      emailjs.send('service_j7h7gay', 'template_7329nl7', templateParams)
        .then((response: any) => {
          console.log('EmailJS response:', response);
          this.successMessage = 'Message sent successfully!';
          this.contactForm.reset();
        }, (error: any) => {
          console.error('EmailJS Error:', error);
          if (error.text) {
            this.errorMessage = error.text;
          } else {
            this.errorMessage = 'Error sending message. Please try again.';
          }
        })
        .catch((error: any) => {
          console.error('EmailJS Catch Error:', error);
          this.errorMessage = 'Error sending message. Please try again.';
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
}
