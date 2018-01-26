import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';
import { Config } from '../../config';
import { Observable } from 'rxjs';
import { lCalendar } from './models/lcalendar.model';
import * as moment from "moment";

@Injectable()
export class lCalendarService {
	private http: Http;
	private config: Config;

	constructor(http: Http, config: Config) {
		this.http = http;
		this.config = config;
	}

	public getPosts(): Observable<lCalendar[]> {
    let header = new Headers({ 'Authorization': 'Bearer MTlkMzc5NDAtN2FlYi00NTk5LThkZjctYzhmOGU2ZGQxNWNj' });

    let params: URLSearchParams = new URLSearchParams();
    params.set('start', moment().format("YYYY-MM-DD"));
    params.set('end', moment().add(7,'days').format("YYYY-MM-DD"));

    let options = new RequestOptions({
      headers: header,
      search: params
    });

		return this.http.get(this.config.calendarUrl, options)
    .map(x => {
      console.log(x);
      return <lCalendar[]>x.json();
    });
	}
}
