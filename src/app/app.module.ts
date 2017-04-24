// import Ionic and Angular stuff
import { NgModule, ErrorHandler } from '@angular/core';
import { Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Config, cloudSettings } from '../config';
import { BrowserModule } from '@angular/platform-browser';

// import own Pages
import { HomeModule } from '../pages/home/home.module';
import { NewsModule } from '../pages/news/news.module';
import { lCalendarModule } from '../pages/leoCalendar/lcalendar.module';

// import Cloud and native stuff
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    BrowserModule,
    HomeModule,
    NewsModule,
    lCalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Config,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
