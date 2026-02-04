import { Component, signal, computed } from '@angular/core';
import { SectionTitle } from '../../common/section-title/section-title';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  imports: [SectionTitle, CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
  standalone: true
})
export class Faq {
  activeIndex: number | null = 0; // First question active by default
  isExpanded = signal(false);
  itemsToShow = 4;

  // All FAQ data
  allFaqs: FaqItem[] = [
    // Page 1
    {
      question: 'أين يتم حفظ الفيديوهات الخاصة بي؟',
      answer: 'نقوم بتخزين الفيديوهات في سيرفراتنا، وهي مشفرة ومؤمنة مع أفضل بروتوكولات الأمان بحيث لا يستطيع أحد الوصول إليها بشكل غير مصرح به.'
    },
    {
      question: 'لمن يتم حفظ المعلومات الخاصة بي؟',
      answer: 'نقوم بتخزين المعلومات في سيرفراتنا، وهي مشفرة ومؤمنة مع أفضل بروتوكولات الأمان.'
    },
    {
      question: 'هل يمكن للطلاب تحميل الفيديوهات؟',
      answer: 'لا، نظامنا يمنع تحميل الفيديوهات بشكل كامل للحفاظ على حقوق المحتوى الخاص بك.'
    },
    {
      question: 'كيف يتم حماية المحتوى من التصوير؟',
      answer: 'نستخدم تقنيات حماية متقدمة تمنع التصوير وتضع علامات مائية لحماية المحتوى.'
    },

    // Page 2
    {
      question: 'ما هي خيارات الدفع المتاحة؟',
      answer: 'نوفر عدة خيارات للدفع بما في ذلك البطاقات الائتمانية والتحويل البنكي والمحافظ الإلكترونية.'
    },
    {
      question: 'هل يمكنني إلغاء الاشتراك في أي وقت؟',
      answer: 'نعم، يمكنك إلغاء الاشتراك في أي وقت من لوحة التحكم الخاصة بك بسهولة تامة.'
    },
    {
      question: 'كم عدد الطلاب الذين يمكنني إضافتهم؟',
      answer: 'يعتمد ذلك على الباقة التي اخترتها، حيث نوفر باقات مختلفة تناسب جميع الاحتياجات.'
    },
    {
      question: 'هل يوجد دعم فني متاح؟',
      answer: 'نعم، لدينا فريق دعم فني متاح على مدار الساعة للإجابة على استفساراتك وحل أي مشكلة.'
    },

    // Page 3
    {
      question: 'هل يمكنني رفع ملفات PDF والمستندات؟',
      answer: 'نعم، يمكنك رفع جميع أنواع الملفات التعليمية بما في ذلك PDF، Word، PowerPoint وغيرها.'
    },
    {
      question: 'كيف يتم متابعة تقدم الطلاب؟',
      answer: 'نوفر لوحة تحكم شاملة تعرض تقدم كل طالب، نسب الحضور، ونتائج الاختبارات بشكل تفصيلي.'
    },
    {
      question: 'هل يوجد تطبيق للهاتف المحمول؟',
      answer: 'نعم، لدينا تطبيقات متاحة لأنظمة iOS وAndroid لتسهيل الوصول للمحتوى في أي وقت.'
    },
    {
      question: 'كيف يتم التواصل مع الطلاب؟',
      answer: 'يمكنك التواصل مع الطلاب عبر الإشعارات الفورية، البريد الإلكتروني، أو نظام الرسائل الداخلي.'
    },

    // Page 4
    {
      question: 'هل يمكن إنشاء اختبارات تفاعلية؟',
      answer: 'نعم، نوفر أدوات متقدمة لإنشاء اختبارات متنوعة بأسئلة اختيار متعدد، صح وخطأ، وأسئلة مقالية.'
    },
    {
      question: 'ما هي مدة صلاحية الاشتراك؟',
      answer: 'تختلف مدة الصلاحية حسب الباقة المختارة، ويمكن التجديد تلقائياً أو يدوياً حسب رغبتك.'
    },
    {
      question: 'هل يمكن تخصيص المنصة بشعار مركزي؟',
      answer: 'نعم، في باقة المنصة الخاصة يمكنك تخصيص كامل المنصة بشعارك وألوان علامتك التجارية.'
    },
    {
      question: 'كيف يتم تأمين بيانات الطلاب؟',
      answer: 'نستخدم أحدث معايير التشفير وبروتوكولات الأمان لحماية جميع بيانات الطلاب والمعلمين.'
    }
  ];

  // Computed property to get visible FAQs
  currentFaqs = computed(() => {
    if (this.isExpanded()) {
      return this.allFaqs;
    }
    return this.allFaqs.slice(0, this.itemsToShow);
  });

  toggle(index: number): void {
    if (this.activeIndex === index) {
      this.activeIndex = null;
    } else {
      this.activeIndex = index;
    }
  }

  showMore(): void {
    this.isExpanded.set(true);
    this.activeIndex = null; // Close all accordions when expanding
  }
}
