import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { E404Component } from './misc/e404/e404.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},

  { path: "user/create", component: UserCreateComponent },
  { path: "user/datail/:id", component: UserDetailComponent },
  { path: "user/edit/:id", component: UserEditComponent },
  { path: "user/list", component: UserListComponent },

  { path: "vendor/create", component: VendorCreateComponent },
  { path: "vendor/detail/:id", component: VendorDetailComponent },
  { path: "vendor/edit/:id", component: VendorEditComponent },
  { path: "vendor/list", component: VendorListComponent },
  
  { path: "product/create", component: ProductCreateComponent },
  { path: "product/detail/:id", component: ProductDetailComponent },
  { path: "product/edit/:id", component: ProductEditComponent },
  { path: "product/list", component: ProductListComponent },

  { path: "request/create", component: RequestCreateComponent },
  { path: "request/detail/:id", component: RequestDetailComponent },
  { path: "request/edit/:id", component: RequestEditComponent },
  { path: "request/list", component: RequestListComponent },
  
  { path: "requestline/create", component: RequestlineCreateComponent },
  { path: "requestline/edit/:id", component: RequestlineEditComponent },

  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },

  { path: "**", component: E404Component }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
