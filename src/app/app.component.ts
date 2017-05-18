import { Component, ViewChild } from '@angular/core';
import { Deploy } from '@ionic/cloud-angular';
import {Platform, MenuController, App, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Push, PushToken } from '@ionic/cloud-angular';

import { HomePage } from '../pages/home/home.page';
import { NewsListPage } from '../pages/news/list/news.list.page';
import { lCalendarListPage } from '../pages/leoCalendar/list/lcalendar.list.page';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  wide: boolean = false;
  genericPages;
  homePage;
  rootPage;

  private app;
  private platform;
  private menu: MenuController;

  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, menu: MenuController, app: App, public deploy: Deploy, public push: Push) {

    this.menu = menu;
    // set up our app
    this.app = app;
    this.platform = platform;

    // set our app's pages
    this.homePage = { title: 'Home', component: HomePage, icon: 'home' };

    this.genericPages = [
      { title: 'News', component: NewsListPage, icon: 'paper' },
      { title: 'Calendar', component: lCalendarListPage, icon: 'calendar' }
    ];

    this.rootPage = HomePage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and the plugins are available.
      StatusBar.styleDefault();
    });

    this.push.register().then((t: PushToken) => {
      return this.push.saveToken(t);
    }).then((t: PushToken) => {
      console.log('Token saved:', t.token);
    });

    this.push.rx.notification()
      .subscribe((msg) => {
        alert(msg.title + ': ' + msg.text);
      });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    let component = page.component;
    this.nav.setRoot(component);
  }

  setWidth() {
    if (this.platform.width() > 767) {
      this.wide = true;
      this.menu.open();
    } else {
      this.wide = false;
      this.menu.close();
    }
  };

  listenToEvents() {
    window.addEventListener('resize', () => {
      this.setWidth();
    });
  }
}
