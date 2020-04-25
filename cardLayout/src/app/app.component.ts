import { Component } from '@angular/core';
import {ServiceService} from './service/service.service'

class model{
  id:number;
  productName:string;
  description:string;
  company:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  company:string;
  desc:string;
  selected:string;
  product1:model[]=[{id:1,productName:'pen',description:'this is useful product for students',company:'abc'},
{id:2,productName:'notebook',description:'this is useful product for professionals',company:'xyz'}];
  title = 'cardlayout';
  constructor(private service:ServiceService){
  } 
  onChange($event){
   this.selected = $event.target.options[$event.target.options.selectedIndex].text;
   let selectedText=this.selected;
   let comp,description;
   this.product1.forEach(function (value) {
    if(value.productName===selectedText)
    comp=value.company,
    description=value.description
  });
this.company=comp;
this.desc=description;
   }

}
