import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartegoryComponent } from './cartegory/cartegory.component';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';
import { BannerComponent } from './banner/banner.component';
import { ProductComponent } from './product/product.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  { path: 'home', component: HomeComponent ,canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'signup', component: SignupComponent },
  { path: 'success', component: SignupComponent },
  { path: 'category', component: CartegoryComponent},
  { path: 'user', component: UserComponent},
  { path: 'order', component: OrderComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'banner', component: BannerComponent},
  { path: 'product', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
