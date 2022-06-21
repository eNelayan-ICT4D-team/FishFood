import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Business, business } from '../../types/business'
import { OrderCartService } from '../order-cart.service';
import { Offer } from 'src/types/offer';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent implements OnInit {
  store: Business | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('storeId'));

    this.store = business.find(
      (store) => store.id === productIdFromRoute
    );
  }

  addProduct(item: Offer){

  }

  removeProduct(item: Offer){

  }
}

