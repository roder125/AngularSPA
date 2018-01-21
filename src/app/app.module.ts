import { FIREBASE_CONFIG } from './app.firebase.config';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainImageComponent } from './main-image/main-image.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from "angularfire2";



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainImageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



