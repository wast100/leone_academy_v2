import { Injectable } from '@angular/core';
import { CloudSettings } from '@ionic/cloud-angular';


export class Config{
  public newsUrl = 'https://rc.spomix.ch/api/v1/studios/872c8c65-7d15-40f2-9265-a8a9dcf5c1be/newsfeeds'
  public calendarUrl = 'https://rc.spomix.ch/api/v1/studios/872c8c65-7d15-40f2-9265-a8a9dcf5c1be/clazztemplates?p=0&o=10&s=1&as=fullcalendar&f=%7B%7D&start=2017-04-09&end=2017-04-16&activeOnly=true'

  public ionicSecurityProfile = 'Leone01';
  public ionicCloudApiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzN2QyMDk3Ny0xOWRjLTQ3ODQtYWEwNi1hOGE0N2U5YTMxMDUifQ.nkarfQhC9guyukBSIyfnph1zWAiGs-jxV-UTGsiTF0E';
  static videoUrl = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';
  static audioUrl = 'http://www.stephaniequinn.com/Music/Allegro%20from%20Duet%20in%20C%20Major.mp3';
  static sender_id = '132598765091';
  static app_id = '6adce26f';

}

export const cloudSettings: CloudSettings = {
  'core': {
    'app_id': Config.app_id,
  },
  'push': {
    'sender_id': Config.sender_id,
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};
