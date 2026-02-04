import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'sb-blog',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './sb-blog.html',
    styleUrl: './sb-blog.css'
})
export class SbBlog {
    blogPosts = signal([
        {
            title: 'قم بالتدريس اونلاين | دليلك الشامل للنجاح مع منصة سبيل',
            description: 'هل حلمت يومًا بأن تتحرر من قيود الفصول الدراسية التقليدية وتدرس للكثير من الطلاب المتواجدين في عدة أماكن في وقت واحد؟',
            image: '/images/feature1-2.png',
            link: '#'
        },
        {
            title: 'قم بالتدريس اونلاين | دليلك الشامل للنجاح مع منصة سبيل',
            description: 'هل حلمت يومًا بأن تتحرر من قيود الفصول الدراسية التقليدية وتدرس للكثير من الطلاب المتواجدين في عدة أماكن في وقت واحد؟',
            image: '/images/about_image.png',
            link: '#'
        },
        {
            title: 'قم بالتدريس اونلاين | دليلك الشامل للنجاح مع منصة سبيل',
            description: 'هل حلمت يومًا بأن تتحرر من قيود الفصول الدراسية التقليدية وتدرس للكثير من الطلاب المتواجدين في عدة أماكن في وقت واحد؟',
            image: '/images/feature_image.png',
            link: '#'
        },
        {
            title: 'قم بالتدريس اونلاين | دليلك الشامل للنجاح مع منصة سبيل',
            description: 'هل حلمت يومًا بأن تتحرر من قيود الفصول الدراسية التقليدية وتدرس للكثير من الطلاب المتواجدين في عدة أماكن في وقت واحد؟',
            image: '/images/sb-app-premium.png',
            link: '#'
        },
        {
            title: 'قم بالتدريس اونلاين | دليلك الشامل للنجاح مع منصة سبيل',
            description: 'هل حلمت يومًا بأن تتحرر من قيود الفصول الدراسية التقليدية وتدرس للكثير من الطلاب المتواجدين في عدة أماكن في وقت واحد؟',
            image: '/images/part-2.png',
            link: '#'
        },
        {
            title: 'قم بالتدريس اونلاين | دليلك الشامل للنجاح مع منصة سبيل',
            description: 'هل حلمت يومًا بأن تتحرر من قيود الفصول الدراسية التقليدية وتدرس للكثير من الطلاب المتواجدين في عدة أماكن في وقت واحد؟',
            image: '/images/part1.png',
            link: '#'
        }
    ]);
}
