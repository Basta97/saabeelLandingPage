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
            icon: 'icons/f1.png',
            isActive: true
        },
        {
            title: 'اختبارات ذكية ومتطورة',
            description: 'إنشاء اختبارات تلقائية مع تقارير تفصيلية لقياس الأداء والتفاعل.',
            icon: 'icons/f2.png',
            isActive: false
        },
        {
            title: 'إدارة فرق العمل',
            description: 'تنظيم الصلاحيات، متابعة الأداء، والتعاون بين أعضاء الفريق بسهولة.',
            icon: 'icons/f3.png',
            isActive: false
        },
        {
            title: 'تحكم كامل للمعلم',
            description: 'إدارة الدروس، الطلاب، والمحتوى بسهولة من لوحة تحكم واحدة على جميع الأجهزة.',
            icon: 'icons/f4.png',
            isActive: false
        },
        {
            title: 'مرفقات ذكية بعلامة مائية',
            description: 'حماية الملفات التعليمية مع تتبع الاستخدام ومنع النسخ أو التداول غير المصرّح به.',
            icon: 'icons/f5.png',
            isActive: false
        },
        {
            title: 'المزيد من المميزات',
            description: 'اكتشف أدوات إضافية وخدمات متخصصة لتحسين تجربتك التعليمية وإدارة المحتوى باحترافية.',
            icon: 'icons/f6.png',
            isActive: false
        }
    ]);
}
