import { map } from 'rxjs/operators';
import { Observable, observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AngularFirestore, AngularFirestoreCollection,  } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
private orderscollection : AngularFirestoreCollection<any>;
orders : Observable<any[]>;

  constructor( private readonly afs: AngularFirestore ) {
    this.orderscollection = afs.collection<any>('orders');
    this.orders = this.orderscollection.snapshotChanges().pipe(map(
      action => action.map(a=> {
        const data  = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return {id, ...data};
      })

    ));

  }

  myForm = new FormGroup({
    customerName: new FormControl(''),
    orderNumber: new FormControl(''),
    order: new FormControl(''),
    completed: new FormControl(false)

  });

  getOrders() {
    return this.orders;
  }

  updateOrders(order: any) {
    return this.orderscollection.doc(order.id).update(order);
  }

  deleteOrders(id: string) {
    return this.orderscollection.doc(id).delete();
  }

  createOrder(order: string) {
    return this.orderscollection.add(order);
  }


}
