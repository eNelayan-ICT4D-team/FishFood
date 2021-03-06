import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CardCarouselComponent } from '../card-carousel/card-carousel.component'
import { Business, business } from '../../types/business'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  business = business;
  /** Based on the screen size, switch from standard to one column per row */


  constructor(private breakpointObserver: BreakpointObserver) {}
}
