import { NewsService } from './news.service';
import { Config } from '../../config';
import { TestUtils } from '../../test';
import { TestBed } from '@angular/core/testing';
import { Http } from '@angular/http';

describe('NewsService', () => {
	beforeEach(() => TestUtils.configureIonicTestingModule([]));

	describe('getPosts()', () => {
		it('when I enter the news page, it should load list of news', (done) => {
			// Arrange
			let http = TestBed.get(Http);
			let service = new NewsService(http, new Config());

			// Act
			let news$ = service.getPosts();

			// Assert
			news$.subscribe(items => {
				expect(items.length).toBe(5);
				expect(items[0].subject).toBe('Kurt schaut jetzt auch zu');
				done();
			});
		});
	});
});

