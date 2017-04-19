import { NgModule } from '@angular/core';
import { TrimHtmlPipe } from './trim-html.pipe';
import { TruncatePipe } from './truncate.pipe';
import { LocalDatePipe } from './local-date.pipe';

@NgModule({
	declarations: [
		TruncatePipe,
		TrimHtmlPipe,
		LocalDatePipe
	],
	exports: [
		TruncatePipe,
		TrimHtmlPipe,
		LocalDatePipe
	]
})
export class PipesModule {

}
