import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SbSocialIcons } from '../../common/sb-social-icons/sb-social-icons';

@Component({
  selector: 'app-footer',
  imports: [SbSocialIcons, RouterLink, RouterLinkActive],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

}
