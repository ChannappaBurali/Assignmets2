import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { } 
  makeAlert(){
    alert("Are you sure you want to discard the  changes ?");
  }
}
