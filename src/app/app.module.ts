import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule} from '@angular/http';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login-page';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import {EditDetailsPage} from '../pages/Edit-details/edit-details';
import { tabPagesecond } from '../pages/tabs/tabPagesecond';
import {tabPage} from '../pages/tabs/tabPage';
import { tabPageEdit } from '../pages/tabedit/tabPageEdit';
import {tabPagesecondEdit} from '../pages/tabedit/tabPagesecondEdit';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HelloIonicPage,
    ItemDetailsPage,
    tabPage,
    tabPagesecond,
    EditDetailsPage,
    tabPageEdit,
    tabPagesecondEdit
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HelloIonicPage,
    ItemDetailsPage,
    tabPage,
    tabPagesecond,
    EditDetailsPage,
    tabPageEdit,
    tabPagesecondEdit
  ],
  providers: [
    StatusBar,
    SplashScreen,    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

