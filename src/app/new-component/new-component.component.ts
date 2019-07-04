import { ComponentService } from './../shated/services/component.service';
import { Model } from './model/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  public model = {} as Model;

  public modelList: Array<Model> = [];

  constructor(private componentService:ComponentService) {

   }

  ngOnInit() {
    // this.model.id='2e2';
    // this.model.name='balvinrepro';
    // this.model.isDeleted= false;
    // this.componentService.addOrder(this.model).subscribe((response:any)=>{
    //   console.log(response.id);

    // });

    // this.componentService.getOrder('oaQ1Yodh2Xkel0AR4xCu').subscribe((response:any)=>{
    //   console.log(response.data);
    //   this.model = response.data;
    // });


    this.componentService.getOrders().subscribe((response: any) => {
      console.log(response);
      this.modelList = response;
    });


    // this.model.id = "111",
    // this.model.name = "naaadadasdasd"
    // this.model.isDeleted = true;
    // this.componentService.updateOrder('oOaTqL6Vcz7IWWKVOswX', this.model).subscribe((response)=>
    // {
    //   console.log("actualizo");
    // })
  }

}
