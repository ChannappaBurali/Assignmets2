import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
prod:any[];
  constructor() { }

  getProds(prods:any[]){
    this.prod=[prods];
  }
  sendProds(){
    return this.prod;
  }
}
