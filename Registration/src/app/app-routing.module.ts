import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegformComponent } from './regform/regform.component';


const routes: Routes = [
  {path:'',component:RegformComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
