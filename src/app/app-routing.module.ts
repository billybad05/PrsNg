import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { E404Component } from './misc/e404/e404.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },

  { path: "**", component: E404Component }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
