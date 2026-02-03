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
  private lastScrollY = 0;
  private scrollThreshold = 10;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.lastScrollY = window.scrollY || window.pageYOffset;
      // Hide header immediately if page is loaded scrolled down
      if (this.lastScrollY >= 50) {
        this.isHeaderVisible.set(false);
      }
    }
  }

  ngOnDestroy() {
  }

  @HostListener('window:scroll')
  onScroll() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const currentScrollY = window.scrollY || window.pageYOffset;

    if (Math.abs(currentScrollY - this.lastScrollY) < this.scrollThreshold) {
      return;
    }

    // Header only visible at top of page (< 50px)
    // BUT always visible if menu is open
    if (currentScrollY < 50 || this.isMenuOpen()) {
      this.isHeaderVisible.set(true);
    } else {
      this.isHeaderVisible.set(false);
    }

    this.lastScrollY = currentScrollY;
  }

  toggleMenu() {
    this.isMenuOpen.update(val => !val);

    if (isPlatformBrowser(this.platformId)) {
      if (this.isMenuOpen()) {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden'; // Lock both for better mobile support
        this.isHeaderVisible.set(true);
      } else {
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
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

