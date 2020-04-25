import { Component, OnInit } from '@angular/core';

class Image{
  constructor(
       
    public  id:number,
    public category:string,
    public caption:string,
    public url:string
    
){

}
}
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images=[
    new Image(1,'forest','view of forest','assets/img/forest_01.jpg'),
    new Image(2,'dog','view of dog','assets/img/dog_01.jpg'),
    new Image(3,'pattern','view of pattern','assets/img/pattern_01.jpg')    
  ];
  selected: any;
  category:string;
  cap:any;
  url:any;
  id:number;
  constructor() { }

  ngOnInit(): void {
  }

  onChange($event){
    this.selected = $event.target.options[$event.target.options.selectedIndex].text;
    let selectedText=this.selected;
    let cid,picurl,pic_cap,cat;
    this.images.forEach(function (value) {
     if(value.category===selectedText)
     cid=value.id,
     picurl=value.url,
     pic_cap=value.caption,
     cat=value.category
   });
 this.id=cid;
 this.url=picurl;
 this.category=cat;
 this.cap=pic_cap;
    }
}
