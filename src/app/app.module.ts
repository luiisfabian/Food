import { ComponentService } from './shated/services/component.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersListComponent } from './components/orders/orders-list/orders-list.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LayoutModule } from '@angular/cdk/layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
//formularios
import {ReactiveFormsModule } from '@angular/forms';

//Firebase
import { environment } from './../environments/environment';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { NewComponentComponent } from './new-component/new-component.component';
import * as firebase from 'firebase';



//Initialize Firebase
  export const config = {
  apiKey: "AIzaSyDZU7zMWLN6pskdPn-BWnV-DCIfIYUN5WE",
    authDomain: "food-9e063.firebaseapp.com",
    databaseURL: "https://food-9e063.firebaseio.com",
    projectId: "food-9e063",
    storageBucket: "food-9e063.appspot.com",
    messagingSenderId: "221529743570",
    appId: "1:221529743570:web:f6337ea50815d54e",

  };
      firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    OrdersComponent,
    OrdersListComponent,
    MainMenuComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    //AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [ComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
