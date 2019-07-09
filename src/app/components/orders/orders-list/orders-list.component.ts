import { OrdersService } from './../../../shated/services/orders.service';
import { Component, OnInit, ViewChild } from '@angular/core';


import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {


  displayedColumns: string[] = ['orderNumber', 'customerName', 'order', 'completed', 'totalOrder', 'action'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort, {static: true}) sort: MatSort;



  constructor(private ordersService:OrdersService ) { }
  ngOnInit() {

    this.getAllOrders();
  }



  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getAllOrders(){
    this.ordersService.getOrders().subscribe(res=>{
      this.dataSource.data = res;
    });
  }

  onChangeStatus(order: any){
    order.completed = true;
    this.ordersService.updateOrders(order);
  }
  onDelete(id: string) {
    this.ordersService.deleteOrders(id);
  }


}





