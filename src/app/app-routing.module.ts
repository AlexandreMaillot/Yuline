import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConnectionComponent} from './Components/connection/connection.component';
import {HomeComponent} from './Components/home/home.component';
import {RegistrationComponent} from './Components/registration/registration.component';
import {FourOfFourComponent} from './Components/four-of-four/four-of-four.component';
import {ProfileComponent} from './Components/profile/profile.component';
import {DeckManageComponent} from './Components/deck-manage/deck-manage.component';
import {NewsComponent} from './Components/news/news.component';

const routes: Routes = [
  
  {path: 'login', pathMatch: 'full', component: ConnectionComponent},
  {path: 'registration', pathMatch: 'full', component: RegistrationComponent},
  {
    path: 'home', component: HomeComponent, children: [
      {path: 'news', pathMatch: 'full', component: NewsComponent},
      {path: 'deckManage', pathMatch: 'full', component: DeckManageComponent},
      {path: 'profile', pathMatch: 'full', component: ProfileComponent},
    ]
  },
  {path: '',pathMatch: 'full', redirectTo: '/login'},
  {path: 'not-found', component: FourOfFourComponent},
  {path: '**', redirectTo: '/not-found'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
