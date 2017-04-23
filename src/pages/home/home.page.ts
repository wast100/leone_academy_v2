import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { lCalendarListPage } from '../leoCalendar/list/lcalendar.list.page';
import { NewsListPage } from '../news/list/news.list.page';
import { Tile } from './models/tile.model';
import { EmailService } from '../../services/email.service';
import { CallService } from '../../services/call.service';
import { MapsService } from '../../services/maps.service';
import { InAppBrowserService } from '../../services/in-app-browser.service';
import { data } from './home-data';

@Component({
	templateUrl: 'home.html'
})
export class HomePage {
	public tiles: Tile[][];

	private emailService: EmailService;
	private callService: CallService;
	private mapsService: MapsService;
	private browserService: InAppBrowserService;
	private nav: NavController;

	constructor(
		emailService: EmailService,
		callService: CallService,
		mapsService: MapsService,
		browserService: InAppBrowserService,
		nav: NavController
	) {
		this.emailService = emailService;
		this.callService = callService;
		this.mapsService = mapsService;
		this.browserService = browserService;
		this.nav = nav;
		this.initTiles();
	}

	public navigateTo(tile) {
	  console.log(tile.component);
		this.nav.setRoot(tile.component);
	}

	public getDirections() {
		this.mapsService.openMapsApp(data.officeLocation);
	}

	public sendEmail() {
		this.emailService.sendEmail(data.email);
	}

	public openFacebookPage() {
		this.browserService.open(data.facebook);
	}

	public callUs() {
		this.callService.call(data.phoneNumber);
	}

	private initTiles(): void {
		this.tiles = [[{
			title: 'Calendar',
			path: 'leoCalendar',
			icon: 'calendar',
			component: lCalendarListPage
		}, {
			title: 'News',
			path: 'news',
			icon: 'paper',
			component: NewsListPage
		}]];
	}
}
