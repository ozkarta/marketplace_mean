import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BuyerAuthGuard} from './buyer.guard';

export const routes: Routes = [
	{
		path: 'buyer',
		component: HomeComponent,
		canActivate: [BuyerAuthGuard]
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, {enableTracing: true}) ],
	exports: [ RouterModule ]
})
export class UserRoutingModule {}
