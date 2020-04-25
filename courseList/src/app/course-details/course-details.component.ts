import { Component, OnInit } from '@angular/core';

class corseDetails{
  id:number;
  courseName:string;
  description:string;
}
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  selected:string;
  id:number;
  desc:string;
courses:corseDetails[]=[{id:1,courseName:'Spring',description:'This is Spring Course'},
{id:2,courseName:'Hibernate',description:'This is Hibernate Course'},
{id:3,courseName:'Junit',description:'This is Junit Course'},
{id:4,courseName:'Html',description:'This is Html Course'},
{id:5,courseName:'CSS',description:'This is CSS Course'}];
  constructor() { }

  ngOnInit(): void {
  }
  onChange($event){
    this.selected = $event.target.options[$event.target.options.selectedIndex].text;
    let selectedText=this.selected;
    let cid,description;
    this.courses.forEach(function (value) {
     if(value.courseName===selectedText)
     cid=value.id,
     description=value.description
   });
 this.id=cid;
 this.desc=description;
    }
}
