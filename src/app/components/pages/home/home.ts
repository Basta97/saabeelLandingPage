import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { About } from '../../sections/about/about';
import { Features } from "../../sections/features/features";
import { Futuref } from "../../sections/futuref/futuref";
import { Package } from "../../sections/package/package";
import { Faq } from "../../sections/faq/faq";
import { Contactus } from '../../sections/contactus/contactus';
import { AttractAd } from "../../sections/attract-ad/attract-ad";
import { SbTestimonials } from "../../sections/sb-testimonials/sb-testimonials";


@Component({
  selector: 'app-home',
  imports: [Hero, About, Features, Futuref, Package, Faq, Contactus, AttractAd, SbTestimonials],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
