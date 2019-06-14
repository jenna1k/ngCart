import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts: Observable<any[]>;

  constructor(
    private firestore: AngularFirestore
  ) { 
    // this.shippingCosts = this.cartService.getShippingPrices()
  }

  ngOnInit() {
    this.shippingCosts = this.firestore.collection('shipping').valueChanges();
}


}