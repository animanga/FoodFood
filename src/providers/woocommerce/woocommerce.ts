import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api';

@Injectable()
export class WooCommerceProvider {

  WooCommerce: any;

  constructor() {
    this.WooCommerce = WC({
      url: "http://foodfood.us",
      consumerKey: "ck_119086d39e53dad89d19284e580a310e093d95fd",
      consumerSecret: "cs_52578c2de81163a7ca5d389a6ecdc45bb2b27835"
    });
  }

  initialize(){
    return this.WooCommerce;
  }

}
