import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SectionTitle } from '../../common/section-title/section-title';
import { SbSocialIcons } from '../../common/sb-social-icons/sb-social-icons';

@Component({
  selector: 'app-contactus',
  imports: [SectionTitle, ReactiveFormsModule, SbSocialIcons],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css',
})
export class Contactus {
  contactForm: FormGroup;
  isSubmitted = signal(false);
  isSubmitting = signal(false);

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern(/^[\d\+\-\s]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      inquiryType: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);

      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting.set(false);
        this.isSubmitted.set(true);
      }, 1000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  resetForm() {
    this.contactForm.reset();
    this.isSubmitted.set(false);
  }

  openWhatsApp() {
    const message = encodeURIComponent('مرحباً، أود الاستفسار عن خدمات منصة سبيل التعليمية');
    window.open(`https://wa.me/201040436991?text=${message}`, '_blank');
  }
}
