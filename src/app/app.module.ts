import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import { EventComponent } from './event/event.component';
import { LocationComponent } from './location/location.component';
import { InfoComponent } from './info/info.component';
import { PhonePipe } from './phone.pipe';
import { MenuPipe } from './menu.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    LocationComponent,
    InfoComponent,
    PhonePipe,
    MenuPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
