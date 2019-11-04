import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainpageModule } from './mainpage/mainpage.module';
import { HeaderfooterModule } from './headerfooter/headerfooter.module';
import { ServicesModule } from './services/services.module';
import { RanddComponent } from './randd/randd.component';

@NgModule({
  declarations: [
    AppComponent,
    RanddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainpageModule,
    HeaderfooterModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
