import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { GithubUsers } from '../providers/github-users';
import {LoginPage} from '../pages/login/login';
import {HomePage} from '../pages/home/home';
import {OnePage} from '../pages/one/one';
import {PlayerCardComponent} from './playerCard/player-card.component'

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    OnePage,
    PlayerCardComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    OnePage,
    PlayerCardComponent
  ],
  providers: [GithubUsers]
})
export class AppModule {}
