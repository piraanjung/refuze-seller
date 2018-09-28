import { Component } from '@angular/core';
import { IonicPage, NavController, Events, MenuController } from 'ionic-angular';
import { MAIN_MENU_SELLER } from '../../providers/main-menu-seller';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { tap } from 'rxjs/operators';
import { ToastController } from 'ionic-angular'
// import { FcmProvider } from '../../providers/fcm/fcm';

@IonicPage({
  name: 'main-menu-seller'
})
@Component({
  selector: 'page-main-menu-seller',
  templateUrl: 'main-menu-seller.html',
})
export class MainMenuSellerPage {

  pages: any = [];
  headerSideBar: string;

  constructor(
    private navCtrl: NavController,
    private events: Events,
    private menuCtrl: MenuController,
    private localNotifications: LocalNotifications,
    // public fcm: FcmProvider,
    public toastCtrl: ToastController 

  ) {
    this.headerSideBar = 'ขายขยะ';
    this.events.publish('header-side-bar', this.headerSideBar);
    this.events.publish('pages', MAIN_MENU_SELLER);
    this.menuCtrl.enable(true, 'menu-side-bar');
    this.pages = MAIN_MENU_SELLER.filter(menu => menu.icon != 'exit');
  }

  ionViewDidLoad() {
  //   console.log('dfdf')
  //   this.localNotifications.schedule({
  //     text: 'Delayed ILocalNotification',
  //     trigger: {at: new Date(new Date().getTime() + 3600)},
  //     led: 'FF0000',
  //     sound: null
  //  });
    // this.fcm.getToken();
    // this.fcm.listenToNotifications().pipe(
    //   tap(msg =>{
    //     const toast = this.toastCtrl.create({
    //       message: msg.body,
    //       duration: 3000
    //     });
    //     toast.present();
    //   })
    // ).subscribe()
  }

  onEvent(event: string, item: any, e: any) {
    if (e) {
      e.stopPropagation();
    }

    this.navCtrl.setRoot(item.navCtrl, {}, { animate: true, direction: 'forward' });
  }

}
