import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { calendarDetails } from '../models/calendarDetails.model'
import { calendarDetailsService } from '../calendarDetails.service';
//import {NavController} from "../../../../node_modules/ionic-angular/umd/navigation/nav-controller";
import {NavController} from "ionic-angular/index";

@Component({
	templateUrl: './lcalendar.item.html'
})
export class DetailsItemPage {
  private service: calendarDetailsService;
	detailpost: calendarDetails;
  private nav: NavController;

	constructor(navParams: NavParams, nav:NavController) {
		this.detailpost = <calendarDetails>navParams.get('item');
		this.nav = nav;
	}


  public itemTapped(item) {
    this.service.getDetails(item.id)
      .subscribe(posts => {
        this.detailpost = posts;
      });
    this.nav.push(DetailsItemPage, {
      item: item
    });
  }


}
