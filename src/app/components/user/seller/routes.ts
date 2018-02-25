import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SellerAuthGuard} from './seller.guard';

export const routes: Routes = [
	{
		path: 'seller',
		component: HomeComponent,
		canActivate: [SellerAuthGuard]
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, {enableTracing: true}) ],
	exports: [ RouterModule ]
})
export class UserRoutingModule {}
