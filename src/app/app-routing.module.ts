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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
