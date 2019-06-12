import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class CartService {
  items = [];

  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore
  ) {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

    getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  createOrder(data) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("orders")
            .add(data)
            .then(res => {}, err => reject(err));
    });
}

}