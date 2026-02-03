import { Component, input } from '@angular/core';

@Component({
    selector: 'app-sb-app-btn',
    imports: [],
    templateUrl: './sb-app-btn.html',
    styleUrl: './sb-app-btn.css',
})
export class SbAppBtn {
    href = input.required<string>();
    topText = input.required<string>();
    bottomText = input.required<string>();
    ariaLabel = input<string>('');
    customClass = input<string>('');
}
