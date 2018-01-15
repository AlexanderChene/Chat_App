import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AngularFireModule} from 'angularfire2';
import { ChatPage } from '../pages/chat/chat';
import {AngularFireDatabaseModule} from 'angularfire2/database';

var config = {
  apiKey: "AIzaSyBUJZ_Vp6BqwNBqSR41BLivIStq6TZuV3E",
  authDomain: "chat-49f3a.firebaseapp.com",
  databaseURL: "https://chat-49f3a.firebaseio.com",
  projectId: "chat-49f3a",
  storageBucket: "chat-49f3a.appspot.com",
  messagingSenderId: "709918617697"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
