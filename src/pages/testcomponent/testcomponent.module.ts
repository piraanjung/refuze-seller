import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestcomponentPage } from './testcomponent';

@NgModule({
  declarations: [
    TestcomponentPage,
  ],
  imports: [
    IonicPageModule.forChild(TestcomponentPage),
  ],
})
export class TestcomponentPageModule {}
