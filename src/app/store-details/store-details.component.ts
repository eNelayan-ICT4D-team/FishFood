import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Business, business } from '../../types/business'
import { OrderCartService } from '../order-cart.service';
import { Offer } from 'src/types/offer';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent implements OnInit {
  store: Business | undefined;

  constructor(private route: ActivatedRoute,
    private ocs: OrderCartService

    ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('storeId'));

    this.store = business.find(
      (store) => store.id === productIdFromRoute
    );
  }

  addProduct(item: Offer, storestring: string){
    const numb=this.ocs.getCountItem(item);
    if(numb+0.5 > item.amountOfKilos ){
      //error msg
    } else {
      this.ocs.addProductToCart(item, storestring);
    }
  }

  removeProduct(item: Offer, storestring: string){
    const numb=this.ocs.getCountItem(item);
    if(numb-0.5 < 0){
      //errors msg
    } else {
      this.ocs.removeProductFromCart(item, storestring);
    }
  }
}

