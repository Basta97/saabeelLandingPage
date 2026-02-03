import { Component, input } from '@angular/core';

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

@Component({
    selector: 'app-sb-social-icons',
    imports: [],
    templateUrl: './sb-social-icons.html',
    styleUrl: './sb-social-icons.css',
})
export class SbSocialIcons {
    size = input<'small' | 'medium' | 'large'>('medium');

    socialLinks: SocialLink[] = [
        { name: 'Facebook', url: 'https://www.facebook.com/saabeelofficial/', icon: 'icons/facebook_icon.svg' },
        { name: 'YouTube', url: 'https://www.youtube.com/@saabeelofficial', icon: 'icons/youtube_icon.svg' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/company/saabeel-%D8%B3%D8%A8%D9%8A%D9%84/?originalSubdomain=eg', icon: 'icons/linkedin_icon.svg' },
        { name: 'X', url: 'https://x.com/saabeelofficial', icon: 'icons/x_icon.svg' },
        { name: 'Instagram', url: 'https://www.instagram.com/saabeelofficial/', icon: 'icons/instgram_icon.svg' },
        { name: 'TikTok', url: 'https://www.tiktok.com/@saabeelofficial?lang=en', icon: 'icons/tiktok_icon.svg' }
    ];
}
