import { Component, OnInit } from '@angular/core';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { Business } from 'src/types/business';
import { Offer, offers } from '../../types/offer';

@Component({
  selector: 'app-manage-store',
  templateUrl: './manage-store.component.html',
  styleUrls: ['./manage-store.component.scss']
})
export class ManageStoreComponent implements OnInit {
  disableForm = true;

  store = {
    id: 1,
    owner: {username:"aceasa", password:"123123123", realName:"Adrian Aabech", typeOfUser:"Owner"},
    avgprice: 6,
    description: 'This fish is fantastic',
    rating: 3.8,
    businessname: 'Gigachad Nelayan',
    products: new Array<Offer>(
      offers[0], offers[1]
    ),
    location: '15999102'
  }

  enable(){
    if(this.disableForm=true) {
      this.disableForm=false;
    }
    else {
      this.disableForm=true;
    }
  }

  sendUpdate(){
    window.alert("Bruh");
  }

  constructor() { }

  ngOnInit(): void {
    this.getTempInfo();
  }

  getTempInfo(){
    this.store = {
      id: 1,
      owner: {username:"aceasa", password:"123123123", realName:"Adrian Aabech", typeOfUser:"Owner"},
      avgprice: 6,
      description: 'This fish is fantastic',
      rating: 3.8,
      businessname: 'Gigachad Nelayan',
      products: new Array<Offer>(
        offers[0], offers[1]
      ),
      location: '15999102'
    };
  }

}
