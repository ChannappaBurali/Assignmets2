import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';


const routes: Routes = [
  {path:'',component:CourseDetailsComponent},
  {path:'course',component:CourseDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
