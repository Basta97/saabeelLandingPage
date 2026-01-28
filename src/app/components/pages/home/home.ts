import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { Features } from "../../sections/features/features";
import { Futuref } from "../../sections/futuref/futuref";
import { Package } from "../../sections/package/package";
import { Faq } from "../../sections/faq/faq";
import { Contactus } from '../../sections/contactus/contactus';


@Component({
  selector: 'app-home',
  imports: [Hero, Features, Futuref, Package, Faq,Contactus],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
