import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
// components
import { AppComponent } from './app.component';
import { NytNewsComponent } from './components/nytNews/nytNews.component';
import { HomepageComponent } from './components/homepage/homepage.component';
// routing
import { AppRoutingModule } from './app-routing.module';
// animations
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // npm install --save @ng-bootstrap/ng-bootstrap
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Materials

// services
import { DataService } from './services/data.service';

import { JqueryService } from './services/jquery.service';

import * as $ from 'jquery';
import { TruncatePipe } from './pipes/truncate.pipe';
import { DateFormatterPipe } from './date-formatter.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NTYsearchComponent } from './components/ntysearch/ntysearch.component';




@NgModule({
  declarations: [
    AppComponent,
    NytNewsComponent,
    HomepageComponent,
    TruncatePipe,
    DateFormatterPipe,
    NTYsearchComponent,
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule.forRoot(),

  ],
  exports: [
  ],
  providers: [
    DataService,
    JqueryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
