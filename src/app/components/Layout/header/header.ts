import { Component, signal, OnInit, OnDestroy, HostListener, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SbSocialIcons } from '../../common/sb-social-icons/sb-social-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SbSocialIcons, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  isMenuOpen = signal(false);
  isHeaderVisible = signal(true);
  isChatOpen = signal(false);

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  // Scroll logic removed - header is now constant

  toggleMenu() {
    this.isMenuOpen.update(val => !val);

    if (isPlatformBrowser(this.platformId)) {
      if (this.isMenuOpen()) {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
      } else {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
      }
    }
  }

  toggleChat() {
    this.isChatOpen.update(val => !val);
  }

  openWhatsApp() {
    const message = encodeURIComponent('مرحباً أود الاستفسار عن سبيل');
    window.open(`https://wa.me/201040436991?text=${message}`, '_blank');
  }
}

