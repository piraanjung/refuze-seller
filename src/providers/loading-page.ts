import { LoadingController } from 'ionic-angular'
import { Injectable } from '@angular/core'

@Injectable()
export class LoadingPageProvider {
  constructor(private loadingCtrl: LoadingController) { }
  loading() {
    return this.loadingCtrl.create({
      content: 'กำลังดำเนินการ...',
      spinner: 'crescent',
      dismissOnPageChange: true,
    });
  }
}
