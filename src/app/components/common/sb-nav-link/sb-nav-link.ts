import { Component, input } from '@angular/core';

@Component({
  selector: 'app-sb-nav-link',
  imports: [],
  templateUrl: './sb-nav-link.html',
  styleUrl: './sb-nav-link.css',
})
export class SbNavLink {
  href = input<string>('#');
  text = input.required<string>();
  isActive = input<boolean>(false);
}
