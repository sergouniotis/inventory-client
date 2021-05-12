import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item/item.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'item', component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
