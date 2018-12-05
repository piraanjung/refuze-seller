import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationPage } from './authentication';
import { AuthenProvider } from '../../providers/authen/authen';
import { LoadingPageProvider } from '../../providers/loading-page';
import { AlertBoxProvider } from '../../providers/alert-box';
import { Sim} from '@ionic-native/sim'
@NgModule({
  declarations: [
    AuthenticationPage,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    IonicPageModule.forChild(AuthenticationPage),
  ],
  providers: [AuthenProvider, LoadingPageProvider, AlertBoxProvider, Sim]
})
export class AuthenticationPageModule { }
