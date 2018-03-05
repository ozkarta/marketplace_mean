import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SellerAuthGuard} from './seller.guard';
import {AccountComponent} from './account/account.component';
import {ProfileComponent} from './profile/profile.component';

export const routes: Routes = [
	{
		path: 'seller',
		component: HomeComponent,
		canActivate: [SellerAuthGuard]
	},
  {
    path: 'seller/business-profile',
    component: ProfileComponent,
    canActivate: [SellerAuthGuard]
  },
  {
    path: 'seller/account',
    component: AccountComponent,
    canActivate: [SellerAuthGuard]
  },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, {enableTracing: true}) ],
	exports: [ RouterModule ]
})
export class UserRoutingModule {}
