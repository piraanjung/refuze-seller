import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationPage } from './authentication';
import { AuthenProvider } from '../../providers/authen/authen';


@NgModule({
  declarations: [
    AuthenticationPage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(AuthenticationPage),
  ],
  providers: [AuthenProvider]
})
export class AuthenticationPageModule { }
