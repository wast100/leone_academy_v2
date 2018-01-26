import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { calendarDetails } from '../models/calendarDetails.model'
import { calendarDetailsService } from '../calendarDetails.service';
//import {NavController} from "../../../../node_modules/ionic-angular/umd/navigation/nav-controller";
import {NavController} from "ionic-angular/index";
import {lCalendar} from "../models/lcalendar.model";

@Component({
	templateUrl: './lcalendar.item.html'
})
export class DetailsItemPage {
  clazztpl: lCalendar;

	constructor(private navParams: NavParams, private nav:NavController, private service: calendarDetailsService) {
		this.clazztpl = <lCalendar>navParams.get('item');
		this.nav = nav;
		this.service.getDetails(this.clazztpl.clazz.id)
      .subscribe(posts => {
        this.clazztpl.clazz = posts;
    });
	}
}
