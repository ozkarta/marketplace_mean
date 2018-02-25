import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {VisitorNavComponent} from './nav/nav.component';
import {VisitorRoutingModule} from './routes';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RegisterPartialComponent} from './register/signup-partial.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {VisitorAuthGuard} from './visitor.guard';




@NgModule({
	declarations: [
		HomeComponent,
		VisitorNavComponent,
		LoginComponent,
		RegisterComponent,
    RegisterPartialComponent
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		FormsModule,
		CommonModule,
		RouterModule,
    NgbModule.forRoot(),
		VisitorRoutingModule
	],
	exports: [
		VisitorNavComponent
	],
	providers: [
		VisitorAuthGuard
	]
})
export class VisitorModule { }
