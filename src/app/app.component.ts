import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
<<<<<<< HEAD
import { timer } from 'rxjs/observable/timer';
=======

import { HomePage } from '../pages/home/home';
>>>>>>> 1e2f290fa89dc76314c37742aaa0a2b5c3c0cf01
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
  rootPage:any = 'AuthenticationPage';
  showSplash  = true
  data :any={
    "backgroundImage": 'assets/images/background/31.jpg',
    "logo": 'assets/images/logo/login-3.png',
    "title": "REFUZE"
}
=======
  rootPage:any = HomePage;

>>>>>>> 1e2f290fa89dc76314c37742aaa0a2b5c3c0cf01
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
<<<<<<< HEAD
      // timer(7000).subscribe(() =>this.showSplash = false)
    });
  }

  
=======
    });
  }
>>>>>>> 1e2f290fa89dc76314c37742aaa0a2b5c3c0cf01
}

