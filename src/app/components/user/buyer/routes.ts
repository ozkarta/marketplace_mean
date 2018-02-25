import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BuyerAuthGuard} from './buyer.guard';
import {ProfileComponent} from './profile/profile.component';
import {AccountComponent} from './account/account.component';

export const routes: Routes = [
	{
		path: 'buyer',
		component: HomeComponent,
		canActivate: [BuyerAuthGuard]
	},
  {
    path: 'buyer/account',
    component: AccountComponent,
    canActivate: [BuyerAuthGuard]
  },
  {
    path: 'buyer/profile',
    component: ProfileComponent,
    canActivate: [BuyerAuthGuard]
  }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, {enableTracing: true}) ],
	exports: [ RouterModule ]
})
export class UserRoutingModule {}
