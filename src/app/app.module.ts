import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CalendarPage } from '../pages/calendar/calendar';
import { GuestsPage } from '../pages/guests/guests';
import { DocumentsPage } from '../pages/documents/documents';
import { SettingsPage } from '../pages/settings/settings';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CloudDataManagerProvider } from '../providers/cloud-data-manager/cloud-data-manager';
import { CloudSyncProvider } from '../providers/cloud-sync/cloud-sync';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "",
  authDomain: "onezweipolizei.firebaseio.com",
  databaseURL: "https://onezweipolizei.firebaseio.com",
  storageBucket: "",
  messagingSenderId: ""
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CalendarPage,
    GuestsPage,
    DocumentsPage,
    SettingsPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CalendarPage,
    GuestsPage,
    DocumentsPage,
    SettingsPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CloudDataManagerProvider,
    CloudSyncProvider
  ]
})
export class AppModule {}
