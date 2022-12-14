import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { E404Component } from './misc/e404/e404.component';
import { MenuComponent } from './misc/menu/menu.component';
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
import { RequestlinesComponent } from './requestline/requestlines/requestlines.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { HeadComponent } from './common/head/head.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { BoolDisplayPipe } from './common/bool-display.pipe';
import { RequestReviewListComponent } from './request/request-review-list/request-review-list.component';
import { RequestReviewItemComponent } from './request/request-review-item/request-review-item.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    MenuComponent,
    UserListComponent,
    VendorListComponent,
    RequestListComponent,
    ProductListComponent,
    ProductDetailComponent,
    RequestDetailComponent,
    VendorDetailComponent,
    UserDetailComponent,
    UserCreateComponent,
    VendorCreateComponent,
    RequestCreateComponent,
    ProductCreateComponent,
    RequestlineCreateComponent,
    RequestlineEditComponent,
    RequestEditComponent,
    ProductEditComponent,
    UserEditComponent,
    VendorEditComponent,
    HeadComponent,
    UserLoginComponent,
    BoolDisplayPipe,
    RequestlinesComponent,
    RequestReviewListComponent,
    RequestReviewItemComponent,

  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
