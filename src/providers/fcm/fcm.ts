
import {
  Injectable
} from '@angular/core';
import {
  Firebase
} from '@ionic-native/firebase';
import {
  Platform
} from 'ionic-angular';
import {
  AngularFirestore
} from 'angularfire2/firestore';
/*
  Generated class for the FcmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FcmProvider {

  constructor(
    public firebaseNative: Firebase,
    public afs: AngularFirestore,
    public platform: Platform
  ) {
    console.log('Hello FcmProvider Provider');
  }

  async getToken() {
    let token;

    if (this.platform.is('android')) {
      token = await this.firebaseNative.getToken();
    }

    if (this.platform.is('ios')) {
      token = await this.firebaseNative.getToken();
      const perm = await this.firebaseNative.grantPermission();
    }

    if (!this.platform.is('cordova')) {
      return this.saveTokenToFirestore(token);
    }
  }

  private  saveTokenToFirestore(token) {
      if (!token) return;
      const deviceRef = this.afs.collection('device')

      const docData = {
        token,
        userId: 'testUser'
      }

      return deviceRef.doc(token).set(docData);
    }

    listenToNotifications(){
      return this.firebaseNative.onNotificationOpen()
    }

  }