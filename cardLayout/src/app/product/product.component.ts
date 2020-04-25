import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
product:any[]=[{id:'1',productName:'pen',description:'this is useful product for students'},
{id:2,productName:'notebook',description:'this is useful product for professionals'}];
  constructor(private service:ServiceService) { 

  }

  ngOnInit(): void {
    this.sendItems();
  }
sendItems(){
  this.service.getProds(this.product);
}
}
