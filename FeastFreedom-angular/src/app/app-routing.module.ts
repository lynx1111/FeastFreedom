import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserHomeComponent } from './user-home/user-home.component';


const routes: Routes = [
  { path: '', redirectTo: '/userregister', pathMatch: 'full' },
  { path: 'userhome', component: UserHomeComponent },
  { path: 'userregister', component: UserRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserHomeComponent,
  UserRegistrationComponent
]