import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CustomMaterialModule } from './core/material.module';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { DeckComponent } from './deck/deck.component';
import { FiltersComponent } from './filters/filters.component';
import { DeckListComponent } from './deck-list/deck-list.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { SideDeckComponent } from './side-deck/side-deck.component';
import { ExtraDeckComponent } from './extra-deck/extra-deck.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    HomeComponent,
    RegistrationComponent,
    ProfileComponent,
    DeckComponent,
    FiltersComponent,
    DeckListComponent,
    CardComponent,
    CardListComponent,
    CardInfoComponent,
    SideDeckComponent,
    ExtraDeckComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
