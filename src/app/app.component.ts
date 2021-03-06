import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, Events, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'AuthenticationPage';

  pages: any = []
  headerSideBar: string;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    private events: Events,
    private alertCtrl: AlertController,
    private localNotifications: LocalNotifications
  ) {
    this.events.subscribe('pages', (pages) => this.pages = pages);
    this.events.subscribe('header-side-bar', headerSideBar => this.headerSideBar = headerSideBar);
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
     
    });
  }

  openPage(page) {
    this.nav.setRoot(page.navCtrl, {}, { animate: true, direction: 'forward' });
    this.menuCtrl.toggle();
  }

}

