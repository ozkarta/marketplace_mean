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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TagInputModule} from 'ngx-chips';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CategoryService} from './service/shared/category.service';
import {BusyModule} from 'ngx-busy';

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
    TagInputModule,
    BrowserAnimationsModule,
    BusyModule,

    SharedModule,
		AppRoutingModule
  ],
  providers: [
    AppService,
    UserService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
