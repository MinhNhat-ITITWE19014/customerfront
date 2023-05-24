import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';
import { BannerComponent } from './banner/banner.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { SuccesspageComponent } from './successpage/successpage.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { VieworderComponent } from './vieworder/vieworder.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    UserComponent,
    OrderComponent,
    ContactComponent,
    BannerComponent,
    ProductComponent,
    SuccesspageComponent,
    CategoryComponent,
    ShoppingcartComponent,
    AdminhomepageComponent,
    AdminheaderComponent,
    AdminuserComponent,
    VieworderComponent,
    AddproductComponent,
    ProductlistComponent,
    CustomerlistComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
