import { Component, signal, computed, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SectionTitle } from '../../common/section-title/section-title';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    avatar: string;
    type: 'audio' | 'text';
    content: string;
    duration?: string;
}

@Component({
    selector: 'app-sb-testimonials',
    imports: [SectionTitle],
    templateUrl: './sb-testimonials.html',
    styleUrl: './sb-testimonials.css',
})
export class SbTestimonials implements AfterViewInit {
    @ViewChild('trackRef') trackRef!: ElementRef<HTMLDivElement>;

    testimonials: Testimonial[] = [
        {
            id: 1,
            name: 'محمد السيد',
            role: 'صاحب مركز تعليمي',
            avatar: 'images/cust1.png',
            type: 'audio',
            content: 'بصراحة انا تجربتي معاكوا',
            duration: '1:23'
        },
        {
            id: 2,
            name: 'محمد السيد',
            role: 'صاحب مركز تعليمي',
            avatar: 'images/cust2.png',
            type: 'text',
            content: 'بصراحة تجربتي مع منصة سبيل التعليمية كانت ممتازة، وانا في الاستخدام سوا التدريس منتظم مال جداً والتواصل فيها سلس ومنتظم جداً بيخلي عملية الشرح والتفاعل سلسة ومريحة كمان خدمة الدعم الفني محترمة ومريحة جداً في الرد وحل أي مشكلة. وده بيثبت إحساسي بالاحتراف والاهتمام الحقيقي بالمستخدمين. بصراحة فخور إني معاكوا ومنصة بالشكل ده فعلاً يترفع التدريس حاجة سهلة وجميلة ❤️'
        },
        {
            id: 3,
            name: 'محمد السيد',
            role: 'صاحب مركز تعليمي',
            avatar: 'images/cust3.png',
            type: 'audio',
            content: 'بصراحة انا تجربتي معاكوا',
            duration: '1:23'
        }
    ];

    currentIndex = signal(0);
    activeTestimonialId = signal(2);
    canGoNext = signal(true);
    canGoPrev = signal(false);

    visibleTestimonials = computed(() => {
        return this.testimonials;
    });

    ngAfterViewInit() {
        this.updateNavState();
    }

    nextSlide() {
        if (this.trackRef) {
            this.trackRef.nativeElement.scrollBy({ left: -420, behavior: 'smooth' });
            setTimeout(() => this.updateNavState(), 300);
        }
    }

    prevSlide() {
        if (this.trackRef) {
            this.trackRef.nativeElement.scrollBy({ left: 420, behavior: 'smooth' });
            setTimeout(() => this.updateNavState(), 300);
        }
    }

    private updateNavState() {
        if (this.trackRef) {
            const el = this.trackRef.nativeElement;
            this.canGoPrev.set(el.scrollLeft < 0);
            this.canGoNext.set(el.scrollLeft > -(el.scrollWidth - el.clientWidth));
        }
    }
}
