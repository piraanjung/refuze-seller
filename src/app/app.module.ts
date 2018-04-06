import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
<<<<<<< HEAD

@NgModule({
  declarations: [
    MyApp
=======
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage
>>>>>>> 1e2f290fa89dc76314c37742aaa0a2b5c3c0cf01
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
<<<<<<< HEAD
    MyApp
=======
    MyApp,
    HomePage
>>>>>>> 1e2f290fa89dc76314c37742aaa0a2b5c3c0cf01
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
    {provide: ErrorHandler, useClass: IonicErrorHandler},
=======
    {provide: ErrorHandler, useClass: IonicErrorHandler}
>>>>>>> 1e2f290fa89dc76314c37742aaa0a2b5c3c0cf01
  ]
})
export class AppModule {}
