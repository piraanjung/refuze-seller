import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationPage } from './authentication';
import { AuthenProvider } from '../../providers/authen/authen';

=======
import { IonicPageModule } from 'ionic-angular';
import { AuthenticationPage } from './authentication';
>>>>>>> 1e2f290fa89dc76314c37742aaa0a2b5c3c0cf01

@NgModule({
  declarations: [
    AuthenticationPage,
  ],
  imports: [
<<<<<<< HEAD
    HttpClientModule,
    FormsModule,
    IonicPageModule.forChild(AuthenticationPage),
  ],
  providers: [AuthenProvider]
})
export class AuthenticationPageModule { }
=======
    IonicPageModule.forChild(AuthenticationPage),
  ],
})
export class AuthenticationPageModule {}
>>>>>>> 1e2f290fa89dc76314c37742aaa0a2b5c3c0cf01
