import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { KitchenListComponent } from './kitchen-list/kitchen-list.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { CartComponent } from './cart/cart.component';
import { ProviderHomeComponent } from './provider-home/provider-home.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { MainComponent } from './main/main.component';
import { ProviderLoginComponent } from './provider-login/provider-login.component';
import { ProviderRegistrationComponent } from './provider-registration/provider-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { KitchenRegistrationComponent } from './kitchen-registration/kitchen-registration.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'userhome', component: UserHomeComponent },
  { path: 'userregister', component: UserRegistrationComponent },
  { path: 'kitchens', component: KitchenListComponent },
  { path: 'kitchens/:id', component: ViewMenuComponent },
  { path: 'cart', component: CartComponent },
  { path: 'providerhome', component: ProviderHomeComponent },
  { path: 'addmenu', component: AddMenuComponent },
  { path: 'main', component:MainComponent},
  {path: 'userlogin', component:UserLoginComponent},
  {path:'providerlogin', component:ProviderLoginComponent},
  {path:'providerregister' , component:ProviderRegistrationComponent},
  {path:'kitchenregistration' , component:KitchenRegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserHomeComponent,
  UserRegistrationComponent,
  KitchenListComponent,
  ViewMenuComponent,
  CartComponent,
  ProviderHomeComponent,
  AddMenuComponent,
  UserLoginComponent,
  ProviderLoginComponent,
  ProviderRegistrationComponent,
  MainComponent,
  KitchenRegistrationComponent
]