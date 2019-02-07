import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CustomMaterialModule } from './core/material.module';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ConnectionComponent } from './Components/connection/connection.component';
import { HomeComponent } from './Components/home/home.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { DeckComponent } from './Components/deck/deck.component';
import { FiltersComponent } from './Components/filters/filters.component';
import { DeckListComponent } from './Components/deck-list/deck-list.component';
import { CardComponent } from './Components/card/card.component';
import { CardListComponent } from './Components/card-list/card-list.component';
import { CardInfoComponent } from './Components/card-info/card-info.component';
import { SideDeckComponent } from './Components/side-deck/side-deck.component';
import { ExtraDeckComponent } from './Components/extra-deck/extra-deck.component';
import { FourOfFourComponent } from './Components/four-of-four/four-of-four.component';
import { DeckManageComponent } from './Components/deck-manage/deck-manage.component';
import { NewsComponent } from './Components/news/news.component';

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
    FourOfFourComponent,
    DeckManageComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
