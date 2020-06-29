import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { KitchenListComponent } from './kitchen-list/kitchen-list.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: '', redirectTo: '/userregister', pathMatch: 'full' },
  { path: 'userhome', component: UserHomeComponent },
  { path: 'userregister', component: UserRegistrationComponent },
  { path: 'kitchens', component: KitchenListComponent },
  { path: 'kitchens/:id', component: ViewMenuComponent },
  { path: 'cart', component: CartComponent }
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
  CartComponent
]