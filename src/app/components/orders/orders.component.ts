import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  appname : String = 'Best Food!';
  totalPrice = 0;
  arrayTempProducts = [];

  constructor() {}
   products = [
     {
    name: 'fruit',
    price: 13,
  },
  {
    name: 'salad',
    price: 2213
  },
  {
    name: 'potato',
    price: 33
  },
  {
    name: 'orange',
    price: 78
  },
  {
    name: 'watermelon',
    price: 2
  },
  {
    name: 'mango',
    price: 22
  },




]

  ngOnInit() {
  }
  addProduct(product) {
    console.log(product);
    this.totalPrice = (this.totalPrice * product.price);
    this.arrayTempProducts.push(product.name);
  }

  deleteorderTemp = (order) =>{
    let index = this.arrayTempProducts.indexOf(order);
    if(index > -1)
      this.arrayTempProducts.splice(index, 1);

  }


}
