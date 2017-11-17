import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DetailsItemPage } from './item/lcalendar.item.page';
import { lCalendarListPage } from './list/lcalendar.list.page';
import { PipesModule } from '../../pipes/pipes.module';
import { lCalendarService } from './lcalendar.service';
import { calendarDetailsService } from './calendarDetails.service';

@NgModule({
	imports: [IonicModule, PipesModule],
	declarations: [
		lCalendarListPage,
    DetailsItemPage
	],
	entryComponents: [
		lCalendarListPage,
    DetailsItemPage
	],
	providers: [lCalendarService, calendarDetailsService]
})
export class lCalendarModule {

}
