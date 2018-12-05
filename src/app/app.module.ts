import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CartPage } from '../pages/cart/cart';
import { IonicStorageModule } from '@ionic/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Http, Headers } from '@angular/http'

// import { ShoppingCartMenuPage } from '../pages/shopping-cart-menu/shopping-cart-menu';
import { MyApp } from './app.component';
import { AccountSavingProvider } from '../providers/account-saving/account-saving';
// import { MainMenuSellerPage } from '../pages/main-menu-seller/main-menu-seller';
import { FcmProvider } from '../providers/fcm/fcm';
import { Firebase } from '@ionic-native/firebase';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { SellBottleInSchoolProvider } from '../providers/sell-bottle-in-school/sell-bottle-in-school';
@NgModule({
  declarations: [
    MyApp,
    CartPage,
    // MainMenuSellerPage
    // ShoppingCartMenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CartPage,
    // MainMenuSellerPage
    // ShoppingCartMenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    AccountSavingProvider,
    FcmProvider,
    Firebase,
    LocalNotifications,
    SellBottleInSchoolProvider
  ]
})
export class AppModule {}
