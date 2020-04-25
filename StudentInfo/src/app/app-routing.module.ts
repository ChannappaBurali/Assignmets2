import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'',component:CreatestudentComponent},
{path:'createstudent',component:CreatestudentComponent},
{path:'home',component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
