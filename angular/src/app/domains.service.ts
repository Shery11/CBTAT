import { Injectable } from '@angular/core';

@Injectable()
export class DomainsService{

  constructor() { }
  cart = []
  obj= {
  	id:'222',
  	name:'atrixdigital.com',
  	owner:'moeidsaleem',
  	status:'true'
  };


  success(){
  	return 'done';
  }
  saveCart(cart:any[]){
    this.cart = cart;
  }
  getCart(){
    return this.cart;
  }
  clearCart(){
    this.cart = []
  }
}
