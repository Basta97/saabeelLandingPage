import { Component, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SbAppBtn } from '../../common/sb-app-btn/sb-app-btn';

@Component({
  selector: 'app-hero',
  imports: [SbAppBtn, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  private sanitizer = inject(DomSanitizer);

  isVideoModalOpen = signal(false);
  videoUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.youtube.com/embed/0OlBYx8su48?autoplay=1&rel=0'
  );

  toggleVideoModal(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.isVideoModalOpen.set(!this.isVideoModalOpen());

    // Toggle body scroll
    if (this.isVideoModalOpen()) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }
  }
}
