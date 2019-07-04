import { Model } from "./../../new-component/model/model";
import { Observable, observable } from "rxjs";
import { Injectable } from "@angular/core";
import * as firebase from "firebase";
@Injectable({
  providedIn: "root"
})
export class ComponentService {
  ref = firebase.firestore().collection("orders");
  constructor() {}

  getOrder(id: string): Observable<any> {
    return new Observable(observer => {
      this.ref
        .doc(id)
        .get()
        .then(doc => {
          observer.next({ id: doc.id, data: doc.data() });
        });
    });
  }
  addOrder(model: Model) {
    return new Observable(observer => {
      this.ref.add(model).then(doc => {
        observer.next({ id: doc.id });
      });
    });
  }

  getOrders(): Observable<any> {
    return new Observable(observer => {
      this.ref.where('isDeleted', '==', false).onSnapshot((collection)=>{
        let orders = [];
        let i = 0;
        collection.forEach((doc) => {
          orders.push(doc.data());
          orders[i].id = doc.id;
          i++;
        });
        observer.next(orders);
      });
    });
  }

  updateOrder(id, data): Observable<any>{
    return new Observable(observer => {
       this.ref.doc(id).set(data).then(()=>{
        observer.next();
       });
    });
  }


}
