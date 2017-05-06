import { lCalendarService } from './lcalendar.service';
import { Config } from '../../config';
import { TestUtils } from '../../test';
import { TestBed } from '@angular/core/testing';
import { Http } from '@angular/http';

describe('Calendar Service', () => {
	beforeEach(() => TestUtils.configureIonicTestingModule([]));

	describe('getPosts()', () => {
		it('should load list of Classes', (done) => {
			// Arrange
			let http = TestBed.get(Http);
			let service = new lCalendarService(http, new Config());

			// Act
			let classes$ = service.getPosts();

			// Assert
      classes$.subscribe(items => {
				expect(items.length).toBe(3);
				expect(items[0].title).toBe('testtraining');
				done();
			});
		});
	});
});

