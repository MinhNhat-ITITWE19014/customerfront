import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CategoryComponent } from './category/category.component';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';
import { BannerComponent } from './banner/banner.component';
import { ProductComponent } from './product/product.component';
import { SuccesspageComponent } from './successpage/successpage.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { VieworderComponent } from './vieworder/vieworder.component';
import { AddproductComponent } from './addproduct/addproduct.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'success', component: SignupComponent },
  { path: 'category', component: CategoryComponent},
  { path: 'user', component: UserComponent},
  { path: 'order', component: OrderComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'banner', component: BannerComponent},
  { path: 'product', component: ProductComponent},
  { path: 'successpage', component: SuccesspageComponent},
  { path: 'shoppingcart', component: ShoppingcartComponent},
  { path: 'adminheader', component: AdminheaderComponent},
  { path: 'adminhomepage', component: AdminhomepageComponent},
  { path: 'adminuser', component: AdminuserComponent},
  { path: 'vieworder', component: VieworderComponent},
  { path: 'addproduct', component: AddproductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
