import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {UserNavComponent} from './nav/nav.component';
import {BuyerModule} from './buyer/buyer.module';
import {SellerModule} from './seller/seller.module';




@NgModule({
	declarations: [
		UserNavComponent
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		FormsModule,
		CommonModule,
		RouterModule,
		BuyerModule,
		SellerModule
	],
	exports: [
		UserNavComponent
	],
	providers: []
})
export class UserModule { }
