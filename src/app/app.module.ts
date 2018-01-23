import { FIREBASE_CONFIG } from './app.firebase.config';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AddMountainComponent } from './add-mountain/add-mountain.component';
import { ShowMountainsComponent } from './show-mountains/show-mountains.component';
import { FormsModule } from '@angular/forms';
import { FirebaseDatabaseService } from './services/firebase.database.service/firebase.database.service';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddMountainComponent,
    ShowMountainsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    FirebaseDatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



