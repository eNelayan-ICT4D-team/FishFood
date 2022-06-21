import { Offer, offers } from "./offer";
import { User } from "./user";

export interface Business {
  id: number;
  owner?: User;
  avgprice: number;
  description: string;
  rating: number;
  businessname: string;
  products?: Array<Offer>;
  location?: string;

}

export const business = [
  {
    id: 1,
    owner: {username:"aceasa", password:"123123123", realName:"Adrian Aabech", typeOfUser:"Owner"},
    avgprice: 6,
    description: 'This fish is fantastic',
    rating: 3.8,
    businessname: 'Gigachad Nelayan',
    expiration: new Date('2022-07-20'),
    products: new Array<Offer>(
      offers[0], offers[1]
    ),
    location: '15999102'
  },
  {
    id: 2,
    owner: {username:"nanpom", password:"3213121321", realName:"Nanda To", typeOfUser:"Owner"},
    avgprice: 7.2,
    description: 'Fresh catch from rivers and ocean! Get the highest quality fish in Asajaya',
    rating: 5,
    businessname: 'Fishfood',
    expiration: new Date('2022-07-01'),
    products: new Array<Offer>(
      offers[2], offers[3]
    ),
    location: '15999102'
  },
  {
    id: 3,
    owner: {username:"onya22", password:"355551321", realName:"Oyanka Pom", typeOfUser:"Owner"},
    avgprice: 8,
    description: 'Good stuff ;)',
    rating: 4.5,
    businessname: 'Labo Fish Supply',
    expiration: new Date('2022-07-05'),
    products: new Array<Offer>(
      offers[4], offers[5]
    ),
    location: '15999102'
  },
  {
    id: 4,
    owner: {username:"janjans", password:"32455521991", realName:"Jan Janssen", typeOfUser:"Owner"},
    avgprice: 6,
    description: 'This is some good stuff!',
    rating: 3.8,
    businessname: 'Adrian Nelayan',
    expiration: new Date('2022-07-20'),
    products: new Array<Offer>(
      offers[0], offers[1]
    ),
    location: '15999102'
  },
  {
    id: 5,
    owner: {username:"placeholder", password:"ppppp", realName:"Place H. Older", typeOfUser:"Owner"},
    avgprice: 7.2,
    description: 'Fresh catch from rivers and ocean! Get the highest quality fish in Asajaya',
    rating: 5,
    businessname: 'Fishpanda',
    expiration: new Date('2022-07-01'),
    products: new Array<Offer>(
      offers[2], offers[3]
    ),
    location: '15999102'
  },
  {
    id: 6,
    owner: {username:"placeholder", password:"ppppp", realName:"Place H. Older", typeOfUser:"Owner"},
    avgprice: 8,
    description: '',
    rating: 4.5,
    businessname: 'Pieter Fish Supply',
    expiration: new Date('2022-07-05'),
    products: new Array<Offer>(
      offers[4], offers[5]
    ),
    location: '15999102'
  }
];

export const offers2 = [
  {
    id: 1,
    owner: {username:"placeholder", password:"ppppp", realName:"Place H. Older", typeOfUser:"Owner"},
    avgprice: 8,
    description: 'Nom nom good fish get it now',
    rating: 3.8,
    businessname: 'Gigachad Nelayan',
    expiration: new Date('2022-07-05'),
    products: new Array<Offer>(
      offers[6], offers[7]
    ),
    location: '15999102'
  },
  {
    id: 2,
    owner: {username:"placeholder", password:"ppppp", realName:"Place H. Older", typeOfUser:"Owner"},
    avgprice: 10,
    description: 'Still fresh and looking good! Get now for only 10RM per kilo!',
    rating: 5,
    businessname: 'Fishfood',
    expiration: new Date('2022-06-31'),
    products: new Array<Offer>(
      offers[2], offers[3]
    ),
    location: '15999102'
  },
  {
    id: 3,
    owner: {username:"placeholder", password:"ppppp", realName:"Place H. Older", typeOfUser:"Owner"},
    avgprice: 7.3,
    description: 'some some',
    rating: 4.5,
    businessname: 'FreshFishSupply',
    expiration: new Date('2022-07-09'),
    products: new Array<Offer>(
      offers[6], offers[1]
    ),
    location: '15999102'
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
