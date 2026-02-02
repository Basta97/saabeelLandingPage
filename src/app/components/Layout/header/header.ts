import { Component, signal, OnInit, OnDestroy, HostListener, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  isMenuOpen = signal(false);
  isHeaderVisible = signal(true);
  private lastScrollY = 0;
  private scrollThreshold = 10; 

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.lastScrollY = window.scrollY || window.pageYOffset;
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

    if (currentScrollY < 50) {
      this.isHeaderVisible.set(true);
    } 
    else if (currentScrollY > this.lastScrollY) {
      this.isHeaderVisible.set(false);
    } else {
      this.isHeaderVisible.set(true);
    }

    this.lastScrollY = currentScrollY;
  }

  toggleMenu() {
    this.isMenuOpen.update(val => !val);
  }
}
