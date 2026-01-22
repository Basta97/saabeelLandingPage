import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { Features } from "../../sections/features/features";
import { Futuref } from "../../sections/futuref/futuref";
import { Package } from "../../sections/package/package";

@Component({
  selector: 'app-home',
  imports: [Hero, Features, Futuref, Package],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
