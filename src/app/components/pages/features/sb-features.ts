import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'sb-features',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './sb-features.html',
    styleUrl: './sb-features.css'
})
export class SbFeatures {
    features = signal([
        {
            title: 'حماية متقدمة للمحتوى',
            description: 'نظام أمان متكامل يمنع التصوير والمشاركة ويحافظ على حقوقك بالكامل.',
            icon: 'icons/shield-lock.svg', // Placeholder, using general icons
            isActive: true
        },
        {
            title: 'اختبارات ذكية ومتطورة',
            description: 'إنشاء اختبارات تلقائية مع تقارير تفصيلية لقياس الأداء والتفاعل.',
            icon: 'icons/quiz.svg',
            isActive: false
        },
        {
            title: 'إدارة فرق العمل',
            description: 'تنظيم الصلاحيات، متابعة الأداء، والتعاون بين أعضاء الفريق بسهولة.',
            icon: 'icons/team.svg',
            isActive: false
        },
        {
            title: 'حماية متقدمة للمحتوى',
            description: 'نظام أمان متكامل يمنع التصوير والمشاركة ويحافظ على حقوقك بالكامل.',
            icon: 'icons/shield-lock.svg',
            isActive: false
        },
        {
            title: 'اختبارات ذكية ومتطورة',
            description: 'إنشاء اختبارات تلقائية مع تقارير تفصيلية لقياس الأداء والتفاعل.',
            icon: 'icons/quiz.svg',
            isActive: false
        },
        {
            title: 'إدارة فرق العمل',
            description: 'تنظيم الصلاحيات، متابعة الأداء، والتعاون بين أعضاء الفريق بسهولة.',
            icon: 'icons/team.svg',
            isActive: false
        }
    ]);
}
