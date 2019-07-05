import { OrdersService } from "./../../shated/services/orders.service";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"]
})
export class OrdersComponent implements OnInit {
  appname: String = "Best Food!";
  totalPrice = 0;
  arrayTempProducts = [];

  constructor(public ordersService: OrdersService) {}
  products = [
    {
      name: "fruit",
      price: 13
    },
    {
      name: "salad",
      price: 2213
    },
    {
      name: "potato",
      price: 33
    },
    {
      name: "orange",
      price: 78
    },
    {
      name: "watermelon",
      price: 2
    },
    {
      name: "mango",
      price: 22
    }
  ];
  ngOnInit() {}
  addProduct(product) {
    console.log(product);
    this.totalPrice = (this.totalPrice + product.price);
    this.arrayTempProducts.push(product.name);
  }

  deleteorderTemp = order => {
    let index = this.arrayTempProducts.indexOf(order);
    if (index > -1) this.arrayTempProducts.splice(index, 1);
  };

  onSubmit() {
    console.log(this.ordersService.myForm.value);
    this.ordersService.myForm.value.order = this.arrayTempProducts;
    let data = this.ordersService.myForm.value;
    console.log(data);
    data.totalOrder = this.totalPrice;

    //llamada al servicio

    this.ordersService.createOrder(data);
    this.arrayTempProducts = [];
    this.totalPrice = 0;
    this.ordersService.myForm.reset();
  }
}
