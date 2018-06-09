import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CartPage } from '../pages/cart/cart';
import { IonicStorageModule } from '@ionic/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

// import { ShoppingCartMenuPage } from '../pages/shopping-cart-menu/shopping-cart-menu';
import { MyApp } from './app.component';
import { AccountSavingProvider } from '../providers/account-saving/account-saving';

@NgModule({
  declarations: [
    MyApp,
    CartPage,
    // ShoppingCartMenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CartPage,
    // ShoppingCartMenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    AccountSavingProvider,
    
  ]
})
export class AppModule {}
