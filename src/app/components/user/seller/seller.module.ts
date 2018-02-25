import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {UserRoutingModule} from './routes';
import {SellerNavComponent} from './nav/nav.component';
import {SellerAuthGuard} from './seller.guard';
import {AccountComponent} from './account/account.component';
import {ProfileComponent} from './profile/profile.component';




@NgModule({
	declarations: [
		HomeComponent,
    SellerNavComponent,
		AccountComponent,
		ProfileComponent
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		FormsModule,
		CommonModule,
		RouterModule,
		UserRoutingModule
	],
	exports: [
    SellerNavComponent
	],
	providers: [
		SellerAuthGuard
	]
})
export class SellerModule { }
