import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionTitle } from '../../common/section-title/section-title';

@Component({
  selector: 'app-package',
  imports: [SectionTitle, RouterLink],
  templateUrl: './package.html',
  styleUrl: './package.css',
})
export class Package {

}
