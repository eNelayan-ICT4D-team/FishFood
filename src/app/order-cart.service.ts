import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { _isTestEnvironment } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import { Offer } from 'src/types/offer';

export class OrderItem{
  item: Offer;
  amount: number;

  constructor(item: Offer, amount: number){
    this.item = item;
    this.amount = amount;
  }
}
@Injectable({
  providedIn: 'root'
})
export class OrderCartService {
  incart: OrderItem[] = [];
  store = "";

  addProductToCart(item: Offer, storestring: string){
    if(this.store == ""){
      this.store = storestring;
    } else if(this.store == storestring){
      //all good
    }
    else {
      this.clearAll();
      this.store == storestring;
    }

    for (let i; i>this.incart.length; i++){
      if(this.incart[i].item.oId == item.oId){
        this.incart[i].amount += 0.5;
        return true;
      }
    }
    let oi = new OrderItem(item, 0.5);
    this.incart.push(oi);
    return false;
  }

  getAllItems(){
    return this.incart;
  }

  removeProductFromCart(item: Offer, storestring: string){
    if(this.store == ""){
      this.store = storestring;
    } else if(this.store == storestring){
      //all good
    }
    else {
      this.clearAll();
      this.store == storestring;
      return false;
    }
    for (let i; i>this.incart.length; i++){
      if(this.incart[i].item.oId == item.oId){
        if(this.incart[i].amount-0.5 < 0){
          //error msg
          return false;
        }
        else {
          this.incart[i].amount -= 0.5;
          return true;
        }

      }
    }
    return false;
  }

  clearAll(){
    this.incart = [];
    return this.incart;
  }

  getCountItem(item){
    var count = 0;
    for (let i; i>this.incart.length; i++){
      if(this.incart[i].item.oId == item.oId){
        return this.incart[i].amount;
      }
    }
    return count;
  }

  getCountAll(){
    return this.incart.length;
  }

  constructor() { }
}
