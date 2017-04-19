// import Ionic and Angular stuff
import { NgModule, ErrorHandler } from '@angular/core';
import { Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Config, cloudSettings } from '../config';

// import own Pages
import { HomePage } from '../pages/home/home';
import { NewsModule } from '../pages/news/news.module';
import { lCalendarModule } from '../pages/leoCalendar/lcalendar.module';

// import Cloud and native stuff
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { PushModule } from '../pages/push/push.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    HomePage,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
