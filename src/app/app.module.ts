import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from "@angular/fire/storage";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCl4DpYSeLIoJiFqqkfbQfNkBFuZ1WiA-Q",
      authDomain: "angular-workshop01.firebaseapp.com",
      databaseURL: "https://angular-workshop01.firebaseio.com",
      projectId: "angular-workshop01",
      storageBucket: "angular-workshop01.appspot.com",
      messagingSenderId: "689442255851",
      appId: "1:689442255851:web:1244cd45548b720e"
  }),
  AngularFirestoreModule,
  AngularFireStorageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
