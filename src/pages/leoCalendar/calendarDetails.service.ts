import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';
import { Config } from '../../config';
import { Observable } from 'rxjs';
import { calendarDetails } from './models/calendarDetails.model';
import * as moment from "moment";

@Injectable()
export class calendarDetailsService {
	private http: Http;
	private config: Config;

	constructor(http: Http, config: Config) {
		this.http = http;
		this.config = config;
	}

	public getDetails(id): Observable<calendarDetails> {
    let header = new Headers({ 'Authorization': 'Bearer MTlkMzc5NDAtN2FlYi00NTk5LThkZjctYzhmOGU2ZGQxNWNj' });

    //let params: URLSearchParams = new URLSearchParams();
    //params.set('id', id);

    let options = new RequestOptions({
      headers: header
      //search: params
    });

		return this.http.get(this.config.detailsUrl+'/'+id, options)
    .map(x => {
      console.log(x);
      return <calendarDetails>x.json();
    });
	}
}
