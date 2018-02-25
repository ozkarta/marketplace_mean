import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BuyerNavComponent} from './nav/nav.component';
import {UserRoutingModule} from './routes';
import {BuyerAuthGuard} from './buyer.guard';




@NgModule({
	declarations: [
		HomeComponent,
		BuyerNavComponent
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
    BuyerNavComponent
	],
	providers: [
		BuyerAuthGuard
	]
})
export class BuyerModule { }
