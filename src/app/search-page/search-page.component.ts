import { Component, OnInit } from '@angular/core';
import { offers, Offer } from 'src/types/offer';
import { Business } from 'src/types/business';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  stores=[];
  searchStores(){
    //api call search, this should be handled by shekhar
    this.stores.push({
      id: 111,
      owner: {username:"placeholder", password:"ppppp", realName:"Place H. Older", typeOfUser:"Owner"},
      avgprice: 8,
      description: 'Nom nom good fish get it now',
      rating: 3.8,
      businessname: 'Placeholder nelayan',
      products: new Array<Offer>(
        offers[6], offers[7]
      ),
      location: '15999102'
    },
    {
      id: 111,
      owner: {username:"placeholder", password:"ppppp", realName:"Place H. Older", typeOfUser:"Owner"},
      avgprice: 10,
      description: 'Still fresh and looking good! Get now for only 10RM per kilo!',
      rating: 5,
      businessname: 'Placeholder fish',
      products: new Array<Offer>(
        offers[2], offers[3]
      ),
      location: '15999102'
    },
    {
      id: 100,
      owner: {username:"placeholder", password:"ppppp", realName:"Place H. Older", typeOfUser:"Owner"},
      avgprice: 7.3,
      description: 'some some',
      rating: 4.5,
      businessname: 'Placeholder FishSupply',
      products: new Array<Offer>(
        offers[6], offers[1]
      ),
      location: '15999102'
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
