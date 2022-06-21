import { Component, OnInit, ViewChild } from '@angular/core';
import { Business, business } from '../../types/business'

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent implements OnInit {
  business = business;
  ngOnInit() { }

  constructor() { }


}
