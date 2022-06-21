import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { Injectable } from '@angular/core';
import { Offer } from 'src/types/offer';

@Injectable({
  providedIn: 'root'
})
export class OrderCartService {
  incart: Offer[] = [];
  store = "";
  addProductToCart(item: Offer, storestring: string){
    if(this.store == ""){
      this.store = storestring;
    } else if(this.store == storestring){
      //all good
    }
    else {
      //All good
      this.clearAll();
      this.store == storestring;
    }
    this.incart.push(item);
  }

  getAllItems(){
    return this.incart;
  }

  clearAll(){
    this.incart = [];
    return this.incart;
  }

  constructor() { }
}
