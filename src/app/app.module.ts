import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {SharedModule} from './components/shared/shared.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routes';
import {AppService} from './service/app.service';
import {UserService} from './service/user.service';
import {BusyModule} from 'angular2-busy';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
		HttpClientModule,
		BrowserModule,
		FormsModule,
		CommonModule,
		RouterModule,
    NgbModule.forRoot(),
    BusyModule,

    SharedModule,
		AppRoutingModule
  ],
  providers: [
    AppService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
